import { CronTime } from "npm:cron-time-generator@2";
import { handleJob } from "./Job/sampleJob.ts";


Deno.cron("My Sample Deno Cron Job", CronTime.everyMinute(), () => {
  handleJob();
 });


