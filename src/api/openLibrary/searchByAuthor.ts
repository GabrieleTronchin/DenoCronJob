export async function searchByAuthor(author:string): Promise<string> {
    const url = `https://openlibrary.org/search.json?author=${author}&sort=new`;
    const jsonResponse = await fetch(url);
    return await jsonResponse.json();
}