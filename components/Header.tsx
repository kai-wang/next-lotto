import NavButton from "./NavButton";

function Header() {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <img
          className="rounded-full h-20 w-20"
          src="https://www.thelott.com/content/dam/projects/the-lott/logos/tattslotto.png"
          alt="Lotto"
        />
        <div>
            <h1 className="text-lg text-white font-bold">W3 Draw</h1>
            <p className="text-xs text-emerald-500 truncate">User...</p>
        </div>
      </div>

      <div>
        <div className="bg-[#0A1F1C]">
            <NavButton title="Buy Ticket" isActive />
            <NavButton title="Logout" />
            {/* Button */}
        </div>
      </div>
    </div>
  );
}

export default Header;
