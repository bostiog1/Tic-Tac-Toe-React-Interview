
export const getWinLineStyle = (winLine) => {
  const baseStyle = "absolute bg-white z-10";

  const styles = {
    0: `${baseStyle} h-0.5 w-[90%] top-[16.67%] left-[5%]`,
    1: `${baseStyle} h-0.5 w-[90%] top-[50%] left-[5%]`,
    2: `${baseStyle} h-0.5 w-[90%] top-[83.33%] left-[5%]`,
    3: `${baseStyle} w-0.5 h-[90%] left-[16.67%] top-[5%]`,
    4: `${baseStyle} w-0.5 h-[90%] left-[50%] top-[5%]`,
    5: `${baseStyle} w-0.5 h-[90%] left-[83.33%] top-[5%]`,
    6: `${baseStyle} w-[140%] h-0.5 top-[50%] left-[-20%] rotate-45`,
    7: `${baseStyle} w-[140%] h-0.5 top-[50%] left-[-20%] -rotate-45`,
  };

  return styles[winLine] || "";
};
