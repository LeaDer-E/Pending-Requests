
import promptSync from 'prompt-sync';
const prompt = promptSync({ sigint: true });
// import editingRequest from './edit.js';
import addingTask from './Add.js';
import showingTasks from './Show.js';
import showingOneTask from './ReadOne.js';
import { confirmQuit } from './Fail.js';

export const mainMenu = () => {
    console.clear();
    console.log("=======================================================");
    console.log("================== M A I N - M E N U ==================");
    console.log("=======================================================\n\n");
    console.log("--------------------------");
    console.log("Select What U Whant to Do:");
    console.log("--------------------------");
    console.log("1) Show ALL Tasks.");
    console.log("2) Show Only One Task.")
    console.log("3) Add Request.");
    console.log("4) Edit Request.");
    console.log("5) Remove Request.");
    console.log("6) Quit.")
    console.log("==========================");

    const ch =  () => {
        let choice = 0;
        choice = prompt("What's Do U Need!?: ");
        switch (choice) {
            case "1":
              showingTasks();
              break;
            case "2":
              showingOneTask();
              break;
            case "3":
              addingTask();
              break;
            case "4":
              edit();
              break;
            case "5":
              deleteRequest();
              break;
            case "6":
              confirmQuit();
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