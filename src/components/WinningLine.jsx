import { getWinLineStyle } from "../utils/winLineStyles";

const WinningLine = ({ winLine }) => {
  if (winLine === null) return null;

  return <div className={getWinLineStyle(winLine)}></div>;
};

export default WinningLine;
