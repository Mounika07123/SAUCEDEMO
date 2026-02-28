import fs from "fs";
import { parse } from 'csv-parse/sync'
import { fi } from "@faker-js/faker";

export class Dataprovider{

    static getTestDatafromJson(filePath : string)
        {
            let data:string = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            return data;

        }

        static getDatafromCSV(filePath : string)
        {
            let data = parse(fs.readFileSync(filePath),{columns:true,skip_empty_lines:true})
            return data;
        }
    
}