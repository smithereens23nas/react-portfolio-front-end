import { useState, useEffect } from "react";

function Home(props) {
  // create state to hold home
  const [home, setHome] = useState(null);

  //create function to make api call
  const getHomeData = async () => {
    //make api call and get response
    const response = await fetch(props.URL + 'home');
    // turn response into javascript object
    const data = await response.json();
    // set the home state to the data
    setHome(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => getHomeData());

  // define a function that will return the JSX needed once we get the data
  const loaded = () => (
    <div>
      <h2>{home.name}</h2>
      <h3>{home.bio}</h3>
      <p>{home.email}</p>
    </div>
  );

  return home ? loaded() : <h1>Loading...</h1>;
}

export default Home;