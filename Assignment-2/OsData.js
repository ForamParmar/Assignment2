const os = require("os");
console.log("\n-----Computer's Operating System's Data-----");
console.log("\nPlatform: " + os.platform());
console.log("Architecture: " + os.arch());
console.log("Total Memory: " + os.totalmem() / (1024 * 1024 * 1024) + " GB");
console.log("Free Memory: " + os.freemem() / (1024 * 1024 * 1024) + " GB");
console.log("Current User's Information: ");
console.log(os.userInfo());