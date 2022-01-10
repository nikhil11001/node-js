const cron = require("node-cron");
const fs = require("fs");
let shell = require("shelljs");

const srcPath = "./uploads/wrapup.pdf";

cron.schedule("* 12 * * * *", () => {
  const targetPath = `./backup/wrapup-backup-${new Date().toLocaleTimeString()}.pdf`;
  fs.copyFile(srcPath, targetPath, (err) => {
    if (err) {
      console.log("==>", err);
    } else {
      console.log("File backuped successfully...!");
    }
  });
});

//Using multiples values
cron.schedule("1,2,4,5 * * * *", () => {
  console.log("running every minute 1, 2, 4 and 5");
});

// Using ranges
cron.schedule("1-5 * * * *", () => {
  console.log("running every minute to 1 from 5");
});

// Using step values
cron.schedule("*/2 * * * *", () => {
  console.log("running a task every two minutes");
});

//Using names
cron.schedule("* * * January,September Sunday", () => {
  console.log("running on Sundays of January and September");
});

//Using  with short names
cron.schedule("* * * Jan,Sep Sun", () => {
  console.log("running on Sundays of January and September");
});

//Using time zone
cron.schedule(
  "0 1 * * *",
  () => {
    console.log("Running a job at 01:00 at  India (GMT+5:30) timezone");
  },
  {
    scheduled: true,
    timezone: " India (GMT+5:30)",
  }
);
