const Header = () => {
  return (
    <header className="container px-2 md:px-0 flex justify-between items-center py-5 border-b mx-auto">
      <h2 className="text-2xl md:text-4xl font-bold text-black">
        Knowledge Cafe
      </h2>
      <img
        src="https://i.ibb.co/Ykr4nyd/IMG-6323.jpg"
        alt=""
        className="w-12 h-12 object-cover rounded-full"
      />
    </header>
  );
};

export default Header;
