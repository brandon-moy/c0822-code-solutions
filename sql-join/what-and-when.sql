select "fg". *,
       "f". "releaseYear",
       "g". "name" as "genre"
  from "filmGenre" as "fg"
  join "genres" as "g" using ("genreId")
  join "films" as "f" using ("filmId") where "title" = 'Boogie Amelie';
