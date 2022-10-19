select "c"."firstName",
       "c"."lastName",
       sum("amount") as "total"
  from "payments"
  join "customers" as "c" using ("customerId")
  group by "customerId"
  order by "total" desc;
