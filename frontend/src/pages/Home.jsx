const categories = [
    { name: "Fashion", img: "https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png" },
    { name: "Travel", img: "https://rukminim2.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png" },
    { name: "Appliances", img: "https://rukminim2.flixcart.com/flap/128/128/image/69c6589653afdb9a.png" },
    { name: "Beauty", img: "https://rukminim2.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png" },
    { name: "Electronics", img: "https://i.pinimg.com/1200x/0b/f5/7e/0bf57e9b54ee33e7765ebd8bebb7b407.jpg" },
    { name: "Furniture", img: "https://i.pinimg.com/1200x/45/f9/83/45f983a60e38b6182b3b42e871e2ee86.jpg" },
  ];
  
  const Home = () => {
    return (
      <div className="bg-gray-100 pb-10">
  
        {/* CATEGORY BAR */}
        <div className="bg-white shadow p-4 flex justify-between overflow-x-auto">
          {categories.map((cat, i) => (
            <div key={i} className="flex flex-col items-center min-w-[90px]">
              <img src={cat.img} alt={cat.name} className="w-16 h-16" />
              <p className="text-sm font-medium mt-1">{cat.name}</p>
            </div>
          ))}
        </div>
  
        {/* BANNERS */}
        <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <img
            className="rounded-lg col-span-2 h-[250px] w-150 object-cover"
            src="https://i.pinimg.com/1200x/3d/10/8a/3d108a6c49fcd69b7afcc614c883c1bd.jpg"
          />
          <img
            className="rounded-lg h-[250px] w-150 object-cover"
            src="https://i.pinimg.com/1200x/c4/f2/8d/c4f28d7ad6d2278c811c7b73db595099.jpg"
          />
        </div>
  
        {/* DEAL SECTION */}
        <Section title="Grab or Gone">
          <DealCard title="Top Picks" price="Min. 30% Off" img="https://rukminim2.flixcart.com/image/200/200/kz8qsnk0/dress/i/v/u/l-ttj6007878-tokyo-talkies-original-imagbav7e3shh5rz.jpeg" />
          <DealCard title="Top Collection" price="From ₹1,299" img="https://rukminim2.flixcart.com/image/200/200/xif0q/speaker-mobile/6/n/q/-original-imagg7v2v4tfhz5n.jpeg" />
          <DealCard title="Under ₹299" price="Special Price" img="https://rukminim2.flixcart.com/image/200/200/kp5sya80/kitchen-tool-set/g/h/m/1-vegetable-chopper-flipkart-smartbuy-original-imag3guxkzg3b4bd.jpeg" />
          <DealCard title="Best Deals" price="Up to 90% Off" img="https://rukminim2.flixcart.com/image/200/200/kpmy8i80/sleeveless-vest/h/p/f/m-vest-101-one-original-imag3t3zbvcz8sbg.jpeg" />
        </Section>
  
        {/* SPONSORED */}
        <Section title="Sponsored">
          <DealCard title="Travel in Style" price="Min. 75% Off" img="https://rukminim2.flixcart.com/image/300/300/xif0q/watch/5/z/j/-original-imagkz8r6mczqvfs.jpeg" />
          <DealCard title="Elegance Redefined" price="Min. 50% Off" img="https://rukminim2.flixcart.com/image/300/300/xif0q/shoe/e/o/e/8-395746-8-puma-white-blue-original-imaggm6zt5n4ttxb.jpeg" />
          <DealCard title="Pick Your Kicks" price="Min. 50% Off" img="https://rukminim2.flixcart.com/image/300/300/xif0q/shoe/3/l/k/7-395747-7-puma-grey-original-imaggm6zxptfkygy.jpeg" />
        </Section>
  
        {/* TRENDS */}
        <Section title="Trends You May Like">
          <DealCard title="Stackable" img="https://rukminim2.flixcart.com/image/200/200/xif0q/jewellery-set/p/y/7/-original-imagmp3a9h5vdq9m.jpeg" />
          <DealCard title="Fusion Lehenga" img="https://rukminim2.flixcart.com/image/200/200/xif0q/lehenga-choli/8/k/m/free-full-sleeve-nb-213-black-navy-bollywood-original-imaghxw7jffzypgm.jpeg" />
          <DealCard title="Healthy Cooking" img="https://rukminim2.flixcart.com/image/200/200/xif0q/tawa/q/y/c/non-stick-yes-original-imagp3sygwsfkgdh.jpeg" />
        </Section>
  
      </div>
    );
  };
  
  export default Home;
  
  /* ---------------- COMPONENTS ---------------- */
  
  const Section = ({ title, children }) => (
    <div className="bg-white mx-4 mt-6 p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="flex gap-4 overflow-x-auto">
        {children}
      </div>
    </div>
  );
  
  const DealCard = ({ img, title, price }) => (
    <div className="min-w-[180px] bg-gray-50 p-3 rounded-lg hover:shadow-lg transition">
      <img src={img} className="h-36 w-full object-contain mb-2" />
      <p className="font-medium text-sm">{title}</p>
      {price && <p className="text-green-600 font-bold text-sm">{price}</p>}
    </div>
  );
  