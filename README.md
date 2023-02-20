# City Name Game application with Vue3 + Vuex + Tailwind

## Live App https://city-name-game.web.app

## Features 

- The game starts when you click on the "Start game" button;
- Next, we, as players, are given the opportunity to start the game by sending the first city to the bot;
- The input has validation for the existence of a city, for a repeating city and for a city that does not start with the correct letter, in case of non-validation, the player receives an Alert message;
- Cities ending with 'ъ', 'ы', 'ь' are considered to end with the letter preceding the listed;
- The answer is given 2 minutes, when the time expires, the transition to the result page occurs;
- A random time is set for the bot to think, so there is a chance that the bot will lose;
- As a result, the number of cities used is displayed, the last named city and the winner are displayed;

## How to run 

```
git clone https://github.com/ArinaKunashko/city-game-app.git
cd city-game-app
npm install
npm run
```
And go to http://localhost:3000/
