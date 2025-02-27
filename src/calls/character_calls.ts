import { db } from "../database/init_db";

export const getCharacters = () => {
    const query = db.query("SELECT * FROM characters")
    let result = query.all();
    console.log(result); //debugging
    return JSON.stringify(result, null, 2);
};