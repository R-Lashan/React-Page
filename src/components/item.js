import React from 'react';
import './item.css'
import Roadster from '../images/tesla-roadster-11.jpg'
import Header from './header';
import Button from './button';

const Item = ({backgroundImg,price,paragraph}) => {
    const Icon = <h1>&#9776;</h1>
    return ( 
        <div>
            <Header
            text="App Store"
            icon={Icon}
            home="Home"
            about="About"
            />
            <Button
            btntxt="View"
            bgcolor="black"
            border="none"
            outline="none"
            txtcolor="white"
            width="90px"
            height="40px"
            />
            <div className="ImageDiv">
                <img className="Images" src={Roadster} alt=""/>
                <p className="price">$69.00</p>
                <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, beatae autem ullam aspernatur iste possimus vero hic, rerum quo ratione tempore at eaque numquam quas obcaecati quod animi magnam culpa!</p>
            </div>
        </div>
     );
}
 
export default Item;