-- Get all the information for all of the artists
SELECT * FROM artists;

-- Get the name of the artist with the name of Black Sabbath
SELECT name FROM artists WHERE name = 'Black Sabbath';
SELECT name FROM artists WHERE name LIKE 'Black S%';

-- Create a new table called fan_clubs that contains artists' fan_clubs
CREATE TABLE fan_clubs(
  id INTEGER PRIMARY KEY,
  name TEXT,
  artist_id INTEGER
);

-- Create a new row and insert it into the fan_clubs table
INSERT INTO fan_clubs(name, artist_id) VALUES('Black Sabbath Fans', 12);

-- Find the artist with the name of Black Sabbath and change their name
UPDATE artists SET name = 'Blick Sibbith' WHERE name = 'Black Sabbath';

-- Delete Black Sabbath from the artists table
DELETE FROM artists WHERE name = 'Blick Sibbith';

-- Display the names of all the fan_clubs next to the name of the artist they belong to
SELECT artists.name, fan_clubs.name FROM artists
INNER JOIN fan_clubs ON fan_clubs.artist_id = artists.id;
