import { readFromTable } from "./dataLayer.ts";

export async function handleJob() {
    try {
        await readFromTable();
    } 
    catch (error) {
        console.log(error);
    };
    
}