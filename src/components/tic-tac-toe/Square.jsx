// Represents a single square in the Tic Tac Toe game grid.

const Square = ({ value, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`w-16 h-16 sm:w-24 sm:h-20 md:w-24 md:h-24 text-3xl sm:text-4xl md:text-5xl font-bold flex items-center justify-center
      ${disabled ? "opacity-50" : "hover:bg-white/5"}
      text-amber-500`}
  >
    {value}
  </button>
);

export default Square;
