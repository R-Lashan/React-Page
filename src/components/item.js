import React from 'react';
import './item.css'

const Item = ({backgroundImg,price,paragraph}) => {
    return ( 
        <div>
            <div className="ImageDiv">
                <img className="Images" src={backgroundImg} alt=""/>
                <p className="price">{price}</p>
                <p className="paragraph">{paragraph}</p>
            </div>
        </div>
     );
}
 
export default Item;