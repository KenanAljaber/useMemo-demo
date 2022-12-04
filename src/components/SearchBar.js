import { useState } from "react";
import Results from "./Results";

const SearchBar = ({items}) => {
    
    const [quey,setQuery]=useState("");
    const [resultsCount,setResultsCount]=useState(0);

    function handleResultscount(count){
            setResultsCount(count);
    }

   
    function handleOnChange(e){
        const data=e.target.value;
        setQuery(data);
    }
    return ( 
        <div style={{display:"inline-flex",flexDirection:"column"}}>
            <input placeholder="search for something" onChange={handleOnChange} value={quey}/>
            <div style={{padding:"10px",fonSize:"18px",color:"#87a3b9",textAlign:"start"}}>{resultsCount} Results found</div>
            <Results items={items} query={quey} onResultsCount={handleResultscount}/>
        </div>
     );
}
 
export default SearchBar;