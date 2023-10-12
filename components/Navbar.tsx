// Navigation
const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Data", href: "/data-util" },
  { name: "Login", href: "/login" },
];

export default function Navbar() {
  return (
    <nav className="p-4 flex items-center justify-between">
      <a
        className="font-bold text-xl md:text-2xl lg:text-4xl text-black hover:no-underline"
        href="/"
      >
        EcoScape
      </a>
      <div className="flex space-x-8 text-sm md:text-base lg:text-lg font-medium">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="hover:underline text-black"
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
