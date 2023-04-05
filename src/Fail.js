// const fs = require('fs');
// const fsfiles = require("node:fs/promises");
// const prompt = require("prompt-sync")({ sigint: true });
// const timeout = (ms) => new Promise(resolve => setTimeout(resolve, ms));

import mainMenu from './Main.js';
import promptSync from 'prompt-sync';
const prompt = promptSync({ sigint: true });

export const handleFailureMenu = () => {
    console.log("==========================");
    console.log("1) Back to Main Menu.");
    console.log("2) Quit");
    
    const choice = prompt("What's Your Choice!?: ");
    
    switch (choice) {
      case '1':
        mainMenu();
        break;
      case '2':
        confirmQuit();
        break;
      default:
        console.log("Please pass the right choice, from 1 to 2");
    }
  };
  
export const confirmQuit = () => {
    console.clear();
    console.log("\n\n==========================");
    console.log("= Are You Sure To Quit!? =");
    console.log("==========================");
    console.log("1) Back to Main Menu.");
    console.log("2) Quit");
    
    const choice = prompt("What's Your Choice!?: ");
    
    switch (choice) {
      case '1':
        mainMenu();
        break;
      case '2':
        process.exit();
        break;
      default:
        console.log("Please pass the right choice, from 1 to 2");
        confirmQuit();
    }
  };

