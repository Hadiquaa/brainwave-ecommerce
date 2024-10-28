import React from 'react'
import './DescriptionBox.css';

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews(122)</div>

            </div>
            <div className="descriptionbox-description">
                <p>
                    Elevate your casual style with our timeless and versatile denim jacket. The classic design and tailored fit ensure a flattering silhouette, while the rugged denim adds a touch of edge. Layer it over a dress for a stylish contrast, or pair it with jeans for a denim-on-denim look. Whatever your choice, this jacket will effortlessly enhance any outfit.
                </p>
            </div>
        </div>
    )
}

export default DescriptionBox
