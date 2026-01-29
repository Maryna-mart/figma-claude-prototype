import { forwardRef } from 'react';

export const Input = forwardRef(({
  type = 'text',
  placeholder = '',
  disabled = false,
  error = false,
  className = '',
  ...props
}, ref) => {
  const baseStyles = 'w-full px-4 py-2.5 border rounded-md transition-colors duration-200 text-base';

  const borderColor = error
    ? 'border-accent-red focus:border-accent-red'
    : 'border-light-gray focus:border-black';

  return (
    <input
      ref={ref}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${borderColor}
        ${disabled ? 'bg-off-white cursor-not-allowed' : 'bg-white'}
        focus:outline-none focus:ring-1 focus:ring-offset-0
        ${className}
      `}
      {...props}
    />
  );
});

Input.displayName = 'Input';
