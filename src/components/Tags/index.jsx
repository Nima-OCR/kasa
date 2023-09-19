

import React from 'react';

function TagsList({ tags }) {
    return (
        <div className="tags">
            {tags.map((tag, index) => (
                <div className="tags__tagText" key={index}>
                    <span className="tag-text">
                        {tag}
                    </span>
                </div>
            ))}
        </div>
    );
}


export default TagsList;


