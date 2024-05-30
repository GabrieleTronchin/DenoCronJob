export async function getBooks(): Promise<string> {
    const jsonResponse = await fetch("http://openlibrary.org/search/lists.json?q=book&limit=10&offset=0");
    return await jsonResponse.json();
}