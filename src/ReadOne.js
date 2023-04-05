

import fs from 'fs';
import promptSync from 'prompt-sync';
const prompt = promptSync({ sigint: true });
import showingTasks from './Show.js';
import mainMenu from './Main.js';

const handleFailureReadOne = () => {
  console.log("==========================");
  console.log(`Error Reading The Task ID.`);
  console.log("==========================\n");
  console.log("---------------------");
  console.log("1) Read Another Task.");
  console.log("2) Read All Tasks.")
  console.log("3) Back to Main Menu.");
  
  const choice = prompt("What's Your Choice!?: ");
  
  switch (choice) {
    case '1':
      showingOneTask();
      break;
    case '2':
      showingTasks();
      break;
    case '3':
      mainMenu();
      break;
    default:
      console.log("====================================");
      console.log("Please enter a valid choice (1 or 3)");
      console.log("====================================\n\n");
    }
};

const afterRead = async () => {
  console.log("\n---------------------");
  console.log("1) Read Another Task.");
  console.log("2) Back to Main Menu.");

  let choice;
  while (true) {
    choice = prompt("Please enter your choice (1 or 2): ");
    if (choice === "1" || choice === "2") {
      break;
    }
    console.log("====================================");
    console.log("Please enter a valid choice (1 or 2)");
    console.log("====================================\n\n");
  }

  if (choice === "1") {
    await showingOneTask();
  } else {
    mainMenu();
  }
};

const showingOneTask = async () => {
  readingOnlyTask();
  await afterRead();
};



const readingOnlyTask = () => {
  let filePath; let taskID;
  console.clear();
  console.log("\n\n=========================================================");
  console.log("=================== S H O W - T A S K ===================");
  console.log("=========================================================\n\n");
  console.log("-------------------------------")
  taskID = prompt('Please enter Task Number: ');
  
  if(taskID >= 1 && taskID <= 9) {
    filePath = `../utilities/task${taskID.padStart(2, '0')}.json`;
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        const { taskNumber, phoneNumber, taskType, deliveryDate, deliveryTime, details } = JSON.parse(data);
        console.log(`\n\n==========================================`);
        console.log(`============= Task Number: ${taskNumber} =============`);
        console.log(`==========================================`);
        console.log(`Mobile No. -------------: ${phoneNumber}`);
        console.log(`Task Type --------------: ${taskType}`);
        console.log(`Last Date To Delevier --: ${deliveryDate}`);
        console.log(`Last Hour To Deliver ---: ${deliveryTime}`);
        console.log(`Description ------------: ${details}`);
        console.log(`==========================================\n\n`);
    } catch (err) {
        console.log(`\n\n==================================================`);
        console.log(`========= E R R O R - I N -> T A S K (${taskID}) =========`);
        console.log(`==================================================`);
        console.log(`Error Parsing JSON:`, err);
        console.log(`==================================================\n\n`);
        handleFailureReadOne();
    }
  } else if (taskID > 9) {
    filePath = `../utilities/task${taskID}.json`;
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        const { taskNumber, phoneNumber, taskType, deliveryDate, deliveryTime, details } = JSON.parse(data);
        if (taskNumber > 9 && taskNumber <= 99) {
          console.log(`==========================================`);
          console.log(`============= Task Number: ${taskNumber} ============`);
          console.log(`==========================================`);
        } else if(taskNumber >= 99 && taskNumber <= 999) {
          console.log(`===========================================`);
          console.log(`============= Task Number: ${taskNumber} ============`);
          console.log(`===========================================`);
        }
        console.log(`Mobile No. -------------: ${phoneNumber}`);
        console.log(`Task Type --------------: ${taskType}`);
        console.log(`Last Date To Delevier --: ${deliveryDate}`);
        console.log(`Last Hour To Deliver ---: ${deliveryTime}`);
        console.log(`Description ------------: ${details}`);
        console.log(`==========================================\n\n`);

    } catch (err) {
        if (taskID > 9 && taskID <= 99) {
          console.log(`\n\n===================================================`);
          console.log(`========= E R R O R - I N -> T A S K (${taskID}) =========`);
          console.log(`===================================================`);
        } else if (taskID > 99 && taskID <= 999) {
          console.log(`\n\n====================================================`);
          console.log(`========= E R R O R - I N -> T A S K (${taskID}) =========`);
          console.log(`====================================================`);
        } 
        console.log(`Error Parsing JSON:`, err);
        console.log(`==================================================\n\n`);
        handleFailureReadOne();
    }
  } else {
    console.log(`Input Valid Task Number`);
    readingOnlyTask();
  }
};

export default showingOneTask;