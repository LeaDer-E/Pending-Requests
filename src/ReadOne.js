

import fs from 'fs';
import promptSync from 'prompt-sync';
const prompt = promptSync({ sigint: true });

let filePath; let taskID;
taskID = prompt('Please enter Task Number: ');

const readingOnlyTask = () => {
  
  if(taskID >= 1 && taskID <= 9) {
    filePath = `../utilities/task${taskID.padStart(2, '0')}.json`;
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        const { taskNumber, phoneNumber, taskType, deliveryDate, deliveryTime, details } = JSON.parse(data);
        console.log(`==========================================`);
        console.log(`============= Task Number: ${taskNumber} =============`);
        console.log(`==========================================`);
        console.log(`Mobile No. -------------: ${phoneNumber}`);
        console.log(`Task Type --------------: ${taskType}`);
        console.log(`Last Date To Delevier --: ${deliveryDate}`);
        console.log(`Last Hour To Deliver ---: ${deliveryTime}`);
        console.log(`Description ------------: ${details}`);
    } catch (err) {
        console.log(`==================================================`);
        console.log(`========= E R R O R - I N -> T A S K (${taskID}) =========`);
        console.log(`==================================================`);
        console.log(`Error Parsing JSON:`, err);
        console.log(`==================================================\n\n`);
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
        }  else if(taskNumber >= 999 && taskNumber <= 9999) {
          console.log(`===========================================`);
          console.log(`============ Task Number: ${taskNumber} ============`);
          console.log(`===========================================`);
        } else if(taskNumber >= 9999 && taskNumber <= 99999) {
          console.log(`============================================`);
          console.log(`============ Task Number: ${taskNumber} ============`);
          console.log(`============================================`);
        }
        console.log(`Mobile No. -------------: ${phoneNumber}`);
        console.log(`Task Type --------------: ${taskType}`);
        console.log(`Last Date To Delevier --: ${deliveryDate}`);
        console.log(`Last Hour To Deliver ---: ${deliveryTime}`);
        console.log(`Description ------------: ${details}`);
    } catch (err) {
        if (taskID > 9 && taskID <= 99) {
          console.log(`===================================================`);
          console.log(`========= E R R O R - I N -> T A S K (${taskID}) =========`);
          console.log(`===================================================`);
        } else if (taskID >= 99 && taskID <= 999) {
          console.log(`====================================================`);
          console.log(`========= E R R O R - I N -> T A S K (${taskID}) =========`);
          console.log(`====================================================`);
        } else if(taskID >= 999 && taskID <= 9999) {
          console.log(`=====================================================`);
          console.log(`========= E R R O R - I N -> T A S K (${taskID}) =========`);
          console.log(`=====================================================`);
        } else if(taskID >= 9999 && taskID <= 99999) {
            console.log(`======================================================`);
            console.log(`========= E R R O R - I N -> T A S K (${taskID}) =========`);
            console.log(`======================================================`);
        }
        console.log(`Error Parsing JSON:`, err);
        console.log(`==================================================\n\n`);
    }
  } else {
    console.log(`Input Valid Task Number`);
    readingOnlyTask();
  }
};

export default readingOnlyTask;