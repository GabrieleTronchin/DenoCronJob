import { alive } from "./api/alive.ts";
import { sampleFileRead } from "./api/fromFile/sampleFileRead.ts";
import { getBooks } from "./api/openLibrary/books.ts";
import { searchByAuthor } from "./api/openLibrary/searchByAuthor.ts";

const IS_ALIVE_ROUTE = new URLPattern({ pathname: "/" });
const BOOKS_ROUTE = new URLPattern({ pathname: "/books" });
const SEARCH_BY_AUTHOR_ROUTE = new URLPattern({ pathname: "/SeachByAuthor/:author" });
const FILE_ROUTE = new URLPattern({ pathname: "/file" });



export async function handleRouting(inputUrl:string): Promise<Response> {
    try {
        let result = undefined;
        const isAlive = IS_ALIVE_ROUTE.exec(inputUrl);
        if (isAlive)
            result = alive();
    
        const isBooks = BOOKS_ROUTE.exec(inputUrl);;
        if (isBooks)
            result = await getBooks();
    
    
        const isSearchByAuthor = SEARCH_BY_AUTHOR_ROUTE.exec(inputUrl);;
        if (isSearchByAuthor) {
            const author = isSearchByAuthor.pathname.groups.author;
            if (author == undefined)
                throw Error('invalid author');
            result = await searchByAuthor(author);
        }

        const isFile = FILE_ROUTE.exec(inputUrl);;
        if (isFile)
            result = await sampleFileRead();
        
    
        if (result)
            return Response.json(result, 
                {
                status: 200,
                headers: {
                    "content-type": "application/json",
                }
                });
      
        return new Response("Endpoint Not Found", {
                    status: 404,
            });
    } 
    catch (error) {
        return new Response(error, {
            status: 500,
    });
    }
}