# _Mr Roboger's Neighborhood_

#### _This project is for Epicodus Code Review #3 made to demonstrate understanding of arrays and looping in JavaScript_

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

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Known Bugs

* _Any known issues_
* _should go here_

## Tests
```
Describe: mrRoboger()

Test: "It should return an array with a 0 if the number 0 is inputted"
Expect(mrRoboger(0).toEqual([0]);

Test: "It should return a range of numbers from 0 to the user inputted number."
Expect(mrRoboger(4)).toEqual([0,1,2,3,4]);

Test: "It should replace all numbers that contain 1 with 'Beep'"
Expect(mrRoger(3)).toEqual([0,'Beep',2,3]);

Test: "It should replace all numbers that contain 2 with 'Boop'"
Expect(mrRoger(3)).toEqual([0,'Beep','Boop',3]);

Test: "It should replace all numbers that contain 3 with 'Won't you be my neighbor?'"
Expect(mrRoger(3)).toEqual([0,'Beep','Boop','Won't you be my neighbor?']);

Test: "If the user inputted number has a 1 and a 2, replace the number with 'Boop'"
Expect(mrRoger(12)).toEqual([0,'Beep','Boop','Won't you be my neighbor?',4,5,6,7,8,9,'Beep','Beep','Boop']);

Test: "If the user inputted number has a 3 and a 1, replace the number with 'Won't you be my neighbor?'"
Expect(mrRoger(13)).toEqual([0,'Beep','Boop','Won't you be my neighbor?',4,5,6,7,8,9,'Beep','Beep','Boop','Won't you be my neighbor?']);

Test: "If the user inputted number has a 3 and a 2, replace the number with 'Wont you be my neighbor?'"
Expect(mrRoger(23)).toEqual([0,'Beep','Boop','Won't you be my neighbor?',4,5,6,7,8,9,'Beep','Beep','Boop','Won't you be my neighbor?','Beep','Beep', 'Beep', 'Beep', 'Beep', 'Beep', 'Boop', 'Boop', 'Boop', 'Won't you be my neighbor?']);
```
## License

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

## Contact Information

_Shannon Lee <shannonleehj@gmail.com>_