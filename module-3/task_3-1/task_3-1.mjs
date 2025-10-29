"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
  /* Put your code below here!*/

  let wakeUpTime = 8;

  if (wakeUpTime === 7) {
    printOut("I can take the bus to school.");
    } else if (wakeUpTime === 8) {
    printOut("I can take the train to school."); 
    } else {
    printOut("I have to take the car to school.");
    }

  printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
  /* Put your code below here!*/

  let numberOne = 10 ;
  let numberTwo = 0 ;
  let numberThree = -12 ;

  if (numberOne > 0) {
    printOut(numberOne + " is positive.");
  } else if (numberOne < 0) {
    printOut(numberOne + " is negative.");
  } else {
    printOut(numberOne + " is zero");
  }

  if (numberTwo > 0) {
    printOut(numberTwo + " is positive.");
  } else if (numberTwo < 0) {
    printOut(numberTwo + " is negative.");
  } else {
    printOut(numberTwo + " is zero");
  }

  if (numberThree > 0) {
    printOut(numberThree + " is positive.");
  } else if (numberThree < 0) {
    printOut(numberThree + " is negative.");
  } else {
    printOut(numberThree + " is zero");
  }

  printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
  /* Put your code below here!*/

  const RandomNumber = Math.floor(Math.random() * 9);

  if (RandomNumber >= 4) 
    printOut("Thank you!");
  else {
    printOut("The image is too small.");
  }

  printOut("The file was " + RandomNumber + " MB.");

  printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
  /* Put your code below here!*/

  if (RandomNumber < 4)
    printOut("Image too small!");
  else if (RandomNumber > 6) {
    printOut("Image is too large!");
  }
  else {
    printOut("Thank you!");
  }

  printOut("The file was " + RandomNumber + " MB.");
  
  printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
  /* Put your code below here!*/
  const monthList =["January", "February", "Mars", "April", "Mai",
  "Juni", "Juli", "August", "September", "October", "November", "December"];

  const noOfMonth = monthList.length;
  const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
  
  if (monthName.includes ("r"))
    printOut("In " + monthName + ", you need to take vitamin D.");
  else {
    printOut("In " + monthName + ", you do not need to take vitamin D.");
  }

  printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
  /* Put your code below here!*/

  if (["January", "Mars", "Mai", "Juli", "August", "October", "December"].includes(monthName))
    printOut("There are 31 days in " + monthName + ".") ;
  else if (["April", "Juni", "September", "November"].includes(monthName)) {
    printOut("There are 30 days in " + monthName + ".");
  }
  else{
    printOut("There are 28 days in " + monthName + ".");
  }

  printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
  /* Put your code below here!*/

  if (["Mars", "Mai"].includes(monthName))
    printOut("We are refurberishing the premesis during " + monthName + ".") ;
  else if (["April"].includes(monthName)) {
    printOut("We have temorary premises during " + monthName + ". Please contact us in the building next door.");
  }
  else{
    printOut("The gallery is open as usual during " + monthName + ".");
  }

  printOut(newLine);
