import { Database } from "bun:sqlite";

export const db = new Database('src/database/fe3h.sqlite');

export const initialize_database = () => {
console.log('Initializing database...'); //degugging


 db.query(`
  CREATE TABLE IF NOT EXISTS characters (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    house TEXT NOT NULL,
    crest TEXT NOT NULL,
    initclass TEXT NOT NULL,
    initlevel INTEGER NOT NULL,
    inithp INTEGER NOT NULL,
    initstr INTEGER NOT NULL,
    initmag INTEGER NOT NULL,
    initdex INTEGER NOT NULL,
    initspd INTEGER NOT NULL,
    initlck INTEGER NOT NULL,
    initdef INTEGER NOT NULL,
    initres INTEGER NOT NULL,
    initcha INTEGER NOT NULL
  );`).run();

  console.log('Database initialized.'); //debugging
  console.log('Adding characters to database...'); //debugging

  let characters_insert = db.prepare(
    `INSERT INTO characters (name, house, crest, initclass, initlevel, inithp, initstr, initmag, initdex, initspd, initlck, initdef, initres, initcha) 
    VALUES ($name, $house, $crest, $initclass, $initlevel, $inithp, $initstr, $initmag, $initdex, $initspd, $initlck, $initdef, $initres, $initcha)`);

  let characters_insert_data = db.transaction(dataArray => {
    for (const data of dataArray) {
      characters_insert.run(data);
    }});

  const characters_data = [
    // Black Eagles
    {$name:'Byleth', $house:'Player dependant', $crest:'Crest of Flames', $initclass:'Mercenary', $initlevel:1, $inithp:20, $initstr:6, $initmag:6, 
      $initdex:6, $initspd:6, $initlck:6, $initdef:6, $initres:6, $initcha:6},

    {$name: 'Edelgard', $house: 'Black Eagles', $crest: 'Minor Crest of Seiros, Crest of Flames', $initclass: 'Noble', $initlevel: 1, $inithp: 29, $initstr: 13, $initmag: 6, 
      $initdex: 6, $initspd: 8, $initlck: 5, $initdef: 6, $initres: 4, $initcha: 10},
    
    {$name: 'Hubert', $house: 'Black Eagles', $crest: 'None', $initclass: 'Noble', $initlevel: 1, $inithp: 22, $initstr: 6, $initmag: 12, $initdex: 6, $initspd: 7, 
      $initlck: 6, $initdef: 4, $initres: 7, $initcha: 6},
    
    {$name: 'Ferdinand', $house: 'Black Eagles', $crest: 'Minor Crest of Cichol', $initclass: 'Noble', $initlevel: 1, $inithp: 28, $initstr: 8, $initmag: 5, $initdex: 6, 
      $initspd: 8, $initlck: 6, $initdef: 6, $initres: 2, $initcha: 7},
    
    {$name: 'Linhardt', $house: 'Black Eagles', $crest: 'Minor Crest of Cethleann', $initclass: 'Noble', $initlevel: 1, $inithp: 24, $initstr: 5, $initmag: 10, $initdex: 6, 
      $initspd: 5, $initlck: 7, $initdef: 5, $initres: 9, $initcha: 3},
    
    {$name: 'Caspar', $house: 'Black Eagles', $crest: 'None', $initclass: 'Noble', $initlevel: 1, $inithp: 26, $initstr: 9, $initmag: 3, $initdex: 5, $initspd: 6, 
      $initlck: 8, $initdef: 6, $initres: 4, $initcha: 4},
    
    {$name: 'Bernadetta', $house: 'Black Eagles', $crest: 'Minor Crest of Indech', $initclass: 'Noble', $initlevel: 1, $inithp: 25, $initstr: 8, $initmag: 5, $initdex: 7, 
      $initspd: 7, $initlck: 5, $initdef: 4, $initres: 2, $initcha: 6},
    
    {$name: 'Dorothea', $house: 'Black Eagles', $crest: 'None', $initclass: 'Commoner', $initlevel: 1, $inithp: 24, $initstr: 5, $initmag: 11, $initdex: 6, $initspd: 7, 
      $initlck: 6, $initdef: 4, $initres: 7, $initcha: 8},
    
    {$name: 'Petra', $house: 'Black Eagles', $crest: 'None', $initclass: 'Commoner', $initlevel: 1, $inithp: 25, $initstr: 9, $initmag: 3, $initdex: 7, $initspd: 10, 
      $initlck: 7, $initdef: 5, $initres: 2, $initcha: 6}
  ]

  for(const character of characters_data) {
    const existing_character = db.prepare('SELECT * FROM characters WHERE name = ?').get(character.$name);

    if(!existing_character) {
      characters_insert_data([character]);
    }
  }

  console.log('Characters added to database.'); //debugging

  }
