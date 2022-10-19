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
      (sum("payments"."amount") - "replacement") as "totalProfit"
  from filmCount
  join "inventory" using ("filmId")
  join "rentals" using ("inventoryId")
  join "payments" using ("rentalId")
  group by ("title", "description", "rating", "replacement")
  order by "totalProfit" desc
  limit 5;
