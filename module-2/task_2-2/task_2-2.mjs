"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

    const p1Answer1 = 2 + 3 * 2 - 4 * 6;
    const p1Answer2 = 2 + (3 * (2 - 4)) * 6;

    printOut(p1Answer1);
    printOut(p1Answer2);
    printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

    const p2Answer1 = 2534 / 2.54;

    printOut(p2Answer1.toFixed(2));
    printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

    let days3 = 3;
    let hours3 = 12;
    let minutes3 = 14;
    let seconds3 = 45;

    const p3Answer = (days3 * 24 * 60) + (hours3 * 60) + minutes3 + (seconds3/60);

    printOut(p3Answer);
    printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

    let baselineMinutes = 6322.52;

    const days4 = Math.floor(baselineMinutes / (24 * 60));
    baselineMinutes -= days4 * 24 * 60;
    const hours4 = Math.floor(baselineMinutes / 60);
    baselineMinutes -= hours4 * 60;
    const minutes4 = Math.floor(baselineMinutes);
    baselineMinutes -= minutes4;
    const seconds4 = Math.round(baselineMinutes * 60);

    const p4Answer = `${days4} days, ${hours4} hours, ${minutes4} minutes, ${seconds4} seconds`;

    printOut(p4Answer);
    printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
    /* Put your code below here!*/

    let sum = 54;

    const usd = sum / 76 * 8.6;
    const nok = sum / 8.6 * 76;

    const p5Answer1 = `${sum}USD is ${nok.toFixed(0)}NOK`;
    const p5Answer2 = `${sum}NOK is ${usd.toFixed(0)}USD`;

    printOut(p5Answer1);
    printOut(p5Answer2);
    printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
    /* Put your code below here!*/

    let phrase = "There is much between heaven and earth that we do not understand.";

    const letters = phrase.length;
    const letterNineteen = phrase.charAt(18);
    const nineLetterString = phrase.slice(35, 43);
    const wordEarth = phrase.indexOf("earth");

    const p6Answer = `The phrase contains ${letters} letters. The 19th letter is "${letterNineteen}". The nine-letter string starting at letter 35 is "${nineLetterString}". The word "earth" starts at index ${wordEarth}.`;
    
    printOut(p6Answer);
    printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
    /* Put your code below here!*/

    if (5 > 3)
        printOut("5 is greater than 3");
    else {
        printOut("5 is not greater than 3");
    }

    if (7 >= 7)
        printOut("7 is greater than or equal to 7");
    else {
        printOut("7 is not greater than or equal to 7");
    }

    if ("a" > "b")  
        printOut("a is greater than b");
    else {
        printOut("a is not greater than b");
    }

    if ("1" < "a")
        printOut("1 is less than a");
    else {
        printOut("1 is not less than a");
    }

    if ("2500" < "abcd")
        printOut("2500 is less than abcd");
    else {
        printOut("2500 is not less than abcd");
    }

    if ("arne" != "thomas")
        printOut("arne is not equal to thomas");
    else {
        printOut("arne is equal to thomas");
    }
    
    if (2 === 5)
        printOut("2 is equal to 5");
    else {
        printOut("2 is not equal to 5");
    }

    if ("abcd" > "bcd")
        printOut("abcd is greater than bcd");
    else {
        printOut("abcd is not greater than bcd");
    }
    printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
    /* Put your code below here!*/

    const p8str1 = "254"
    let p8str2 = "57.23"
    const p8str3 = "25 kroner";

    const p8str2Numbers = Number(Number(p8str2).toFixed(0))
    const p8str3Numbers = parseFloat(p8str3);

    printOut(p8str1 + " as a number is " + Number(p8str1));
    printOut(p8str2 + " as a number is " + p8str2Numbers);
    printOut(p8str3 + " as a number is " + Number(p8str3Numbers));
    printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
    /* Put your code below here!*/

    const r = Math.floor(Math.random() * 360) + 1;

    printOut("Here is a random number between 1 and 360 = " + r);
    printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
    /* Put your code below here!*/

    const days = 131;

    const weeks = Math.floor(days / 7);
    const remainingDays = days % 7;

    printOut(`${days} days are ${weeks} weeks and ${remainingDays} days.`);
    printOut(newLine);