const WinnerMessage = ({ hasWon }) => (
  <div
    className={`text-2xl font-semibold mb-4 text-center ${
      hasWon ? "text-green-500" : "text-red-500"
    }`}
  >
    {hasWon ? "You win!" : "You lost!"}
  </div>
);

export default WinnerMessage;
