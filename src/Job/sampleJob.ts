import { readFromTable } from "./dataLayer.ts";

export function handleJob() {
    try {
        readFromTable().map((x) => console.log(`ID:${x.id} ; Description:${x.description}`));
    } 
    catch (error) {
        console.log(error);
    };
    
}