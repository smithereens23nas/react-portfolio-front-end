import { useState, useEffect } from "react";
import { Projects } from "../components/Projects"

function Home(props) {
  // create state to hold home
  const [home, setHome] = useState(null);
  console.log(props);
  //create function to make api call
  const getHomeData = async () => {
    //make api call and get response
    const response = await fetch(props.URL);
    // turn response into javascript object
    const data = await response.json();
    // set the home state to the data
    setHome(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => getHomeData(), []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return home.map((element, index) => (
      <div key={index}>
        <h1>{element.name}</h1>
        <p>{element.bio}</p>
        <h4>{element.email}</h4>
        <Projects />
      </div>
    ));
  };

  return home ? loaded() : <h1>Loading...</h1>;
}

export default Home;