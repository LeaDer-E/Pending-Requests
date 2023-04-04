import fs from 'fs';

const readTasks = () => {
    let i = 0;
    while (i <= 999) {
        if (i <= 9) {
            let filePath = `../utilities/task${i.toString().padStart(2, '0')}.json`;
            try {
                let content = fs.readFileSync(filePath, 'utf-8');
                let task = JSON.parse(content);
                console.log('==========================================');
                console.log(`============ Task Number: (${task.taskNumber}) ============`);
                console.log('==========================================');
                console.log(`Mobile No. -------------: ${task.phoneNumber}`);
                console.log(`Task Type --------------: ${task.taskType}`);
                console.log(`Last Date To Delevier --: ${task.deliveryDate}`);
                console.log(`Last Hour To Deliver ---: ${task.deliveryTime}`);
                console.log(`Description ------------: ${task.details}`);
                console.log('-------------------------------------------\n\n');
            } catch (err) {
                if (err.code !== 'ENOENT') {
                throw err;
                }
            }
            i++;
        } else if (i <= 99) {
            let filePath = `../utilities/task${i.toString().padStart(2, '0')}.json`;
            try {
                let content = fs.readFileSync(filePath, 'utf-8');
                let task = JSON.parse(content);
                console.log('==========================================');
                console.log(`============ Task Number: (${task.taskNumber}) ===========`);
                console.log('==========================================');
                console.log(`Mobile No. -------------: ${task.phoneNumber}`);
                console.log(`Task Type --------------: ${task.taskType}`);
                console.log(`Last Date To Delevier --: ${task.deliveryDate}`);
                console.log(`Last Hour To Deliver ---: ${task.deliveryTime}`);
                console.log(`Description ------------: ${task.details}`);
                console.log('-------------------------------------------\n\n');
            } catch (err) {
                if (err.code !== 'ENOENT') {
                throw err;
                }
            }
            i++;
        } else if (i <= 999) {
            let filePath = `../utilities/task${i.toString().padStart(2, '0')}.json`;
            try {
                let content = fs.readFileSync(filePath, 'utf-8');
                let task = JSON.parse(content);
                console.log('==========================================');
                console.log(`=========== Task Number: (${task.taskNumber}) ===========`);
                console.log('==========================================');
                console.log(`Mobile No. -------------: ${task.phoneNumber}`);
                console.log(`Task Type --------------: ${task.taskType}`);
                console.log(`Last Date To Delevier --: ${task.deliveryDate}`);
                console.log(`Last Hour To Deliver ---: ${task.deliveryTime}`);
                console.log(`Description ------------: ${task.details}`);
                console.log('-------------------------------------------\n\n');
            } catch (err) {
                if (err.code !== 'ENOENT') {
                throw err;
                }
            }
            i++;
        }
    }
};

readTasks();