import msnodesqlv8  from 'npm:msnodesqlv8@4.2.1'

import { samplerow } from "./sampleRow.ts";


export function readFromTable(): samplerow[] {

    const sql = msnodesqlv8

    const connectionString = "server=127.0.0.1,1433;Database=TestDb;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";
    const query = "SELECT [id],[Description] FROM [dbo].[GuidTableFast]";
    
    sql.query(connectionString, query, (err, rows) => {
    
        if (err != undefined) {
            throw new ErrorEvent(err.message);
        }

       return rows;
    });

    return [];

}

