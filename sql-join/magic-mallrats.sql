select "r". *,
       "c". "firstName",
       "c". "lastName",
       "f". "title",
       "i". "filmId"
  from "rentals" as "r"
  join "inventory" as "i" using ("inventoryId")
  join "customers" as "c" using ("customerId")
  join "films" as "f" using ("filmId") where "title" = 'Magic Mallrats';
