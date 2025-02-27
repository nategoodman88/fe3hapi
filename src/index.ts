import { Elysia } from "elysia";
import { getCharacters } from "./calls/character_calls";
import { initialize_database } from "./database/init_db";

initialize_database();

const app = new Elysia();

app.get("/", () => "For documenation, see: https://github.com/nategoodman88/fe3hapi").listen(3000);
app.get("/characters", () => getCharacters()).listen(3000);


console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
