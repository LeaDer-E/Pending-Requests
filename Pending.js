const fs = require('fs');
const fsfiles = require("node:fs/promises");
const prompt = require("prompt-sync")({ sigint: true });
const timeout = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const whenfail = () => {
    console.log()
    console.log()
    console.log("==========================");
    console.log("1) Back to Main Menu.");
    console.log("2) Quit");

    let choiceF;
    choiceF = prompt("What's Your Choice!?: ");

    if (choiceF == 1) {
        mainMenu();
    } else if (choiceF == 2) {
        console.log("");
        console.log("==========================");
        console.log("= Are You Sure To Quit!? =");
        console.log("==========================");
        console.log("1) Back to Main Menu.");
        console.log("2) Quit");

        let choiceFF;
        choiceFF = prompt("What's Your Choice!?: ");
    
        if (choiceFF == 1) {
            mainMenu();
        } else if (choiceFF == 2) {
            process.exit()
        } else {
            console.log("=========================================");
            console.log("please pass the right choice, from 1 to 2");
            console.log("=========================================");
        }
    } else {
        console.log("=========================================");
        console.log("please pass the right choice, from 1 to 2");
        console.log("=========================================");
    }
}

const afterShow = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve();
        console.log();
        console.log();
        console.log("==========================");
        console.log("1) Refresh Panel.");
        console.log("2) Back to Main Menu.");

        let choice;
        choice = prompt("What's Your Choice!?: ");
    
        if (choice == 1) {
            showRequests();
        } else if (choice == 2) {
            mainMenu();
        } else {
            console.log("=========================================");
            console.log("please pass the right choice, from 1 to 2");
            console.log("=========================================");
        }
        }, 2000);
    });
};


const afterAdd = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
            console.log();
            console.log();
            console.log("==========================");
            console.log("1) Add Another Request.");
            console.log("2) Back to Main Menu.");

            const wrongCh = () => {
                let choice;
                choice = prompt("What's Your Choice!?: ");
            
                if (choice == 1) {
                    addingRequest();
                } else if (choice == 2) {
                    mainMenu();
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


const afterDeleting = () => {
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


const mainMenu = () => {
    console.clear();
    console.log("-------------------------------------------------------");
    console.log("------------------ M A I N - M E N U ------------------");
    console.log("-------------------------------------------------------");
    console.log();
    console.log();
    console.log("==========================");
    console.log("Select What U Whant to Do:");
    console.log("==========================");
    console.log("1) Show ALL Requests.");
    console.log("2) Add Request.");
    console.log("3) Edit Request.");
    console.log("4) Remove Request.");

    const ch =  () => {
        let choice = 0;
        choice = prompt("What's Your Choice!?: ");

        if (choice == 1) {
            showRequests();
            afterShow();
        } else if (choice == 2) {
            addingRequest();
        } else if (choice == 3) {
            editingRequest();
        } else if (choice == 4) {
            deleteRequest();
        } else if (choice !== 1 || choice !== 2 || choice !== 3 || choice !== 4) {
            console.log("=========================================");
            console.log("please pass the right choice, from 1 to 4");
            console.log("=========================================");

            ch()
        }
    }
    ch()
};


const showRequests = () => {
    // Run some loop in async function
      fs.readdir(".", (err, files) => {
        let requestNumber = files.length;
        const reading = (async () => {
          console.clear()
          console.log("-------------------------------------------------------");
          console.log("-------------- S H O W - R E Q U E S T S --------------");
          console.log("-------------------------------------------------------");
          console.log();
          console.log();
          console.log("======================");
          console.log("All Requests Here <3:");
          console.log("======================");
          console.log();
          // Loop for files.legth file times
          let i = 1;
          while(i < requestNumber) {
            // Reading The Files
            if (i < 10) {
              const read = async () => {
                const readData = async () => {
                    fs.readFile(`writeFile0${i}.json`, "utf-8", (err, jsonString) => {
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
                                console.log(`======== E R R O R - I N -> ID (${i}) ========`);
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
            // Wait for timeout 1000 ms
            await timeout(5);
            i++
            } else if (i > 9 && i <= 99) {
              const read = async () => {
                const readData = async () => {
                    fs.readFile(`writeFile${i}.json`, "utf-8", (err, jsonString) => {
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
                                console.log(`======== E R R O R - I N -> ID (${i}) ========`);
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
            // Wait for timeout 1000 ms
            await timeout(5);
            i++
            } else {
              console.log("Ther's Some Error, Maybe Tasks +100 try to remove some")
              whenfail();
            }
          }
        });
        reading();
    });
}


const addingRequest = () => {
    console.log("-------------------------------------------------------");
    console.log("---------------- N E W - R E Q U E S T ----------------");
    console.log("-------------------------------------------------------");
    console.log();
    console.log();
    console.log("Enter Request Values:");
    console.log("=====================");

    fs.readdir(".", (err, files) => {
        let requestNumber = files.length;
        let i = requestNumber;
        while (i <= requestNumber) {
            if (i < 10) {
                const write = () => {
                    const writeData = async () => {
                        let phone; let type; let lastTime; let description;
                        phone = prompt("Please Enter The Phone Number: ");
                        type = prompt("Please Enter The Type of Request: ");
                        lastTime = prompt("Please Enter The Last Time to Deliver: ");
                        description = prompt("Please Enter The Description if Found: ");
                        let obj = {
                            "ID": `0${i}`,
                            "Phone-No.": `${phone}`,
                            "Type": `${type}`,
                            "Delivery-Time": `${lastTime}`,
                            "Description": `${description}`
                            
                        }
                        try {
                            const creating = async () => {
                                if (!fs.existsSync(`writeFile0${i}.json`)) {
                                    // if the file does not exist, create it
                                    fs.writeFileSync(
                                        `writeFile0${i}.json`, JSON.stringify(obj, null,2), "utf-8"
                                    );
                                    console.log();
                                    console.log();
                                    console.log("======================================");
                                    console.log(`==== Task ${i} created successfully. ====`);
                                    console.log("======================================");
                                } else {
                                    console.log();
                                    console.log();
                                    console.log("*********************************");
                                    let e = prompt(`Please Pass an Not Exists ID: `);
                                    if (e <= 9 && !fs.existsSync(`writeFile0${e}.json`) && e.length <= 1) {
                                        fs.writeFileSync(
                                            `writeFile0${e}.json`, JSON.stringify(obj, null,2), "utf-8"
                                        );
                                        console.log();
                                        console.log();
                                        console.log("======================================");
                                        console.log(`==== Task ${e} created successfully. ====`);
                                        console.log("======================================");
                                    } else  if (e >= 10 && e <= 100 && !fs.existsSync(`writeFile0${e}.json`) && e.length <= 2) {
                                        fs.writeFileSync(
                                            `writeFile${e}.json`, JSON.stringify(obj, null,2), "utf-8"
                                        );
                                        console.log();
                                        console.log();
                                        console.log("======================================");
                                        console.log(`==== Task ${e} created successfully. ====`);
                                        console.log("======================================");
                                    } else {
                                        console.log();
                                        console.log();
                                        console.log("==================================================");
                                        console.log("Please Pass Right ID, and make sure it's not Exist");
                                        console.log("==================================================");
                                        creating();
                                    }
                                }
                              }
                              creating();
                        } catch (err) {
                            console.log(`Sorry: ${err}`);
                        }
                    };
                    writeData();
                    i++;
                }
                write();
            } else if (i > 9 && i < 100) {
                const write = () => {
                    const writeData = async () => {
                        let phone; let type; let lastTime; let description;
                        phone = prompt("Please Enter The Phone Number: ");
                        type = prompt("Please Enter The Type of Request: ");
                        lastTime = prompt("Please Enter The Last Time to Deliver: ");
                        description = prompt("Please Enter The Description if Found: ");
                        let obj = {
                            "ID": `${i}`,
                            "Phone No.": `${phone}`,
                            "Type": `${type}`,
                            "Delivery Time": `${lastTime}`,
                            "Description": `${description}`
                        }
                        try {
                            const creating = async () => {
                                if (!fs.existsSync(`writeFile${i}.json`)) {
                                    // if the file does not exist, create it
                                    fs.writeFileSync(
                                        `writeFile${i}.json`, JSON.stringify(obj, null,2), "utf-8"
                                    );
                                    console.log();
                                    console.log();
                                    console.log("======================================");
                                    console.log(`==== Task ${i} created successfully. ====`);
                                    console.log("======================================");
                                } else {
                                    console.log();
                                    console.log();
                                    console.log("*********************************");
                                    let e = prompt(`Please Pass an Not Exists ID: `);
                                    if (e <= 9 && !fs.existsSync(`writeFile0${e}.json`) && e.length <= 1) {
                                        fs.writeFileSync(
                                            `writeFile${e}.json`, JSON.stringify(obj, null,2), "utf-8"
                                        );
                                        console.log();
                                        console.log();
                                        console.log("======================================");
                                        console.log(`==== Task ${e} created successfully. ====`);
                                        console.log("======================================");
                                    } else  if (e >= 10 && e <= 100 && !fs.existsSync(`writeFile${e}.json`) && e.length <= 2) {
                                        fs.writeFileSync(
                                            `writeFile${e}.json`, JSON.stringify(obj, null,2), "utf-8"
                                        );
                                        console.log();
                                        console.log();
                                        console.log("======================================");
                                        console.log(`==== Task ${e} created successfully. ====`);
                                        console.log("======================================");
                                    } else {
                                        console.log();
                                        console.log();
                                        console.log("==================================================");
                                        console.log("Please Pass Right ID, and make sure it's not Exist");
                                        console.log("==================================================");
                                        creating();
                                    }
                                }
                              }
                              creating();
                        } catch (err) {
                            console.log(`Sorry: ${err}`);
                        }
                    };
                    writeData();
                    i++;
                }
                write();
            } else {
                console.clear();
                console.log("================================================================");
                console.log(`Requests are Full!, Complete Some of Them to add another Request`);
                console.log("================================================================")
                whenfail();
            }
        }; 
    });
    afterAdd();
};


const editingRequest = () => {

    const whenEdit = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
                console.log();
                console.log();
                console.log("Are U Sure to Edit This Task?");
                console.log("===============================");
                console.log("1) Edit");
                console.log("2) Edit Another Task");
                console.log("3) Back TO Main Menu");

                const wrongCh = () => {
                    let choice;
                    choice = prompt("What's Your Choice!?: ");
                
                    if (choice == 1) {
                        edit()
                    } else if (choice == 2) {
                        editingRequest();
                    } else if (choice == 3) {
                        mainMenu();
                    } else if (choice !== 1 || choice !== 2 || choice !== 3) {
                        console.log("=========================================");
                        console.log("please pass the right choice, from 1 to 3");
                        console.log("=========================================");
                        wrongCh()
                    }
                }
                wrongCh()
            },100);

        })
    }

    const edit = () => {
        if (taskID < 10) {
            const write = () => {
                const writeData = async () => {
                    let phone; let type; let lastTime; let description;
                    phone = prompt("Please Enter The Phone Number: ");
                    type = prompt("Please Enter The Type of Request: ");
                    lastTime = prompt("Please Enter The Last Time to Deliver: ");
                    description = prompt("Please Enter The Description if Found: ");
                    let obj = {
                        "ID": `0${taskID}`,
                        "Phone-No.": `${phone}`,
                        "Type": `${type}`,
                        "Delivery-Time": `${lastTime}`,
                        "Description": `${description}`
                        
                    }
                    try {
                        let newFile = await fsfiles.writeFile(
                            `writeFile0${taskID}.json`, JSON.stringify(obj, null,2), "utf-8"
                        );
                    } catch (err) {
                        console.log(`Sorry: ${err}`);
                    }
                };
                writeData();
            }
            write();
        } else if (taskID > 9 && taskID < 100) {
            const write = () => {
                const writeData = async () => {
                    let phone; let type; let lastTime; let description;
                    phone = prompt("Please Enter The Phone Number: ");
                    type = prompt("Please Enter The Type of Request: ");
                    lastTime = prompt("Please Enter The Last Time to Deliver: ");
                    description = prompt("Please Enter The Description if Found: ");
                    let obj = {
                        "ID": `${taskID}`,
                        "Phone No.": `${phone}`,
                        "Type": `${type}`,
                        "Delivery Time": `${lastTime}`,
                        "Description": `${description}`
                    }
                    try {
                        let newFile = await fsfiles.writeFile(
                            `writeFile${taskID}.json`, JSON.stringify(obj, null,2), "utf-8"
                        );
                    } catch (err) {
                        console.log(`Sorry: ${err}`);
                    }
                };
                writeData();
            }
            write();
        } else {
            console.clear();
            console.log("================================================================");
            console.log(`Requests are Full!, Complete Some of Them to add another Request`);
            console.log("================================================================")
            whenfail();
        }
        console.log("=================");
        console.log("=== Edit Done ===");
        console.log("=================");
        setTimeout(mainMenu,500);

    }

    console.clear();
    console.log("-------------------------------------------------------");
    console.log("--------------- E D I T - R E Q U E S T ---------------");
    console.log("-------------------------------------------------------");
    console.log();
    console.log();
    console.log("Enter Task ID To Edit:");
    console.log("======================");
    console.log();
    console.log();
    let taskID;
    taskID = prompt("Please Enter The Task ID: ");
    if (taskID < 10) {
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
        
    } else if (taskID > 10 && taskID < 100) {
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
    }
    whenEdit();

};


const deleteRequest = () => {

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




mainMenu();



