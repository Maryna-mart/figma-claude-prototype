export function Navigation({ active = 'men' }) {
  const navItems = [
    { id: 'men', label: 'MEN' },
    { id: 'women', label: 'WOMEN' },
    { id: 'kids', label: 'KIDS' },
    { id: 'sale', label: 'SALE' },
  ];

  return (
    <nav className="flex gap-8">
      {navItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={`
            text-sm font-semibold transition-colors duration-200
            ${active === item.id
              ? 'text-black border-b-2 border-black'
              : 'text-charcoal hover:text-black'
            }
          `}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
