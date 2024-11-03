// Displays a visual line indicating the winning combination in the Tic Tac Toe game.

import { getWinLineStyle } from "../utils/getWinLineStyles";

const WinningLine = ({ winLine }) => {
  // If no winning line is provided, do not render anything
  if (winLine === null) return null;

  // Render the winning line using the style from props
  return <div className={getWinLineStyle(winLine)}></div>;
};

export default WinningLine;
