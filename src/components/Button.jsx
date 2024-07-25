
function Button({ children, type = 'button', bgColor = 'bg-blue-100', textColor = 'text-white', className = '', ...props }) {
  return (
    <button className={`px-4 py-2 rounded-lg ${type} ${bgColor} ${textColor} ${className}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
