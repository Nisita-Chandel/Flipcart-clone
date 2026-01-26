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
          <DealCard title="Top Picks" price="Min. 30% Off" img="https://i.pinimg.com/736x/c0/9d/b5/c09db5748e423667f2827f68481f1c02.jpg" />
          <DealCard title="Top Collection" price="From ₹1,299" img="https://i.pinimg.com/1200x/82/06/87/820687860ea85d138e9c261eb719aa90.jpg" />
          <DealCard title="Under ₹299" price="Special Price" img="https://evael.com/cdn/shop/products/c8d28bc8-e5bb-440d-ad79-fde5a6cbfa06.jpg?v=1709339575" />
          <DealCard title="Best Deals" price="Up to 90% Off" img="https://i.pinimg.com/1200x/6e/a8/05/6ea8053b16e93ef94a6c823bb38c6a7d.jpg" />
        </Section>
  
        {/* SPONSORED */}
        <Section title="Sponsored">
          <DealCard title="Travel in Style" price="Min. 75% Off" img="https://i.pinimg.com/736x/f4/f2/92/f4f2925bbf19947463c820c791834b07.jpg" />
          <DealCard title="Elegance Redefined" price="Min. 50% Off" img="https://i.pinimg.com/736x/68/72/b6/6872b6eed01722b91f49d8df8a2d5bd6.jpg" />
          <DealCard title="Pick Your Kicks" price="Min. 50% Off" img="https://i.pinimg.com/736x/89/33/6d/89336d003403726af36914b838d83ff1.jpg" />
        </Section>
  
        {/* TRENDS */}
        <Section title="Trends You May Like">
          <DealCard title="Stackable" img="https://i.pinimg.com/736x/40/05/54/400554a058682df8da2926d1c950aba4.jpg" />
          <DealCard title="Fusion Lehenga" img="https://i.pinimg.com/736x/ec/6e/69/ec6e696732e5aa9c658559625ed329cd.jpg" />
          <DealCard title="Healthy Cooking" img="https://i.pinimg.com/1200x/e8/35/ed/e835ed89023c2a6d2d1933321d59efc4.jpg" />
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
  