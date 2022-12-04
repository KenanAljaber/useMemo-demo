import { useState } from "react";
import Results from "./Results";

const SearchBar = ({items}) => {
    
    const [quey,setQuery]=useState("");

   
    function handleOnChange(e){
        const data=e.target.value;
        setQuery(data);
    }
    return ( 
        <div>
            <input placeholder="search for something" onChange={handleOnChange} value={quey}/>
            <Results items={items} query={quey}/>
        </div>
     );
}
 
export default SearchBar;