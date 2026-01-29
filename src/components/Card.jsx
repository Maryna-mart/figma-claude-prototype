export function Card({ children, className = '', hoverable = false, ...props }) {
  return (
    <div
      className={`
        bg-white rounded-lg shadow-sm border border-light-gray
        ${hoverable ? 'transition-shadow duration-200 hover:shadow-md' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}
