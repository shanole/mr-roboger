# Mr Roboger's Neighborhood

#### This project is for Epicodus Code Review #3 made to demonstrate understanding of arrays and looping in JavaScript

#### By Shannon Lee

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript
* JQuery
* Git
* VS Code

## Description

This is a web application that takes a number input from the user via a form, and then returns a range of numbers from 0 to the user inputted number with the following exceptions (in order of increasing importance):

* Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
* Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
* Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"

## Setup/Installation Requirements

* Clone this repository to your machine
* Navigate to the top level of this directory `mr-roboger/`
* Open `index.html` in your web browser

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Known Bugs

* If you put a non-integer into the form, or a number followed by non-numeric characters, the form will only use the first number it finds as the input value.

## Tests
```
Describe: mrRoboger()

Test: "It should return an array with a 0 if the number 0 is inputted"
Expect(mrRoboger(0).toEqual([0]);

Test: "It should return a range of numbers from 0 to the user inputted number."
Expect(mrRoboger(4)).toEqual([0,1,2,3,4]);

Test: "It should replace the number 1 with 'Beep'"
Expect(mrRoger(3)).toEqual([0,'Beep',2,3]);

Test: "It should replace the number 2 with 'Boop'"
Expect(mrRoger(3)).toEqual([0,'Beep','Boop', 3]);

Test: "It should replace the number 3 with 'Won't you be my neighbor?'"
Expect(mrRoger(3)).toEqual([0,'Beep','Boop','Won't you be my neighbor?']);

Test: "It should replace multi-digit numbers containing 1 with 'Beep'"
Expect(mrRoger(10)).toEqual([0,'Beep','Boop,3,4,5,6,7,8,9,'Beep']);

Test: "It should replace multi-digit numbers containing 2 with 'Boop', even if they also contain 1"
Expect(mrRoger(12)).toEqual([0,'Beep','Boop,3,4,5,6,7,8,9,'Beep','Beep','Boop']);

Test: "It should replace multi-digit numbers containing 3 with 'Won't you be my neighbor?' even if they also contain 1"
Expect(mrRoger(13)).toEqual([0,'Beep','Boop,3,4,5,6,7,8,9,'Beep','Beep','Boop', 'Won't you be my neighbor?']);

Test: "It should replace multi-digit numbers containing 3 with 'Won't you be my neighbor?' even if they also contain 2"
Expect(mrRoger(23)).toEqual([0,'Beep','Boop,3,4,5,6,7,8,9,'Beep','Beep','Boop', 'Won't you be my neighbor?', 'Beep', 'Beep', 'Beep', 'Beep', 'Beep', 'Beep', 'Boop', 'Boop', 'Boop', 'Won't you be my neighbor?]);

```
## License
[MIT](https://opensource.org/licenses/MIT)

_Copyright (c) Shannon Lee 2021_
_<shannonleehj@gmail.com>_

## Resources
[Learn How to Program](https://www.learnhowtoprogram.com/introduction-to-programming-part-time-c-and-react-track)

[Bootstrap](https://getbootstrap.com/)

[jQuery](https://api.jquery.com/)