# Playground with Deno CronJob

This repository showcases a simple yet robust service API developed using Deno Cron Jobs.

top import npm just add npm:


import { CronTime } from "npm:cron-time-generator@2";


https://www.npmjs.com/package/cron-time-generator/v/2.0.3

CronTime.everyMinute();
// * * * * *

CronTime.everyHour();
// 0 * * * *

CronTime.every(5).minutes();
// Every Five Minutes

CronTime.every(2).hours();
// Every 2 Hours



some unstable version using "--unstable-*"

configuration modified in this way

{
    "tasks": {
      "start": "deno run --unstable-cron cron.ts"
    }
}