"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
    /* Put your code below here!*/

    let up = "";
    let down = "";

    for (let countUp = 1; countUp <= 10; countUp++) {
        up += countUp + " ";
    }

    for (let countDown = 10; countDown >= 1; countDown--) {
        down += countDown + " ";
    }
    
    printOut(up);
    printOut(down);

    printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
    /* Put your code below here!*/

    const numberP2 = 42;
    let guessP2 = 0;
    let attemptsP2 = 0;

    while (numberP2 !== guessP2)    {
        guessP2=Math.floor(Math.random() * 60) +1;
        attemptsP2++;
    }
    printOut("It took " + attemptsP2 + " attempts to guess the correct number. The correct number was " + numberP2 + ".");

    printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
    /* Put your code below here!*/

    const numberP3 = 467069;
    let guessP3 = 0;
    let attemptsP3 = 0;

    const startTimeP3 = Date.now();

    while (numberP3 !== guessP3)    {
        guessP3=Math.floor(Math.random() * 1000000) +1;
        attemptsP3++;
    }

    const endTimeP3 = Date.now();

    const elapsedTimeP3 = endTimeP3 - startTimeP3;

    printOut("It took " + attemptsP3 + " attempts and "+ elapsedTimeP3 +"ms to guess the correct number. The correct number was " + numberP3 + ".");

    printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
    /* Put your code below here!*/

    let primeNumbersP4 = "";

    for (let numberP4 = 2; numberP4 <= 200; numberP4++) {
        let isPrime = true;
        let countUpP4 = 2;

            while (countUpP4 <= Math.sqrt(numberP4)) {
                if (numberP4 % countUpP4 === 0) {
                    isPrime = false;
                    break;
                }
                countUpP4++;
            }

            if (isPrime) {
                primeNumbersP4 += numberP4 + " ";
            }
        }

    printOut(primeNumbersP4);

    printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
    /* Put your code below here!*/

    for (let rows =1; rows <=7; rows++) {
        let patternRows = "";

        for (let columns =1; columns <=9; columns++) {
            patternRows += "K" + columns + "R" + rows + " ";
        }
        printOut(patternRows);
    }
    
    printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
    /* Put your code below here!*/

    
    let studentNumber = 1;

    while (studentNumber <= 5 ) {
        let studentGrade = Math.floor(Math.random() * 236) + 1;

        if (studentGrade >= 236 * 0.89) {
            printOut("Student " + studentNumber + " received grade A with " + studentGrade + " points.");
        } else if (studentGrade >= 236 * 0.77) {
            printOut("Student " + studentNumber + " received grade B with " + studentGrade + " points.");
        } else if (studentGrade >= 236 * 0.65) {
            printOut("Student " + studentNumber + " received grade C with " + studentGrade + " points.");
        } else if (studentGrade >= 236 * 0.53) {
            printOut("Student " + studentNumber + " received grade D with " + studentGrade + " points.");
        } else if (studentGrade >= 236 * 0.41) {
            printOut("Student " + studentNumber + " received grade E with " + studentGrade + " points.");
        } else {
            printOut("Student " + studentNumber + " received grade F with " + studentGrade + " points.");
        }
        studentNumber++;
    }

    printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
    /* Put your code below here!*/

    let attemptsP7straight = 0;
    let rolledNumbersStraight = new Set();

    let attemptsP7pairs = 0;
    let rolledNumbersPairs = {};

    let attemptsP7fullHouse = 0;
    let rolledNumbersFullHouse = {};

    let attemptsP7yatzhee = 0;
    let rolledNumbersYatzhee = {};


    while (rolledNumbersStraight.size < 6) { 
        let randomDiceRollStraight = Math.floor(Math.random() * 6) + 1;
        attemptsP7straight++;
        rolledNumbersStraight.add(randomDiceRollStraight);
    }

    while (Object.keys(rolledNumbersPairs).length < 3 || 
        Object.values(rolledNumbersPairs).some(count => count < 2)) {
        let randomDiceRollPairs = Math.floor(Math.random() * 6) + 1;
        attemptsP7pairs++;

        rolledNumbersPairs[randomDiceRollPairs] = (rolledNumbersPairs[randomDiceRollPairs] || 0) + 1;
    }

    while (true) {
        let randomDiceRollFullHouse = Math.floor(Math.random() * 6) + 1;
        attemptsP7fullHouse++;

        rolledNumbersFullHouse[randomDiceRollFullHouse] = (rolledNumbersFullHouse[randomDiceRollFullHouse] || 0) + 1;

        const counts = Object.values(rolledNumbersFullHouse);
        const hasThreeOfAKind = counts.includes(3);
        const hasPair = counts.includes(2);

        if (hasThreeOfAKind && hasPair) break;
    }

    while (Object.keys(rolledNumbersYatzhee).length < 1 || 
        Object.values(rolledNumbersYatzhee)[0] < 5) {
        let randomDiceRollYatzhee = Math.floor(Math.random() * 6) + 1;
        attemptsP7yatzhee++;

        rolledNumbersYatzhee[randomDiceRollYatzhee] = (rolledNumbersYatzhee[randomDiceRollYatzhee] || 0) + 1;

        if (Object.values(rolledNumbersYatzhee).some(count => count >= 5)) break;
    }
    

    printOut("It took " + attemptsP7straight + " rolls to get a full straight.");
    printOut("It took " + attemptsP7pairs + " rolls to get three pairs.");
    printOut("It took " + attemptsP7fullHouse + " rolls to get a full house.");
    printOut("It took " + attemptsP7yatzhee + " rolls to get a Yahtzee.");


    printOut(newLine);
