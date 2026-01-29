export function Badge({ children, variant = 'default', size = 'md' }) {
  const baseStyles = 'inline-flex items-center rounded-md font-semibold';

  const variants = {
    default: 'bg-off-white text-black',
    accent: 'bg-accent-blue text-white',
    success: 'bg-mint-green text-black',
    warning: 'bg-warm-beige text-black',
    error: 'bg-accent-red text-white',
  };

  const sizes = {
    sm: 'px-2.5 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base',
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${sizes[size]}`}>
      {children}
    </span>
  );
}
