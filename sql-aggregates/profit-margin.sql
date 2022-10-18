select
       "films"."title",
       "films"."description",
       "films"."rating",
       (sum("amount") - "films"."replacementCost")  as "totalProfit"
  from "payments"
  join "rentals" using ("rentalId")
  join "inventory" using ("inventoryId")
  join "films" using ("filmId")
  group by "filmId"
  order by "paid" desc
  limit 5;
