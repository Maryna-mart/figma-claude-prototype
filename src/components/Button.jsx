export function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  ...props
}) {
  const baseStyles = 'font-semibold transition-colors duration-200 cursor-pointer border-none rounded-md';

  const variants = {
    primary: 'bg-black text-white hover:bg-dark-charcoal disabled:bg-medium-gray',
    secondary: 'bg-light-gray text-black hover:bg-very-light-gray disabled:bg-very-light-gray',
    outline: 'border border-black text-black hover:bg-off-white disabled:border-medium-gray disabled:text-medium-gray',
    accent: 'bg-accent-blue text-white hover:bg-very-dark-gray disabled:bg-medium-gray',
  };

  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? 'w-full' : ''}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
      `}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
