import { queryByTitle } from "@testing-library/react";
import { useMemo } from "react";
import MarkedResult from "./MarkedResult";


const Results = ({ items, query, onResultsCount }) => {

    const results = useMemo(() => filterData(items, query), [items, query]);

    function filterData(items, query) {
        console.log("filtiring")
        const result = items.filter(it => {
            const title = it.title.toLowerCase();
            query = query.toLowerCase();
            return query && query.length > 0 && title.indexOf(query) >= 0;
        })
        onResultsCount(result.length);
        return result;
    }

    return (
        <div>{results.map(it =>
            <p><MarkedResult key={it.title} item={it.title} query={query}/></p>
        )}</div>

    );
}

export default Results;