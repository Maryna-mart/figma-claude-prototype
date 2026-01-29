import { forwardRef } from 'react';

export const Checkbox = forwardRef(({
  label,
  checked = false,
  disabled = false,
  ...props
}, ref) => {
  return (
    <label className="flex items-center gap-3 cursor-pointer">
      <input
        ref={ref}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        className="w-4 h-4 rounded border border-light-gray cursor-pointer accent-black"
        {...props}
      />
      {label && (
        <span className={`text-sm ${disabled ? 'text-medium-gray' : 'text-black'}`}>
          {label}
        </span>
      )}
    </label>
  );
});

Checkbox.displayName = 'Checkbox';
