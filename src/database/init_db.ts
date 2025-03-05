import { $ } from "bun";
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

// Data for characters
  const characters_data = [
    // Byleth
    {$name:'Byleth', $house:'Player dependant', $crest:'Crest of Flames', $initclass:'Mercenary', $initlevel: 1, $inithp: 20, $initstr: 6, $initmag: 6, 
      $initdex :6, $initspd: 6, $initlck: 6, $initdef: 6, $initres: 6, $initcha: 6},

    // Black Eagles
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
      $initlck: 7, $initdef: 5, $initres: 2, $initcha: 6},
    
    // Blue Lions
    {$name: 'Dimitri', $house: 'Blue Lions', $crest: 'Minor Crest of Blaiddyd, Crest of Seiros', $initclass: 'Noble', $initlevel: 1, $inithp: 30, $initstr: 12, $initmag: 5,
      $initdex: 7, $initspd: 7, $initlck: 6, $initdef: 7, $initres: 4, $initcha: 6},

    {$name: 'Dedue', $house: 'Blue Lions', $crest: 'None', $initclass: 'Noble', $initlevel: 1, $inithp: 33, $initstr: 10, $initmag: 3, $initdex: 5, $initspd: 5, $initlck: 5, 
      $initdef: 10, $initres: 2, $initcha: 3},

    {$name: 'Felix', $house: 'Blue Lions', $crest: 'Minor Crest of Fraldarius', $initclass: 'Noble', $initlevel: 1, $inithp: 27, $initstr: 9, $initmag: 4, $initdex: 8, $initspd: 9, 
      $initlck: 7, $initdef: 5, $initres: 3, $initcha: 6},

    {$name: 'Ashe', $house: 'Blue Lions', $crest: 'None', $initclass: 'Noble', $initlevel: 1, $inithp: 25, $initstr: 8, $initmag: 4, $initdex: 7, $initspd: 8, $initlck: 6, 
      $initdef: 5, $initres: 3, $initcha: 6},

    {$name: 'Sylvain', $house: 'Blue Lions', $crest: 'Minor Crest of Gautier', $initclass: 'Noble', $initlevel: 1, $inithp: 28, $initstr: 10, $initmag: 4, $initdex: 7, $initspd: 8, 
      $initlck: 6, $initdef: 6, $initres: 3, $initcha: 7},

    {$name: 'Mercedes', $house: 'Blue Lions', $crest: 'Minor Crest of Lamine', $initclass: 'Noble', $initlevel: 1, $inithp: 24, $initstr: 5, $initmag: 10, $initdex: 6, $initspd: 6, 
      $initlck: 6, $initdef: 4, $initres: 8, $initcha: 7},

    {$name: 'Annette', $house: 'Blue Lions', $crest: 'Minor Crest of Dominic', $initclass: 'Noble', $initlevel: 1, $inithp: 24, $initstr: 6, $initmag: 10, $initdex: 6, $initspd: 6, 
      $initlck: 6, $initdef: 4, $initres: 7, $initcha: 7},

    {$name: 'Ingrid', $house: 'Blue Lions', $crest: 'Minor Crest of Daphnel', $initclass: 'Noble', $initlevel: 1, $inithp: 26, $initstr: 8, $initmag: 5, $initdex: 7, $initspd: 8, 
      $initlck: 6, $initdef: 6, $initres: 4, $initcha: 6},
    
    // Golden Deer
    {$name: 'Claude', $house: 'Golden Deer', $crest: 'Minor Crest of Riegan, Crest of Seiros', $initclass: 'Noble', $initlevel: 1, $inithp: 28, $initstr: 10, $initmag: 6, 
      $initdex: 8, $initspd: 8, $initlck: 6, $initdef: 6, $initres: 5, $initcha: 7},

    {$name: 'Hilda', $house: 'Golden Deer', $crest: 'None', $initclass: 'Noble', $initlevel: 1, $inithp: 29, $initstr: 10, $initmag: 4, $initdex: 6, $initspd: 6, $initlck: 6, 
      $initdef: 7, $initres: 4, $initcha: 6},

    {$name: 'Lorenz', $house: 'Golden Deer', $crest: 'Minor Crest of Gloucester', $initclass: 'Noble', $initlevel: 1, $inithp: 27, $initstr: 8, $initmag: 6, $initdex: 6, $initspd: 6,
       $initlck: 6, $initdef: 6, $initres: 6, $initcha: 6},

    {$name: 'Raphael', $house: 'Golden Deer', $crest: 'None', $initclass: 'Noble', $initlevel: 1, $inithp: 33, $initstr: 12, $initmag: 3, $initdex: 5, $initspd: 5, $initlck: 5, 
      $initdef: 10, $initres: 2, $initcha: 3},

    {$name: 'Lysithea', $house: 'Golden Deer', $crest: 'Minor Crest of Charon', $initclass: 'Noble', $initlevel: 1, $inithp: 22, $initstr: 5, $initmag: 12, $initdex: 6, $initspd: 7, 
      $initlck: 6, $initdef: 4, $initres: 7, $initcha: 8},

    {$name: 'Ignatz', $house: 'Golden Deer', $crest: 'None', $initclass: 'Noble', $initlevel: 1, $inithp: 24, $initstr: 6, $initmag: 6, $initdex: 8, $initspd: 8, $initlck: 6, 
      $initdef: 6, $initres: 6, $initcha: 6},

    {$name: 'Marianne', $house: 'Golden Deer', $crest: 'Minor Crest of Cethleann', $initclass: 'Noble', $initlevel: 1, $inithp: 24, $initstr: 5, $initmag: 10, $initdex: 6, $initspd: 6,
       $initlck: 6, $initdef: 4, $initres: 8, $initcha: 7},

    {$name: 'Leonie', $house: 'Golden Deer', $crest: 'None', $initclass: 'Noble', $initlevel: 1, $inithp: 26, $initstr: 9, $initmag: 3, $initdex: 7, $initspd: 8, $initlck: 6, 
      $initdef: 6, $initres: 4, $initcha: 6},

    // Church of Seiros
    {$name: 'Rhea', $house: 'Church of Seiros', $crest: 'Major Crest of Seiros', $initclass: 'Noble', $initlevel: 1, $inithp: 30, $initstr: 12, $initmag: 5, $initdex: 7,
      $initspd: 7, $initlck: 6, $initdef: 7, $initres: 4, $initcha: 6},

    {$name: 'Seteth', $house: 'Church of Seiros', $crest: 'Major Crest of Cichol', $initclass: 'Noble', $initlevel: 1, $inithp: 30, $initstr: 12, $initmag: 5, $initdex: 7,  
      $initspd: 7, $initlck: 6, $initdef: 7, $initres: 4, $initcha: 6},

    {$name: 'Flayn', $house: 'Church of Seiros', $crest: 'Minor Crest of Cethleann', $initclass: 'Noble', $initlevel: 1, $inithp: 24, $initstr: 5, $initmag: 10, $initdex: 6,
      $initspd: 6, $initlck: 6, $initdef: 4, $initres: 8, $initcha: 7},

    {$name: 'Hanneman', $house: 'Church of Seiros', $crest: 'None', $initclass: 'Noble', $initlevel: 1, $inithp: 24, $initstr: 5, $initmag: 10, $initdex: 6, $initspd: 6,
      $initlck: 6, $initdef: 4, $initres: 7, $initcha: 7},

    {$name: 'Manuela', $house: 'Church of Seiros', $crest: 'None', $initclass: 'Noble', $initlevel: 1, $inithp: 24, $initstr: 5, $initmag: 10, $initdex: 6, $initspd: 6,
      $initlck: 6, $initdef: 4, $initres: 7, $initcha: 7},

    {$name: 'Catherine', $house: 'Church of Seiros', $crest: 'None', $initclass: 'Noble', $initlevel: 1, $inithp: 29, $initstr: 10, $initmag: 4, $initdex: 6, $initspd: 6,
      $initlck: 6, $initdef: 7, $initres: 4, $initcha: 6},

    {$name: 'Alois', $house: 'Church of Seiros', $crest: 'None', $initclass: 'Noble', $initlevel: 1, $inithp: 29, $initstr: 10, $initmag: 4, $initdex: 6, $initspd: 6,
      $initlck: 6, $initdef: 7, $initres: 4, $initcha: 6},

    {$name: 'Shamir', $house: 'Church of Seiros', $crest: 'None', $initclass: 'Noble', $initlevel: 1, $inithp: 29, $initstr: 10, $initmag: 4, $initdex: 6, $initspd: 6,
      $initlck: 6, $initdef: 7, $initres: 4, $initcha: 6},

    {$name: 'Gilbert', $house: 'Church of Seiros', $crest: 'None', $initclass: 'Noble', $initlevel: 1, $inithp: 33, $initstr: 12, $initmag: 3, $initdex: 5, $initspd: 5,
      $initlck: 5, $initdef: 10, $initres: 2, $initcha: 3},

    {$name: 'Cyril', $house: 'Church of Seiros', $crest: 'None', $initclass: 'Noble', $initlevel: 1, $inithp: 26, $initstr: 9, $initmag: 3, $initdex: 7, $initspd: 8,
      $initlck: 6, $initdef: 6, $initres: 4, $initcha: 6},

    {$name: 'Jeritza', $house: 'Church of Seiros', $crest: 'None', $initclass: 'Noble', $initlevel: 1, $inithp: 33, $initstr: 12, $initmag: 3, $initdex: 5, $initspd: 5,
      $initlck: 5, $initdef: 10, $initres: 2, $initcha: 3},

    {$name: 'Jeralt', $house: 'Church of Seiros', $crest: 'None', $initclass: 'Noble', $initlevel: 1, $inithp: 30, $initstr: 12, $initmag: 5, $initdex: 7, $initspd: 7,
      $initlck: 6, $initdef: 7, $initres: 4, $initcha: 6},
    
    // Ashen Wolves
    {$name: 'Yuri', $house: 'Ashen Wolves', $crest: 'None', $initclass: 'Noble', $initlevel: 1, $inithp: 27, $initstr: 9, $initmag: 4, $initdex: 8, $initspd: 9, $initlck: 7,
      $initdef: 5, $initres: 3, $initcha: 6},

    {$name: 'Constance', $house: 'Ashen Wolves', $crest: 'None', $initclass: 'Noble', $initlevel: 1, $inithp: 24, $initstr: 5, $initmag: 10, $initdex: 6, $initspd: 6, $initlck: 6,
      $initdef: 4, $initres: 8, $initcha: 7},

    {$name: 'Balthus', $house: 'Ashen Wolves', $crest: 'None', $initclass: 'Noble', $initlevel: 1, $inithp: 33, $initstr: 12, $initmag: 3, $initdex: 5, $initspd: 5, $initlck: 5,
      $initdef: 10, $initres: 2, $initcha: 3},

    {$name: 'Hapi', $house: 'Ashen Wolves', $crest: 'None', $initclass: 'Noble', $initlevel: 1, $inithp: 22, $initstr: 5, $initmag: 12, $initdex: 6, $initspd: 7, $initlck: 6,
       $initdef: 4, $initres: 7, $initcha: 3},

    {$name: 'Aelfric', $house: 'Ashen Wolves', $crest: 'None', $initclass: 'Noble', $initlevel: 1, $inithp: 30, $initstr: 12, $initmag: 5, $initdex: 7, $initspd: 7, $initlck: 6, $initdef: 7, $initres: 4,
      $initcha: 6},
    
    // Those Who Slither in the Dark
    {$name: 'Thales', $house: 'None', $crest: 'None', $initclass: 'Noble', $initlevel: 1, $inithp: 30, $initstr: 12, $initmag: 5, $initdex: 7, $initspd: 7, $initlck: 6, $initdef: 7, 
      $initres: 4, $initcha: 6
    },
    {$name: 'Solon', $house: 'None', $crest: 'None', $initclass: 'Noble', $initlevel: 1, $inithp: 30, $initstr: 12, $initmag: 5, $initdex: 7, $initspd: 7, $initlck: 6, $initdef: 7, 
      $initres: 4, $initcha: 6
    },
    {$name: 'Kronya', $house: 'None', $crest: 'None', $initclass: 'Noble', $initlevel: 1, $inithp: 30, $initstr: 12, $initmag: 5, $initdex: 7, $initspd: 7, $initlck: 6, $initdef: 7, 
      $initres: 4, $initcha: 6
    },

    // Ardrestian Empire
    {$name: 'Cornelia', $house: 'None', $crest: 'None', $initclass: 'Noble', $initlevel: 1, $inithp: 30, $initstr: 12, $initmag: 5, $initdex: 7, $initspd: 7, $initlck: 6, $initdef: 7, 
      $initres: 4, $initcha: 6
    },
    {$name: 'Fleche', $house: 'None', $crest: 'None', $initclass: 'Noble', $initlevel: 1, $inithp: 30, $initstr: 12, $initmag: 5, $initdex: 7, $initspd: 7, $initlck: 6, $initdef: 7, 
      $initres: 4, $initcha: 6
    },
    {$name: 'Ladislava', $house: 'None', $crest: 'None', $initclass: 'Noble', $initlevel: 1, $inithp: 30, $initstr: 12, $initmag: 5, $initdex: 7, $initspd: 7, $initlck: 6, $initdef: 7, 
      $initres: 4, $initcha: 6
    },
    {$name: 'Randolph', $house: 'None', $crest: 'None', $initclass: 'Noble', $initlevel: 1, $inithp: 30, $initstr: 12, $initmag: 5, $initdex: 7, $initspd: 7, $initlck: 6, $initdef: 7, 
      $initres: 4, $initcha: 6
    },

    // Faerghus
    {$name: 'Rufus', $house: 'None', $crest: 'None', $initclass: 'Noble', $initlevel: 1, $inithp: 30, $initstr: 12, $initmag: 5, $initdex: 7, $initspd: 7, $initlck: 6, $initdef: 7, 
      $initres: 4, $initcha: 6
    },
    {$name: 'Gwendal', $house: 'None', $crest: 'None', $initclass: 'Noble', $initlevel: 1, $inithp: 30, $initstr: 12, $initmag: 5, $initdex: 7, $initspd: 7, $initlck: 6, $initdef: 7, 
      $initres: 4, $initcha: 6
    },
    {$name: 'Miklan', $house: 'None', $crest: 'None', $initclass: 'Noble', $initlevel: 1, $inithp: 30, $initstr: 12, $initmag: 5, $initdex: 7, $initspd: 7, $initlck: 6, $initdef: 7,
      $initres: 4, $initcha: 6
    },
    {$name: 'Lonato', $house: 'None', $crest: 'None', $initclass: 'Noble', $initlevel: 1, $inithp: 30, $initstr: 12, $initmag: 5, $initdex: 7, $initspd: 7, $initlck: 6, $initdef: 7, 
      $initres: 4, $initcha: 6
    },

    // Leicester Alliance
    {$name: 'Judith', $house: 'None', $crest: 'None', $initclass: 'Noble', $initlevel: 1, $inithp: 30, $initstr: 12, $initmag: 5, $initdex: 7, $initspd: 7, $initlck: 6, $initdef: 7, 
      $initres: 4, $initcha: 6
    },
    {$name: 'Nader', $house: 'None', $crest: 'None', $initclass: 'Noble', $initlevel: 1, $inithp: 30, $initstr: 12, $initmag: 5, $initdex: 7, $initspd: 7, $initlck: 6, $initdef: 7, 
      $initres: 4, $initcha: 6
    },

    // Other
    {$name: 'Anna', $house: 'None', $crest: 'None', $initclass: 'Noble', $initlevel: 1, $inithp: 24, $initstr: 5, $initmag: 10, $initdex: 6, $initspd: 6, $initlck: 6, $initdef: 4, $initres: 7, 
      $initcha: 7
    },
    {$name: 'Gatekeeper', $house: 'None', $crest: 'None', $initclass: 'Noble', $initlevel: 1, $inithp: 30, $initstr: 12, $initmag: 5, $initdex: 7, $initspd: 7, $initlck: 6, $initdef: 7, 
      $initres: 4, $initcha: 6
    },
    {$name: 'Sothis', $house: 'None', $crest: 'None', $initclass: 'Noble', $initlevel: 1, $inithp: 30, $initstr: 12, $initmag: 5, $initdex: 7, $initspd: 7, $initlck: 6, $initdef: 7, $initres: 4,
      $initcha: 6
    },
    {$name: 'Kostas', $house: 'None', $crest: 'None', $initclass: 'Noble', $initlevel: 1, $inithp: 30, $initstr: 12, $initmag: 5, $initdex: 7, $initspd: 7, $initlck: 6, $initdef: 7, $initres: 4,
      $initcha: 6
    },
    {$name: 'Death Knight', $house: 'None', $crest: 'None', $initclass: 'Noble', $initlevel: 1, $inithp: 30, $initstr: 12, $initmag: 5, $initdex: 7, $initspd: 7, $initlck: 6, $initdef: 7, 
      $initres: 4, $initcha: 6
    },
    {$name: 'Nemesis', $house: 'None', $crest: 'None', $initclass: 'Noble', $initlevel: 1, $inithp: 30, $initstr: 12, $initmag: 5, $initdex: 7, $initspd: 7, $initlck: 6, $initdef: 7, $initres: 4,
      $initcha: 6
    },
  ]

  for(const character of characters_data) {
    const existing_character = db.prepare('SELECT * FROM characters WHERE name = ?').get(String(character.$name));

    if(!existing_character) {
      characters_insert_data([character]);
    }
  }

  console.log('Characters added to database.'); //debugging

  }
