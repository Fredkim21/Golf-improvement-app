import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./navbar";

const DrillsPage = () => {
  const { id } = useParams();
  // const [drill, setDrill] = useState(null);
  const [sliderValue, setSliderValue] = useState(0);

  // const getUserIdFromCookie = () => {
  //   const cookies = document.cookie.split(";"); // split cookies into an array
  //   for (let i = 0; i < cookies.length; i++) {
  //     const cookie = cookies[i].trim();
  //     if (cookie.startsWith("user_id=")) { // check if cookie name matches "user_id"
  //       const userId = cookie.substring("user_id=".length, cookie.length); // extract the user_id value
  //       return userId;
  //     }
  //   }
  //   return null; // return null if user_id cookie is not found
  // };

  // const userId = getUserIdFromCookie();

  // useEffect(() => {
  //   const fetchDrill = async () => {
  //     try {
  //       const response = await fetch(`/drills/${id}`);
  //       const data = await response.json();
  //       setDrill(data);
  //     } catch (err) {
  //       console.error(err.message);
  //     }
  //   };

  //   fetchDrill();
  // }, [id]);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(`/users/${userId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          category: drill.category,
          rating: sliderValue,
        }),
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  // if (!drill) {
  //   return <div>Loading...</div>;
  // }

  // dummy drill
  const drill = {
    id: 2,
    title: "Driving Accuracy",
    type: "Driving",
    skillLevel: "Expert",
    description:
      "Set up a target area on the driving range, such as a fairway or green. Hit 10 golf balls with your driver, and try to land as many as possible within the target area. Keep track of your accuracy and try to improve your score with each attempt.",
  };

  return (
    <div>
      <Navbar />
      <div className="card">
        <h1>{drill.title}</h1>
        <p>Category: {drill.type}</p>
        <p>Skill Level: {drill.skillLevel}</p>
        <p>{drill.description}</p>
        <input
          type="range"
          min="0"
          max="10"
          value={sliderValue}
          onChange={handleSliderChange}
        />
        <p>Slider Value: {sliderValue}</p>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default DrillsPage;
