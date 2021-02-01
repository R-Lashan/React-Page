import React from 'react';
import Item from './components/item'
import Header from './components/header'
import Button from './components/button'
import Roadster from './images/tesla-roadster-11.jpg'

const app = () => {
  const Icon = <h1>&#9776;</h1>
  return ( 
    <div>
      <Header
          text="App Store"
          icon={Icon}
          home="Home"';';
          ';
          ;
          about="About"
      />
      <Item 
          backgroundImg={Roadster}
          price="$69.00"
          paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur illum sed quidem? Dolor suscipit, pariatur temporibus a laborum eaque natus assumenda possimus aut nulla dolorum quae beatae, ab unde ea."
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
    </div>
  );
}
 
export default app;