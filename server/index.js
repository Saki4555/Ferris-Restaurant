const express = require("express");
const cors = require("cors");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cookieParser = require("cookie-parser");
const app = express();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const port = process.env.PORT || 5000;

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

//middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.g0pku.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.phgiqsm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

//my middlewares
const logger = (req, res, next) => {
  console.log("loginfo : ", req.method, req.url);
  next();
};

const verifyToken = (req, res, next) => {
  const token = req?.cookies?.token;
  // console.log('token in the middleware', token);
  // next();
  if (!token) {
    return res.status(401).send({ message: "unauthorized access" });
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "unauthorized access" });
    }
    req.user = decoded;
    next();
  });
};

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    client.connect();

    const userCollection = client.db("ferrisDB").collection("users");
    const foodCollection = client.db("ferrisDB").collection("allfoods");
    const cartCollection = client.db("ferrisDB").collection("carts");

    const orderCollection = client.db("ferrisDB").collection("order");

    app.post("/jwt", async (req, res) => {
      const logged = req.body;
      console.log("user for token", logged);
      const token = jwt.sign(logged, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "1h",
      });

      res
        .cookie("token", token, {
          httpOnly: true,
          secure: true,
          sameSite: "none",
        })
        .send({ success: true });
    });

    app.post("/logout", async (req, res) => {
      const logged = req.body;
      console.log("logging out", logged);
      res.clearCookie("token", { maxAge: 0 }).send({ success: true });
    });

    //user related api
    app.get("/users", async (req, res) => {
      const users = await userCollection.find().toArray();
      res.send(users);
    });

    // asm------------------------------------------------------------------------
    app.get("/user/:email", async (req, res) => {
      try {
        const email = req.params.email;
        const user = await userCollection.findOne({ email: email });

        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(user);
      } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ message: "Internal Server Error" });
      }
    });
    // --------------------------------------------------------------------------
    app.post("/users", async (req, res) => {
      const user = req.body;
      console.log(user);
      const result = await userCollection.insertOne(user);
      res.send(result);
    });

    app.get("/allfoods", async (req, res) => {
      const food = foodCollection.find();
      const result = await food.toArray();
      res.send(result);
    });

    //asm --------------- foods-----------------------------

    app.post("/allfoods", async (req, res) => {
      try {
        const food = req.body;

        // ✅ Validate Required Fields Before Inserting

        console.log("📝 New Food Data Received:", food);

        // ✅ Insert Data into Database
        const result = await foodCollection.insertOne(food);

        // ✅ Send Success Response
        res.status(201).json({
          success: true,
          message: "Food item added successfully!",
          insertedId: result.insertedId,
        });
      } catch (error) {
        console.error("❌ Error adding food:", error);
        res
          .status(500)
          .json({ success: false, message: "Internal Server Error" });
      }
    });

    app.get("/allfoods/:id", async (req, res) => {
      try {
        const foodId = req.params.id; // Get the ID from URL params

        // Validate ID format
        if (!ObjectId.isValid(foodId)) {
          return res.status(400).json({ message: "Invalid food ID format" });
        }

        // Find the food item by its _id
        const food = await foodCollection.findOne({
          _id: new ObjectId(foodId),
        });

        if (!food) {
          return res.status(404).json({ message: "Food item not found" });
        }

        res.json(food); // Send the found food item
      } catch (error) {
        console.error("Error fetching food item:", error);
        res.status(500).json({ message: "Internal Server Error" });
      }
    });

    app.delete("/allfoods/:id", async (req, res) => {
      try {
        const foodId = req.params.id;

        // ✅ Validate ID Format
        if (!ObjectId.isValid(foodId)) {
          return res
            .status(400)
            .json({ success: false, message: "Invalid food ID format" });
        }

        console.log("🗑 Deleting Food Item with ID:", foodId);

        // ✅ Delete Food Item from Database
        const result = await foodCollection.deleteOne({
          _id: new ObjectId(foodId),
        });

        // ✅ Check if Item Was Deleted
        if (result.deletedCount === 0) {
          return res
            .status(404)
            .json({ success: false, message: "Food item not found" });
        }

        // ✅ Send Success Response
        res.status(200).json({
          success: true,
          message: "Food item deleted successfully!",
        });
      } catch (error) {
        console.error("❌ Error deleting food:", error);
        res
          .status(500)
          .json({ success: false, message: "Internal Server Error" });
      }
    });

    app.patch("/allfoods/:id", async (req, res) => {
      try {
        const foodId = req.params.id;
        const updatedData = req.body;

        //  Remove `_id` from the update object to prevent MongoDB error
        delete updatedData._id;

        //  Validate ID Format
        if (!ObjectId.isValid(foodId)) {
          return res
            .status(400)
            .json({ success: false, message: "Invalid food ID format" });
        }

        console.log("✏️ Updating Food Item:", foodId, updatedData);

        //  Update only the provided fields
        const result = await foodCollection.updateOne(
          { _id: new ObjectId(foodId) },
          { $set: updatedData }
        );

        if (result.matchedCount === 0) {
          return res
            .status(404)
            .json({ success: false, message: "Food item not found" });
        }

        res
          .status(200)
          .json({ success: true, message: "Food item updated successfully!" });
      } catch (error) {
        console.error("❌ Error updating food:", error);
        res
          .status(500)
          .json({ success: false, message: "Internal Server Error" });
      }
    });

    // asm ---------------foods end---------------------------------------

    app.put("/allfoods/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upset: true };
      const updatedProduct = req.body;
      const food = {
        $set: {
          foodName: updatedProduct.foodName,
          foodCategory: updatedProduct.foodCategory,
          quantity: updatedProduct.quantity,
          origin: updatedProduct.origin,
          price: updatedProduct.price,
          descriptions: updatedProduct.descriptions,
        },
      };
      const result = await foodCollection.updateOne(filter, food, options);
      res.send(result);
    });

    // asm---------------------- cart----------------------------
    app.put("/addtocart/:email", async (req, res) => {
      const email = req.params.email;
      const food = req.body;

      if (!food || !food.name || !food.price || !food.quantity) {
        return res
          .status(400)
          .send({ message: "Food data is missing or incomplete" });
      }

      try {
        const cartExists = await cartCollection.findOne({
          email: email,
          "foods.foodId": food.foodId,
          status: "active",
        });

        if (cartExists) {
          const result = await cartCollection.updateOne(
            {
              email: email,
              status: "active",
              "foods.foodId": food.foodId, // required for positional operator
            },
            {
              $set: {
                updatedAt: new Date(),
                "foods.$.quantity": food.quantity,
              },
            }
          );
          return res.status(200).send(result);
        }

        const result = await cartCollection.updateOne(
          { email: email, status: "active" },
          {
            $set: { updatedAt: new Date() },
            $addToSet: { foods: food },
          },
          { upsert: true }
        );

        res.status(200).send(result);
      } catch (error) {
        console.error("Error adding food to cart:", error);
        res.status(500).send({
          message:
            "Something went wrong while adding food to the cart. Please try again.",
          error: error.message,
        });
      }
    });

    app.patch("cart/remove", async (req, res) => {
      const { email, foodId } = req.body;
      if ((!email, !foodId)) {
        return res
          .status(404)
          .send({ message: "Email and FoodID are required" });
      }

      const result = await cartCollection.updateOne(
        { email: email, status: "active" },
        {
          $pull: { foods: { foodId: foodId } },
        }
      );
      res.send(result);
    });

    app.get("/cart/:email", async (req, res) => {
      const { email } = req.params;

      // Check if the email is provided
      if (!email) {
        return res.status(400).json({ message: "Email is required" });
      }

      try {
        // Query to find the active cart for the user
        const cart = await cartCollection.findOne({
          email: email,
          status: "active", // Ensure the cart is active
        });

        if (!cart) {
          return res
            .status(404)
            .json({ message: "Cart not found for this user" });
        }

        // Return the cart data (foods, status, etc.)
        return res.status(200).json(cart); // Send the cart data back to the client
      } catch (error) {
        console.error("Error fetching cart data:", error);
        return res.status(500).json({
          message: "Error retrieving cart data. Please try again later.",
          error: error.message,
        });
      }
    });

    app.patch("/cart/clear/:email", async (req, res) => {
      const email = req.params.email;

      // Check if email is provided
      if (!email) {
        return res.status(400).send({ message: "Email is required" });
      }

      try {
        // Update the active cart for the given email by clearing the 'foods' array
        const result = await cartCollection.updateOne(
          { email: email, status: "active" },
          { $set: { foods: [] } } // Clear the foods array
        );

        // Check if a cart was updated
        if (result.modifiedCount > 0) {
          res.status(200).send({ message: "Cart cleared successfully" });
        } else {
          res
            .status(404)
            .send({ message: "No active cart found for this email" });
        }
      } catch (error) {
        // Handle any errors that occur
        console.error(error);
        res
          .status(500)
          .send({ message: "An error occurred while clearing the cart" });
      }
    });

    // cart------------------------end-------------------------

    // asm----------------payment-----------------------
    app.post("/create-checkout-session", async (req, res) => {
      const cartFoods = req.body;

      const lineItems = cartFoods.map((product) => ({
        price_data: {
          currency: "eur",
          product_data: {
            name: product.name,
            images: [product.image],
          },
          unit_amount: product.price * 100,
        },
        quantity: product.quantity,
      }));
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",

        // success_url: `${process.env.CLIENT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
        success_url: `https://ferris-restaurant.vercel.app/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `https://ferris-restaurant.vercel.app/cancel`,
        line_items: lineItems,
      });

      res.json({ id: session.id });
    });

    // verify payment
    app.post("/verify-payment", async (req, res) => {
      const { sessionId } = req.body;
      const session = await stripe.checkout.sessions.retrieve(sessionId);
      if (session.payment_status === "paid") {
        res.send({ success: true });
      } else {
        res.send({ success: false });
      }
    });
    // payment-----------------end--------------------

    //order related API
    app.get("/order", logger, verifyToken, async (req, res) => {
      console.log(req.body);
      console.log("owener info: ", req.user);
      //console.log('cookkkkkiee', req.cookies);
      const order = orderCollection.find();
      const result = await order.toArray();
      res.send(result);
    });

    app.get("/topfoods", async (req, res) => {
      const topFood = await foodCollection
        .find()
        .sort({ ordersCount: -1 })
        .limit(6)
        .toArray();

      res.send(topFood);
    });

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("server is running");
});

app.listen(port, () => {
  console.log(`server is runnin on port: ${port}`);
});

module.exports = app;

// dine-dash
// qTpFhlhTufk9S8oa
