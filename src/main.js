// const fs = require('fs');
// const fsfiles = require("node:fs/promises");
// const prompt = require("prompt-sync")({ sigint: true });
// const timeout = (ms) => new Promise(resolve => setTimeout(resolve, ms));

import promptSync from 'prompt-sync';
const prompt = promptSync({ sigint: true });
// import editingRequest from './edit.js';
import addingTask from './add.js';
import readingOnlyTask from './ReadOne.js';

export const mainMenu = () => {
    console.clear();
    console.log("=======================================================");
    console.log("================== M A I N - M E N U ==================");
    console.log("=======================================================\n\n");
    console.log("--------------------------");
    console.log("Select What U Whant to Do:");
    console.log("--------------------------");
    console.log("1) Show ALL Requests.");
    console.log("2) Add Request.");
    console.log("3) Edit Request.");
    console.log("4) Remove Request.");
    console.log("==========================");

    const ch =  () => {
        let choice = 0;
        choice = prompt("What's Do U Need!?: ");
        switch (choice) {
            case "1":
              showRequests();
              afterShow();
              break;
            case "2":
              addingTask();
              break;
            case "3":
              editingRequest();
              break;
            case "4":
              deleteRequest();
              break;
            case "5":
              readingOnlyTask();
              break;
            default:
              console.log(`========================================`);
              console.log(`Please Enter a Valid Number From 1 to 4.`);
              console.log(`========================================`);
              ch();
              break;
          }
    };
    ch()
};

export default mainMenu;