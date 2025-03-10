

const Offer = () => {
    return (
        <div>
           
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/XJdCZcn/20-off-png-0.png" className="max-w-sm rounded-lg w-1/2" />
                    <div className="lg:w-1/2">
                        <h1 className="text-5xl mb-10 font-bold"><span className="text-ferris-prim" >Special</span> Person!! <br /> Special <span className="text-ferris-prim" >Offer</span></h1>
                        <p className="pt-6 font-semibold text-xl text-ferris-ter">Keep our token that provided by us after completing your meal.</p>
                        <p className="py-3 text-ferris-ter/50 font-bold">We provide a random offer in every month in a random day!!! If you carry our token that previously received you in those random day, you will be the lucky one and get this special offer </p>

                        {/* <h2 className="text-3xl font-semibold py-3">Last Month offer date!</h2>
                        <button className="px-3 py-1 bg-ferris-prim text-white capitalize border-none lg:text-2xl ">20 August, 2023</button> */}
                    </div>
                </div>
            </div>
        </div>


       
    );
};

export default Offer;