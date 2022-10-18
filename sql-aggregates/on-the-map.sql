select "co"."name",
  count ("ci".*) as "number of cities"
  from "countries" as "co"
  join "cities" as "ci" using ("countryId")
  group by "co"."countryId";
