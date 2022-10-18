select "a". "firstName",
       "a". "lastName",
       "cm". *,
       "f". "title"
  from "castMembers" as "cm"
  join "films" as "f" using ("filmId")
  join "actors" as "a" using ("actorId") where f.title = 'Jersey Sassy';
