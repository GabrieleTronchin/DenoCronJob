# Playground with Deno CronJob

This repository provides a playground for experimenting with Deno Cron Jobs. 

It includes examples of how to set up cron jobs, manage environment variables, and connect to a PostgreSQL database.

## CronJob

To import the required npm package, add the following import statement:

```javascript
import { CronTime } from "npm:cron-time-generator@2";
```

You can find more details about the package here: [cron-time-generator](https://www.npmjs.com/package/cron-time-generator/v/2.0.3).

### Example Usages

The `CronTime` module provides several convenient methods to generate cron expressions:

```javascript
CronTime.everyMinute();
// Output: * * * * *

CronTime.everyHour();
// Output: 0 * * * *

CronTime.every(5).minutes();
// Output: Every Five Minutes

CronTime.every(2).hours();
// Output: Every 2 Hours
```

## Setup Start Task

To use some unstable features, you need to specify the `--unstable` flag in your configuration. Modify your configuration as follows:

```json
{
  "tasks": {
    "start": "deno run --unstable-cron cron.ts"
  }
}
```

## Environment Variable Setup

Prepare a file named `.env` in the root of your solution directory. Populate it with your environment variables:

```
POSTGRES_USER=<POSTGRES_USER_VALUE>
POSTGRES_PASSWORD=<POSTGRES_PASSWORD_VALUE>
```

## PostgreSQL Access

Under the `Job` folder, you will find a TypeScript file named `dataLayer.ts` with the following function:

```typescript
import { load } from "https://deno.land/x/dotenv/mod.ts";
import { Client } from "https://deno.land/x/postgres@v0.12.0/mod.ts";

export async function readFromTable() {
  const env = await load();

  const client = new Client({
    user: env["POSTGRES_USER"],
    password: env["POSTGRES_PASSWORD"],
    database: "test",
    hostname: "localhost",
    port: 5432,
  });

  await client.connect();
  const result = await client.queryArray<samplerow[]>("SELECT id, description FROM public.denosample");
  console.log(result.rows);
}
```

This function loads the environment variables and performs a SQL read operation from a PostgreSQL database.

