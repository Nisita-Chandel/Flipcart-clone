import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

/* ---------------- DATA ---------------- */

const categories = [
  {
    name: "Fashion",
    img: "https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png",
  },
  {
    name: "Travel",
    img: "https://rukminim2.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png",
  },
  {
    name: "Appliances",
    img: "https://rukminim2.flixcart.com/flap/128/128/image/69c6589653afdb9a.png",
  },
  {
    name: "Beauty",
    img: "https://rukminim2.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png",
  },
  {
    name: "Electronics",
    img: "https://i.pinimg.com/1200x/0b/f5/7e/0bf57e9b54ee33e7765ebd8bebb7b407.jpg",
  },
  {
    name: "Furniture",
    img: "https://i.pinimg.com/1200x/45/f9/83/45f983a60e38b6182b3b42e871e2ee86.jpg",
  },
];

const Home = () => {
  const navigate = useNavigate();

  const goToDetails = (product) => {
    navigate("/details", { state: product });
  };

  return (
    <div className="bg-gradient-to-br from-indigo-100 via-white to-purple-100 min-h-screen pb-16">

      {/* HERO SECTION */}
      <div className="text-center py-12">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Welcome to Trendy Store ✨
        </h1>
        <p className="text-gray-600 mt-3">
          Discover the best deals & latest collections
        </p>
      </div>

      {/* CATEGORY BAR */}
      <div className="bg-white/70 backdrop-blur-lg shadow-md mx-4 p-4 rounded-2xl flex justify-between overflow-x-auto">
        {categories.map((cat, i) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            key={i}
            className="flex flex-col items-center min-w-[90px] cursor-pointer"
            onClick={() => goToDetails(cat)}
          >
            <img src={cat.img} alt={cat.name} className="w-16 h-16" />
            <p className="text-sm font-medium mt-2">{cat.name}</p>
          </motion.div>
        ))}
      </div>

      {/* BANNERS */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.img
          whileHover={{ scale: 1.03 }}
          onClick={() =>
            goToDetails({
              title: "Mega Sale",
              img: "https://i.pinimg.com/1200x/3d/10/8a/3d108a6c49fcd69b7afcc614c883c1bd.jpg",
              price: 999,
              offerText: "Limited Time Offer",
            })
          }
          className="rounded-2xl col-span-2 h-[260px] object-cover cursor-pointer shadow-lg"
          src="https://i.pinimg.com/1200x/3d/10/8a/3d108a6c49fcd69b7afcc614c883c1bd.jpg"
        />

        <motion.img
          whileHover={{ scale: 1.03 }}
          onClick={() =>
            goToDetails({
              title: "Special Offer",
              img: "https://i.pinimg.com/1200x/c4/f2/8d/c4f28d7ad6d2278c811c7b73db595099.jpg",
              price: 1499,
              offerText: "Special Discount",
            })
          }
          className="rounded-2xl h-[260px] object-cover cursor-pointer shadow-lg"
          src="https://i.pinimg.com/1200x/c4/f2/8d/c4f28d7ad6d2278c811c7b73db595099.jpg"
        />
      </div>

      {/* DEAL SECTION */}
      <Section title="🔥 Grab or Gone">
        <DealCard
          onClick={goToDetails}
          title="Top Picks"
          price={1299}
          offerText="Min. 30% Off"
          img="https://i.pinimg.com/736x/c0/9d/b5/c09db5748e423667f2827f68481f1c02.jpg"
        />
        <DealCard
          onClick={goToDetails}
          title="Top Collection"
          price={1999}
          offerText="From ₹1,999"
          img="https://i.pinimg.com/1200x/82/06/87/820687860ea85d138e9c261eb719aa90.jpg"
        />
        <DealCard
          onClick={goToDetails}
          title="Under ₹299"
          price={299}
          offerText="Special Price"
          img="https://evael.com/cdn/shop/products/c8d28bc8-e5bb-440d-ad79-fde5a6cbfa06.jpg?v=1709339575"
        />
        <DealCard
          onClick={goToDetails}
          title="Best Deals"
          price={499}
          offerText="Up to 90% Off"
          img="https://i.pinimg.com/1200x/6e/a8/05/6ea8053b16e93ef94a6c823bb38c6a7d.jpg"
        />
      </Section>
    </div>
  );
};

export default Home;

/* ---------------- COMPONENTS ---------------- */

const Section = ({ title, children }) => (
  <div className="bg-white/80 backdrop-blur-lg mx-4 mt-8 p-6 rounded-2xl shadow-md">
    <h2 className="text-2xl font-bold mb-6">{title}</h2>
    <div className="flex gap-6 overflow-x-auto">{children}</div>
  </div>
);

const DealCard = ({ img, title, price, offerText, onClick }) => (
  <motion.div
    whileHover={{ y: -5 }}
    onClick={() => onClick({ img, title, price, offerText })}
    className="min-w-[200px] bg-white p-4 rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer"
  >
    <img src={img} className="h-40 w-full object-contain mb-3" />
    <p className="font-semibold text-sm">{title}</p>
    <p className="text-indigo-600 font-bold text-sm mt-1">₹{price}</p>
    {offerText && (
      <p className="text-xs text-gray-500 mt-1">{offerText}</p>
    )}
  </motion.div>
);
