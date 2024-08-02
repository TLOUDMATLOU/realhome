import PropertiesGrid from "@/components/PropertiesGrid";
import SearchFilters from "@/components/SearchFilters";
import SectionTitle from "@/components/SectionTitle";
import supabase from "@/lib/supabase";
import { listings } from "@/lib/utils";
import PopularListings from "@/sections/PopularListings";
import { usePropertiesStore } from "@/zustand/store";
import { useEffect } from "react";

function SearchProperties() {

  const setProperties = usePropertiesStore((state) => state.setProperties) 

  useEffect(() => {
    const getProperties = async () => {
      const { data, error } = await supabase
        .from("properties")
        .select()
        .range(1, 50);

        error ? console.error(error) : console.log(data);

        data && setProperties(data) 
      };
      
      getProperties()
      
    }, []);
    

  return (
    <main className="Properties">
      {/* SEARCH FILTERS */}
      <SearchFilters />

      {/* Popular listings */}
      <PopularListings listings={listings} />

      <SectionTitle title={"All Properties"} button={false}/>
      {/* Properties Grid View */}
      <PropertiesGrid listings={usePropertiesStore(state => state.properties)}/>
    </main>
  );
}

export default SearchProperties;
