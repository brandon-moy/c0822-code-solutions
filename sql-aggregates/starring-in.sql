select "g"."name" as "genre",
       count("fg"."genreId")
  from "genres" as "g"
  join "filmGenre" as "fg" using ("genreId")
  join "castMembers" using ("filmId")
  join "actors" using ("actorId")
    where "actors"."firstName" = 'Lisa'
    and "actors"."lastName" = 'Monroe'
  group by "g"."name";
