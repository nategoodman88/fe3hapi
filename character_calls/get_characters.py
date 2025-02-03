from db_connection import conn

operator = conn.cursor()

def get_characters():
    operator.execute('SELECT * FROM characters')
    
    query_result = operator.fetchall()

    characters = []
    for row in query_result:
        print(row) # Debugging
        character = {
            'name': row[0],
            'house': row[1],
            'crest': row[2],
            'startingclass': row[3],
            'baselevel': row[4],
            'basehp': row[5],
            'basestr': row[6],
            'basemag': row[7],
            'basedex': row[8],
            'basespd': row[9],
            'baselck': row[10],
            'basedef': row[11],
            'baseres': row[12],
            'basecha': row[13]
        }

        characters.append(character)

    return characters

