import '../RatingHost/_ratingHost.scss';


const generateStars = (rating) => {
    const maxRating = 5;
    const filledStars = Math.round(rating);

    const stars = [];

    for (let i = 0; i < maxRating; i++) {
        const starColor = i < filledStars ? "#FF6060" : "#E3E3E3";
        stars.push(
            <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill={starColor}
            >
                <path
                    d="M12 2l-1.431 6.623H5.528l5.049 4.155-1.431 6.623 5.254-3.708 5.254 3.708-1.431-6.623 5.049-4.155h-4.041z"
                />
            </svg>
        );
    }

    return stars;
};

const RatingHost = ({ rating, host }) => (
    <div className="rating-host">
        <div className="rating">
            {generateStars(rating)}
            {rating}
        </div>
        <div className="host">
            <img src={host.picture} alt={host.name} />
            <p>{host.name}</p>
        </div>
    </div>
);

export default RatingHost;

