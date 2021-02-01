import React from 'react';

const Button = ({btntxt,bgcolor,border,outline,txtcolor,width,height}) => {
    return ( 
        <div>
            <button style={{
                backgroundColor: bgcolor,
                color: txtcolor,
                border: border,
                outline: outline,
                width: width,
                height: height,
                position: 'absolute',
                top: '73%',
                left: '38%'
            }}>{btntxt}</button>
        </div>
     );
}
 
export default Button;