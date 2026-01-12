"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
    /* Put your code below here!*/

    function printTodaysDate() {
        const today = new Date();
        
        const formatted = today.toLocaleDateString("no-NB", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        });

        printOut(formatted);

}

printTodaysDate();

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
    /* Put your code below here!*/

    function daysUntil2XKO(today) {
    const releaseDate = new Date(2025, 4, 14);

    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const differenceInMs = releaseDate - today;

    const daysLeft = Math.ceil(differenceInMs / millisecondsPerDay);

    return daysLeft;
    }

    const today = printTodaysDate();
    const daysLeft = daysUntil2XKO(today);

    printOut("🎮 2XKO releases 14. may 2025!");
    printOut(newLine);

    printOut("⏳ Number of days left until launch: " + daysLeft);
    printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
    /* Put your code below here!*/

    function printCircleInfo(radius) {
    const diameter = 2 * radius;
    const circumference = (2 * Math.PI * radius).toFixed(2);
    const area = (Math.PI * radius * radius).toFixed(2);
    

    printOut("Radius: " + radius);
    printOut(newLine);

    printOut("Diameter: " + diameter);
    printOut(newLine);

    printOut("Circumference: " + circumference);
    printOut(newLine);

    printOut("Area: " + area);
    printOut(newLine);
}

printCircleInfo(67);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
    /* Put your code below here!*/

    function printRectangleInfo(rect) {
    const width = rect.width;
    const height = rect.height;

    const circumference = 2 * (width + height);
    const area = width * height;

    printOut("Width: " + width + ", Height: " + height);
    printOut(newLine);

    printOut("Circumference: " + circumference);
    printOut(newLine);

    printOut("Area: " + area);
    printOut(newLine);
}


    printRectangleInfo({ width: 6, height: 7 });


printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
    /* Put your code below here!*/
    

    function convertTemperature(value, type) {
    let celsius, fahrenheit, kelvin;

    if (type === "C") {
        celsius = value;
        kelvin = celsius + 273.15;
        fahrenheit = (celsius * 9/5) + 32;
    } else if (type === "F") {
        fahrenheit = value;
        celsius = (fahrenheit - 32) * 5/9;
        kelvin = celsius + 273.15;
    } else if (type === "K") {
        kelvin = value;
        celsius = kelvin - 273.15;
        fahrenheit = (kelvin - 273.15) * 9/5 + 32;
    } else {
        printOut("Ugyldig temperaturtype! Bruk 'C', 'F' eller 'K'.");
        return;
    }

    printOut("Temperature in Celsius: " + Math.round(celsius));
    printOut(newLine);

    printOut("Temperature in Fahrenheit: " + Math.round(fahrenheit));
    printOut(newLine);

    printOut("Temperature in Kelvin: " + Math.round(kelvin));
    printOut(newLine);
}

    convertTemperature(67, "C");

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
    /* Put your code below here!*/

    function calculateNetPrice(gross, vatGroup) {
    const group = vatGroup.toLowerCase();

    let vatPercent;

    if (group === "normal") {
        vatPercent = 25;
    } else if (group === "food") {
        vatPercent = 15;
    } else if (group === "hotel" || group === "transport" || group === "cinema") {
        vatPercent = 10;
    } else {
        printOut("Unknown VAT group!");
        printOut(newLine);
        return NaN;
    }

    const net = (100 * gross) / (vatPercent + 100);

    return net;
}

    const vatTests = [
    { gross: 1250, group: "normal" },
    { gross: 1150, group: "food" },
    { gross: 1100, group: "hotel" },
    { gross: 1000, group: "goblins" }
];


for (const test of vatTests) {
    const net = calculateNetPrice(test.gross, test.group);
    if (isNaN(net)) {
        printOut(`Unknown VAT group: ${test.group}`);
    } else {
        printOut(`Net price (${test.group}): ${net.toFixed(2)}`);
    }
    printOut(newLine);
}

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
    /* Put your code below here!*/
    
    function calculateMissing(distance, time, speed) {
    const missing = [distance, time, speed].filter(value => value === null || value === undefined || isNaN(value)).length;

    if (missing > 1) {
        return NaN;
    }

    if (distance === null || distance === undefined || isNaN(distance)) {
        return speed * time;
    }

    if (time === null || time === undefined || isNaN(time)) {
        return distance / speed;
    }

    if (speed === null || speed === undefined || isNaN(speed)) {
        return distance / time;
    }

    return speed;
}

printOut("Calculate missing value examples:");
printOut(newLine);

printOut("Missing speed (distance=100, time=4): " + calculateMissing(100, 4, NaN));
printOut(newLine);

printOut("Missing time (distance=100, speed=25): " + calculateMissing(100, NaN, 25));
printOut(newLine);

printOut("Missing distance (time=4, speed=25): " + calculateMissing(NaN, 4, 25));
printOut(newLine);

printOut("Two missing parameters (NaN, NaN, 25): " + calculateMissing(NaN, NaN, 25));
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
    /* Put your code below here!*/
    
    function padText(text, maxSize, char, padAtStart) {
    let newText = text;

    
    while (newText.length < maxSize) {
        if (padAtStart) {
            newText = char + newText;
        } else {
            newText = newText + char; 
        }
    }

    printOut(newText);
    printOut(newLine);

    return newText;
}

    padText("Skibidi", 10, "-", false);

    padText("Toilet", 10, "*", true);

    padText("Haha", 6, "#", false);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
    /* Put your code below here!*/
    
    function testMathExpression(lines) {
    let currentNumber = 1;

    for (let line = 1; line <= lines; line++) {
        const leftCount = line + 1;      
        const rightCount = line;         

        let leftSum = 0;
        let rightSum = 0;

        for (let i = 0; i < leftCount; i++) {
            leftSum += currentNumber;
            currentNumber++;
        }

        for (let i = 0; i < rightCount; i++) {
            rightSum += currentNumber;
            currentNumber++;
        }

        if (leftSum !== rightSum) {
            printOut("Test failed on line " + line);
            printOut(newLine);
            return;
        }
    }

    printOut("Maths fun!");
    printOut(newLine);
}

    testMathExpression(200);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
    /* Put your code below here!*/
    
    function factorial(n) {
    
    if (n === 0 || n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}


    const num = 6;
    const result = factorial(num);

    printOut("The factorial of " + num + " is: " + result);
    printOut(newLine);
