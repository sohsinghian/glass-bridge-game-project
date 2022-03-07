# glass-bridge-game-project

Project 1: Squid Game - Glass Bridge

HOW TO PLAY
You can change player character before the start of the game.
You can change the number of lives before the start of the game.
You can turn the background music on or off.

Click on 'start' to start the game.
Press 'a' to move left, 'd' to move right, and 'h' for hint. Hint can only be used once.
Either left or right is a safe cell.
If player moves to the unsafe glass cell, he/she loses a life.
Player loses the game when he/she runs out of lives or time.
Player wins the game when he/she reaches the end.

TECHNOLOGIES USED
HTML, CSS, Vanilla JS

APPROACH TAKEN
Created the grids for the glass bridge first.
Add randomised values of true and false into each grids which are separated by divs, so can manipulate losing and winning.
Added the character in. Using the append function, appended the character into each glass cell if the value is true, and lose a life if value is false.

At first, the approach was hardcoding to append the character as I was only thinking about making the game work, thus making the code very long and messy as I have a function for each step, which makes it 26 functions just to reach the end.
I refactored the functions using parameters and other functions to find the index of where the character is at. The code became much neater after refactoring into one single function for moving forward.

I then added background music and sound effects into the codes.

Added the hint function, where the colours change for the glass cells with true value. However, the game became too simple with the hint, which I then removed the event listener after hint is used once.

Added the change character function, so player can change to a few different characters. Faced many problems here as sometimes the code doesn't work and it also bugged the game. In the end, got it to work by cloning the characters, adding before removing the current characters.

Added the number of lives function, so player can choose lesser lives if they prefer a higher difficulty. The code worked but there's bug when I went to change character after changing lives. So I had to find the link between those 2 functions to solve the bug.

Created the start button so the game only starts when the start button is clicked. Added a timer function as well, to make the game more intense. Faced a few bugs as well. At first the start button can be clicked multiple times, so the timer went haywire. So I had to removed the event listener after start is clicked. Also had problem stopping the timer when game is over, but managed to solve it in the end.

Another bug faced is lives can still be changed after starting the game, so player can cheat in the game. Removed the event listeners for both changing characters and changing lives to fix the bug.

Added CSS flexbox to try to centralise everything.

UNSOLVED PROBLEMS
Still unable to get the screen to resize accordingly when it is smaller.

Player can still move after the game is over right before the screen reloads. Didn't manage to do this as can't figure out how to remove listeners for anonymous functions.
