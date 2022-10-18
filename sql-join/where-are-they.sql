select "a". "line1" as "address",
       "c". "name" as "city",
       "a". "district",
       "c". "countryId",
       "co". "name" as "country"
  from "addresses" as "a"
  join "cities" as "c" using ("cityId")
  join "countries" as "co" using ("countryId");

-- try to remove countryId column later?
