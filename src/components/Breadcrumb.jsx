export function Breadcrumb({ items }) {
  return (
    <nav className="flex items-center gap-2 text-sm">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {index > 0 && <span className="text-charcoal">/</span>}
          {item.href ? (
            <a
              href={item.href}
              className="text-charcoal hover:text-black transition-colors"
            >
              {item.label}
            </a>
          ) : (
            <span className="text-black font-semibold">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
