export const deleteRequest = () => {

    const deleting = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
                console.log();
                console.log();
                console.log("Are U Sure to Delete This Task?");
                console.log("===============================");
                console.log("1) Delete");
                console.log("2) Back TO Main Menu");

                const wrongCh = () => {
                    let choice;
                    choice = prompt("What's Your Choice!?: ");
                    if (taskID <= 9) {
                        if (choice == 1) {
                            fs.unlink(`writeFile0${taskID}.json`, (err) => {
                                if (err) {
                                    console.log("==========================================");
                                    console.log("Ther's Error in Deleting File, Try Manualy");
                                    console.log("==========================================");
                                }
                                console.log("==========================================");
                                console.log("======= Task Deleted successfully. =======");
                                console.log("==========================================");

                            });
                        } else if (choice == 2) {
                            mainMenu();
                        } else if (choice !== 1 || choice !== 2) {
                            console.log("=========================================");
                            console.log("please pass the right choice, from 1 to 2");
                            console.log("=========================================");
                            wrongCh()
                        }
                    } else if (taskID >= 10 && taskID < 100) {
                        if (choice == 1) {
                            fs.unlink(`writeFile${taskID}.json`, (err) => {
                                if (err) {
                                    console.log("==========================================");
                                    console.log("Ther's Error in Deleting File, Try Manualy");
                                    console.log("==========================================");
                                }
                                console.log("==========================================");
                                console.log("======= Task Deleted successfully. =======");
                                console.log("==========================================");

                            });
                        } else if (choice == 2) {
                            mainMenu();
                        } else if (choice !== 1 || choice !== 2) {
                            console.log("=========================================");
                            console.log("please pass the right choice, from 1 to 2");
                            console.log("=========================================");
                            wrongCh()
                        }
                    }
                } 
                wrongCh()
            },50);

        })
    }

    console.clear();
    console.log("-------------------------------------------------------");
    console.log("------------- R E M O V E - R E Q U E S T -------------");
    console.log("-------------------------------------------------------");
    console.log()
    console.log("Enter Task ID To Remove:");
    console.log("=========================");
    console.log();
    console.log();
    let taskID;
    taskID = prompt("Please Enter The Task ID: ");
    if (taskID <= 9) {
        const read = async () => {
            const readData = async () => {
                fs.readFile(`writeFile0${taskID}.json`, "utf-8", (err, jsonString) => {
                    if (err) {
                        console.log(err);
                    } else {
                        try {
                            const data = JSON.parse(jsonString);
                            console.log(`-------------------------------------------`);
                            console.log(`----------------- ID (${data.ID}) -----------------`);
                            console.log(`-------------------------------------------`);
                            console.log(`Mobile No.-----: ${data["Phone-No."]}`);
                            console.log(`Request Type---: ${data["Type"]}`);
                            console.log(`Until The Hour-: ${data["Delivery-Time"]}`);
                            console.log(`Description----: ${data["Description"]}`);
                            console.log();
                            console.log();
                        } catch (err) {
                            console.log(`============================================`);
                            console.log(`======== E R R O R - I N -> ID (${taskID}) ========`);
                            console.log(`============================================`);
                            console.log(`Error Parsing JSON:`, err);
                            console.log(`============================================`);
                            console.log();
                            console.log();
                        } 
                    }
                });
            };
        readData();
        }
        read();
        
        deleting(); 
    } else if (taskID >= 10 && taskID < 100) {
        const read = async () => {
            const readData = async () => {
                fs.readFile(`writeFile${taskID}.json`, "utf-8", (err, jsonString) => {
                    if (err) {
                        console.log(err);
                    } else {
                        try {
                            const data = JSON.parse(jsonString);
                            console.log(`-------------------------------------------`);
                            console.log(`----------------- ID (${data.ID}) -----------------`);
                            console.log(`-------------------------------------------`);
                            console.log(`Mobile No.-----: ${data["Phone-No."]}`);
                            console.log(`Request Type---: ${data["Type"]}`);
                            console.log(`Until The Hour-: ${data["Delivery-Time"]}`);
                            console.log(`Description----: ${data["Description"]}`);
                            console.log();
                            console.log();
                        } catch (err) {
                            console.log(`============================================`);
                            console.log(`======== E R R O R - I N -> ID (${taskID}) ========`);
                            console.log(`============================================`);
                            console.log(`Error Parsing JSON:`, err);
                            console.log(`============================================`);
                            console.log();
                            console.log();
                        } 
                    }
                });
            };
        readData();
        }
        read();

        deleting(); 
    }

    afterDeleting();
};


export const afterDeleting = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
            console.log();
            console.log();
            console.log("===============================");
            console.log("1) Back TO Main Menu");
            console.log("2) Delete Another Task");

            const wrongCh = () => {
                let choice;
                choice = prompt("What's Your Choice!?: ");
            
                if (choice == 1) {
                    mainMenu();
                } else if (choice == 2) {
                    deleteRequest();
                } else if (choice !== 1 || choice !== 2) {
                    console.log("=========================================");
                    console.log("please pass the right choice, from 1 to 2");
                    console.log("=========================================");
                    wrongCh()
                }
            }
            wrongCh();
        }, 100);
    });
}; 