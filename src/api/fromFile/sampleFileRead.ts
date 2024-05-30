export async function sampleFileRead(): Promise<string> {
    const jStringContent = await Deno.readTextFile(".\\api\\fromFile\\testfile.json");
    return JSON.parse(jStringContent);
}