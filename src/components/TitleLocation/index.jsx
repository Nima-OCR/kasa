import '../TitleLocation/_titleLocation.scss';

const TitleLocation = ({ title, location }) => (
    <div className="title-location">
        <h1>{title}</h1>
        <p>{location}</p>
    </div>
);

export default TitleLocation;
