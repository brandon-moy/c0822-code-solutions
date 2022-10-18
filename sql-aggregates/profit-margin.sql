WITH filmCount as (
  select
    "filmId",
    "title",
    "description",
    "rating",
    (count(*) * "films"."replacementCost") as "replacement"
  from "inventory"
  join "films" using ("filmId")
  group by "filmId"
)

select
       "title",
       "description",
       "rating",
       "replacement",
      (sum("payments"."amount") - "replacement") as "totalProfit"
  from filmCount
  join "inventory" using ("filmId")
  join "rentals" using ("inventoryId")
  join "payments" using ("rentalId")
  group by "title"
  order by "totalProfit" desc
  limit 10;

-- select
--        "films"."title",
--       --  "films"."description",
--       --  "films"."rating",
--       -- "films"."filmId",
--        (sum("payments"."amount") - ("films"."replacementCost" * price."count")) as "totalProfit"
--   from "payments"
--   join "rentals" using ("rentalId")
--   join "inventory" using ("inventoryId")
--   join "films" using ("filmId")
--   group by "filmId"
--   -- order by "totalProfit" desc
--   limit 10;
