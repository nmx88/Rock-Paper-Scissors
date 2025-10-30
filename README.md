# Rock-Paper-Scissors

A console browser-based Rock Paper Scissors game built with vanilla JS.

This project implements a classic Rock Paper Scissors game where the player competes against the computer in a best-of-five series. The game features:

- Random computer choice generation
- User input via browser prompts
- Score tracking until 5 wins
- Console feedback

## Functions

1. getComputerChoice()

Generates random computer choice (Rock, Paper, or Scissors)
Uses Math.random() for random number generation
Returns computer's selection as a string

2. getHumanChoice()

Captures user input via prompt()
Validates and normalizes input (case-insensitive)
Returns player's selection as a string

3. playRound(humanChoice, computerChoice)

Compares player and computer choices
Implements game logic:
Rock beats Scissors
Paper beats Rock
Scissors beat Paper
Updates scores and returns round result

4. playGame()

Main game function containing nested playRound()
Implements while loop until either player reaches 5 wins
Tracks scores locally within function scope
Displays results in console

## Key Features

- Input Validation: Case-insensitive input handling
- Error Handling: Invalid input detection
- Score Tracking: Local variable scope within playGame()
- Win Condition: First to 5 wins

## How to run

1. Open index.html in a web browser
2. Open Developer Console (F12 → Console)
3. The game will start when you press Start Button
4. Answer Prompts
5. View real-time results in the console
