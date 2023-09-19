

const Index = ({ tags }) => (
    <div className="tags">
        {tags.map((tag, index) => (
            <span key={index}>{tag}</span>
        ))}
    </div>
);

export default Index
