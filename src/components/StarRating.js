import React, { useState } from "react";
import { FaStar } from "react-icons/fa"

const Star = ({ selected = false, onSelect = f => f }) => (
    <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
)

export default function StarRating({
        totalStars = 5,
        selectedStars = 0,
        onRate = f => f
    }) {
    return (
        <>
            {[...Array(totalStars).fill()].map((n, i) => (
                <Star
                    key={i}
                    selected={selectedStars > i}
                    onSelect={() => onRate(i + 1)}
                />
            ))}
            <p>
                {selectedStars} of {totalStars} stars
            </p>
        </>
    );
}

// export default function StarRating({ style={}, totalStars = 5, ...props }) {
//     const [selectedStars, setSelectedStars] = useState(0);
//     return (
//         <div style={{ padding: 5, ...style }} {...props}>
//             {
//                 [...Array(totalStars).fill()].map((n, i) => (
//                     <Star
//                         key={i}
//                         selected={selectedStars > i}
//                         onSelect={() => setSelectedStars(i + 1)}
//                     />
//                 ))
//             }
//             <p>
//                 {selectedStars} of {totalStars} stars
//             </p>
//         </div>
//     );
// }