const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const URL = "GH_PAGES_LINK.COM";
const NATIVE_SCRIPT_PROJECT_URL = "https://github.com/Vladissqq/ns-wrapper.git";

const fileObj = {
  fileName: "projectUrl.js",
  body: `export const url ='${URL}'`,
};

const run = async () => {

  execSync(`git clone ${NATIVE_SCRIPT_PROJECT_URL}`, {
    stdio: [0, 1, 2], 
    cwd: path.resolve(__dirname, ""), // path to where you want to save the file
  });
  // await gitClone();
  fs.writeFileSync("./ns-wrapper/var.js", fileObj.body, function (error) {
    if (error) throw error;
  });
};

run();
