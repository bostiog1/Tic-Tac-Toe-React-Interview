// Renders the grid lines for the game board, providing a visual structure to the squares.

const GridLines = () => (
  <div className="absolute inset-2">{/* Outer container for grid lines */}
    {/* Vertical lines */}
    <div className="absolute left-1/3 top-0 h-full w-0.5 bg-neutral-600"></div>
    <div className="absolute right-1/3 top-0 h-full w-0.5 bg-neutral-600"></div>
    {/* Horizontal lines */}
    <div className="absolute top-1/3 left-0 w-full h-0.5 bg-neutral-600"></div>
    <div className="absolute bottom-1/3 left-0 w-full h-0.5 bg-neutral-600"></div>
  </div>
);

export default GridLines;
