

import fs from 'fs';
import promptSync from 'prompt-sync';
import mainMenu from './main.js';
const prompt = promptSync({ sigint: true });


const afterAdd = async () => {
  console.log("==========================");
  console.log("1) Add Another Request.");
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
    await addingTask();
  } else {
    mainMenu();
  }
};

const addingTask = async () => {
  createTaskFile();
  await afterAdd();
};

const createTaskFile = () => {
  console.clear()
  console.log("\n\n=======================================================");
  console.log("=================== N E W - T A S K ===================");
  console.log("=======================================================\n\n");
  console.log("---------------------");
  console.log("Enter Request Values:");
  console.log("---------------------");

  const folderPath = '../utilities/';
  const taskPrefix = 'task';
  const taskSuffix = '.json';
  let taskNum = 1;
  
  const files = fs.readdirSync(folderPath);
  files.forEach(file => {
    if (file.includes(taskPrefix)) {
      const num = parseInt(file.replace(taskPrefix, '').replace(taskSuffix, ''));
      if (!isNaN(num) && num >= taskNum) {
        taskNum = num + 1;
      }
    }
  });
  const filePath = folderPath + taskPrefix + taskNum.toString().padStart(2, '0') + taskSuffix;
  
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify({
      taskNumber: taskNum,
      phoneNumber: prompt("Please Enter The Phone Number: "),
      taskType: prompt("Please Enter The Task Type: "),
      deliveryDate: prompt("Please Enter The Delivery Date: "),
      deliveryTime: prompt("Please Enter The Delivery Hour: "),
      details: prompt("Please Enter Details if Found: ")
    }, null, 2), "utf-8");
  }
  if (taskNum <= 9) {
    console.log("\n----------------------");
    console.log(`--- Created Task ${taskNum} ---`);
    console.log("----------------------\n\n");
  } else if (taskNum >= 10 && taskNum <= 99){
    console.log("\n---------------------");
    console.log(`-- Created Task ${taskNum} --`);
    console.log("---------------------\n\n");
  } else if (taskNum >= 100 && taskNum <= 999) {
    console.log("\n--------------------");
    console.log(`- Created Task ${taskNum} -`);
    console.log("--------------------\n\n");
  } else if (taskNum >= 1000 && taskNum <= 9999) {
    console.log("\n-----------------------");
    console.log(`-- Created Task ${taskNum} --`);
    console.log("-----------------------\n\n");
  } else if(taskNum >= 10000 && taskNum <= 99999){
    console.log("\n------------------------");
    console.log(`-- Created Task ${taskNum} --`);
    console.log("------------------------\n\n");
  } else {
    console.log("\n-------------------------");
    console.log(`-- Created Task ${taskNum} --`);
    console.log("-------------------------\n\n");
  }
  afterAdd();
};

export default addingTask
