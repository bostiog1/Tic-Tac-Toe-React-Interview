# Tic-Tac-Toe Game

## Overview 
Visit https://bostiog1.github.io/Tic-Tac-Toe-React-Interview/ to see the live website.

A responsive Tic-Tac-Toe game built with React, Redux, and TailwindCSS. This application allows two players to compete, keeps track of scores, and features a chat functionality for real-time communication between players, optimized for different screen sizes.

## Features

- Multiplayer game interface
- Real-time score tracking
- Responsive layout for various screen sizes
- Custom win/lose/draw messages for each player
- In-game chat feature allowing players to communicate in real-time

## Technologies

- **React**
- **Redux** for state management
- **Tailwind CSS** for styling
- **GitHub Pages** for hosting

## Usage

1. **Playing the Game**:

   - Click on any square to place your mark (X or O).
   - The game alternates turns between Player 1 and Player 2.
   - The game ends when one player wins or if there's a draw.

2. **Chat Feature**:

   - Players can communicate with each other using the chat feature located alongside the game board.
   - Messages sent in the chat will be displayed in real-time, and players can reset the chat messages when resetting the game.

3. **Resetting the Game**:
   - To reset the scores, click the `Reset` button in the scoreboard.
   - The game will automatically restart after a win or draw, but the scores will remain unchanged unless manually reset.
   - Resetting the game will also clear the chat messages.

## Setup Instructions

Follow these steps to run the application locally.

### Prerequisites

- Node.js (>=14.x) and npm

### Installation

1. **Clone the repository**:

   open terminal

   git clone https://github.com/bostiog1/Tic-Tac-Toe-React-Interview.git

   cd tic-tac-toe-react-interview

2. **Install dependencies:**

   npm install

3. **Start the development server**:

   npm run dev
