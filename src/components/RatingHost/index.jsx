


const RatingHost = ({ rating, host }) => (
    <div className="rating-host">
        <div className="rating">{rating}</div>
        <div className="host">
            <img src={host.picture} alt={host.name} />
            <p>{host.name}</p>
        </div>
    </div>
);

export default RatingHost;
