select
       "films"."title",
      --  "films"."description",
      --  "films"."rating",
      -- "films"."filmId",
      --  (sum("payments"."amount") - ("films"."replacementCost")) as "totalProfit",
       "inventory"."filmId"
  from "payments"
  join "rentals" using ("rentalId")
  join "inventory" using ("inventoryId")
  join "films" using ("filmId")
  group by "filmId"
  -- order by "totalProfit" desc
  limit 10;
