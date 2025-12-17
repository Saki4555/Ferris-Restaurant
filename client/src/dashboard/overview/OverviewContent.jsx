import { FaHamburger, FaShoppingCart, FaClipboardList, FaUser, FaPlus, FaListAlt, FaTools } from "react-icons/fa";
import { Link } from "react-router-dom";

const OverviewContent = () => {
  const stats = [
    {
      title: "Total Foods",
      value: 10,
      icon: <FaHamburger className="text-3xl text-ferris-prim" />,
    },
    {
      title: "Total Carts",
      value: 3,
      icon: <FaShoppingCart className="text-3xl text-ferris-prim" />,
    },
    {
      title: "Total Orders",
      value: 2,
      icon: <FaClipboardList className="text-3xl text-ferris-prim" />,
    },
    {
      title: "Total Users",
      value: 1,
      icon: <FaUser className="text-3xl text-ferris-prim" />,
    },
  ];

  const quickLinks = [
    {
      label: "Add Food",
      icon: <FaPlus className="text-white" />,
      to: "/dashboard/adminaddfood",
      bg: "bg-ferris-prim"
    },
    {
      label: "View Orders",
      icon: <FaListAlt className="text-white" />,
      to: "/dashboard/orders",
      bg: "bg-ferris-ter"
    },
    {
      label: "Manage Foods",
      icon: <FaTools className="text-white" />,
      to: "/dashboard/allfooditems",
      bg: "bg-ferris-prim-hov"
    },
  ];

  return (
    <div className="p-6 space-y-10">
      <h2 className="text-2xl font-semibold text-gray-800">Dashboard Overview</h2>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-5 flex items-center gap-4 hover:shadow-lg transition"
          >
            <div className="bg-ferris-sec p-4 rounded-full">{stat.icon}</div>
            <div>
              <p className="text-sm text-gray-500">{stat.title}</p>
              <p className="text-xl font-bold text-gray-900">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Links Section */}
      <div>
        <h3 className="text-xl font-medium mb-4 text-gray-700">Quick Actions</h3>
        <div className="flex flex-wrap gap-4">
          {quickLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.to}
              className={`${link.bg} text-white px-5 py-3 rounded-xl flex items-center gap-3 font-medium shadow hover:opacity-90 transition`}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverviewContent;
