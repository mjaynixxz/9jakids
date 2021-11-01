import React from 'react'
import './Item.css'

const Item = ({ title, description, image }) => {
    return (
        <div className="itemList">
            <div className="image">
                <img src={image} alt={image} />
            </div>
            <div className="text">
                <h2>{title}</h2>
                <h4>{description}</h4>

            </div>
        </div>
    )
}

export default Item
