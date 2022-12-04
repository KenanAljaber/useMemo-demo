import { useMemo } from "react";
const MarkedResult = ({ item, query }) => {
    const { leftPart, rightPart, center } = useMemo(() => getIndecis(item, query) , [item, query]);

    
    function getIndecis(item, query) {
        const index = item.toLowerCase().indexOf(query);
        const leftPart = item.substring(0, index);
        const rightPart = item.substring(index+query.length, item.length);
        const center = item.substring(index, query.length+index);
        return {
            leftPart,
            rightPart,
            center
        };
    }
    return (
        <div style={{background:"#d4e1eb",padding:"5px",display:"inline",borderRadius:"5px"}}>
            <span>{leftPart}</span>
            <span style={{fontWeight:"bolder",backgroundColor:"yellow"}}>{center}</span>
            <span>{rightPart}</span>
            </div>
    );
}

export default MarkedResult;