import { Client } from "https://deno.land/x/postgres@v0.17.0/mod.ts";
import { samplerow } from "./sampleRow.ts";
import { load } from "https://deno.land/std@0.224.0/dotenv/mod.ts";


export async function readFromTable() {

  const env = await load();


    const client = new Client({
        user:  env["POSTGRES_USER"],
        password: env["POSTGRES_PASSWORD"],
        database: "test",
        hostname: "localhost",
        port: 5432,
      });

      await client.connect();
      const result = await client.queryArray<samplerow[]>("SELECT id, description FROM public.denosample");
      console.log(result.rows);
}

