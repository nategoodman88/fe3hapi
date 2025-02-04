CREATE TABLE IF NOT EXISTS characters (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    house VARCHAR(255),
    crest VARCHAR(255),
    startingclass VARCHAR(255),
    baselevel INT,
    basehp INT,
    basestr INT,
    basemag INT,
    basedex INT,
    basespd INT,
    baselck INT,
    basedef INT,
    baseres INT,
    basecha INT
);

-- Insert sample data
INSERT INTO characters (name, house, crest, startingclass, baselevel, basehp, basestr, basemag, basedex, basespd, baselck, basedef, baseres, basecha)
VALUES ('Edelgard', 'Black Eagles', 'Minor Crest of Seiros, Crest of Flames', 'Noble', 1, 29, 13, 6, 6, 8, 5, 6, 4, 10);
