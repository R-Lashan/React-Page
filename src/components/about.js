import Header from "./header"


const About = () => {
    const Icon = <h1>&#9776;</h1>
    return ( 
        <div>
            <Header
            text="App Store"
            icon={Icon}
            home="Home"
            about="About"
            />
            <h1 style={{margin: "30px"}}>About</h1>
            <div>
                <p style={{margin: "30px"}}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab suscipit, labore odio, unde dicta architecto perferendis minima ad saepe odit atque delectus tempora nam, officia qui dolores rem reprehenderit obcaecati.
                </p>
                <p style={{margin: "30px"}}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab suscipit, labore odio, unde dicta architecto perferendis minima ad saepe odit atque delectus tempora nam, officia qui dolores rem reprehenderit obcaecati.
                </p>
            </div>
        </div>
     );
}
 
export default About;