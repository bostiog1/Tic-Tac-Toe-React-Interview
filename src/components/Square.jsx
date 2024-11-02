const Square = ({ value, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`w-24 h-24 text-4xl font-bold flex items-center justify-center
      ${disabled ? "opacity-50" : "hover:bg-white/5"}
      ${value === "X" ? "text-amber-500" : "text-amber-500"}`}
  >
    {value}
  </button>
);

export default Square;
