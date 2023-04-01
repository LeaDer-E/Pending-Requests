export const showRequests = () => {
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
              whenFail();
            }
          }
        });
        reading();
    });
}


export const afterShow = () => {
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