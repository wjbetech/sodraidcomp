export default function NavBar() {
  return (
    <nav className="bg-gray-800 flex flex-row justify-between py-2 px-4 w-[100vw] text-center items-center mb-8">
      <a href="/">
        <h3 className="text-2xl font-semibold text-white">SodRaidComp</h3>
      </a>
      <div className="flex gap-6 p-4">
        <a className="text-white" href="/about">
          About
        </a>
        <a className="text-white" href="/faq">
          FAQ
        </a>
      </div>
    </nav>
  );
}

// todo: fix the positioning you donkey
