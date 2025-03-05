import { db } from "../database/init_db";

export const getCharacters = () => {
    const query = db.query("SELECT * FROM characters ORDER BY id");
    let result = query.all();
    return JSON.stringify(result, null, 2);
};