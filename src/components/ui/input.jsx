export function Input({ className = '', ...props }) {
  return (
    <input
      className={`w-full px-3 py-2 border rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-black ${className}`}
      {...props}
    />
  );
}