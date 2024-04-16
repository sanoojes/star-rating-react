import { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ noOfStars = 5 }) => {
    const [rating, setRating] = useState<number>(0);
    const [hover, setHover] = useState<number>(0);

    function handleClick(currentIdx: number) {
        setRating(currentIdx);
    }

    function onMouseHover(currentIdx: number) {
        setHover(currentIdx);
    }

    function onMouseLeave() {
        setHover(rating);
    }

    return (
        <>
            <div className="flex flex-row gap-1">
                {Array.from({ length: noOfStars }, (_, idx) => {
                    const starIdx = idx + 1; // Adjust index to be 1-based
                    return (
                        <FaStar
                            size={40}
                            key={starIdx}
                            className={
                                starIdx <= (hover || rating)
                                    ? "text-yellow-500"
                                    : ""
                            }
                            onClick={() => handleClick(starIdx)}
                            onMouseLeave={onMouseLeave}
                            onMouseEnter={() => onMouseHover(starIdx)}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default StarRating;
