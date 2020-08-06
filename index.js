const fs = require("fs");
const path = require("path");
const readline = require("readline");
const { execSync } = require("child_process");

const NATIVE_SCRIPT_PROJECT_URL = "https://github.com/Vladissqq/ns-wrapper.git";
let URL = null;

const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function run() {
  // gitClone();
  URL = await askURL();
  createVarFile();
}

function gitClone() {
  execSync(`git clone ${NATIVE_SCRIPT_PROJECT_URL}`, {
    stdio: [0, 1, 2],
    cwd: path.resolve(__dirname, ""), // path to where you want to save the file
  });
}

function askURL() {
  return new Promise((resolve, reject) => {
    readlineInterface.question(
      "Enter link on your project web page: ",
      (input) => {
        readlineInterface.close();
        return resolve(input);
      }
    );
  });
}

function createVarFile() {
  console.log("CREATE", URL);
  fs.writeFileSync(
    "./ns-wrapper/src/var.js",
    `export const url ='${URL}'`,
    function (error) {
      if (error) throw error;
    }
  );
}

run();
