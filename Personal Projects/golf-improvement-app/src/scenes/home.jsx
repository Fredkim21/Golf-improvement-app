import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [drills, setDrills] = useState([
    {
      id: 1,
      title: "Putting Challenge",
      type: "Putting",
      skillLevel: "Intermediate",
      description:
        "Set up 10 golf balls in a straight line, each 3 feet apart. Putt each ball into a small cup or hole. Keep track of how many putts it takes you to sink all 10 balls. Try to improve your score with each attempt.",
    },
    {
      id: 2,
      title: "Driving Accuracy",
      type: "Driving",
      skillLevel: "Expert",
      description:
        "Set up a target area on the driving range, such as a fairway or green. Hit 10 golf balls with your driver, and try to land as many as possible within the target area. Keep track of your accuracy and try to improve your score with each attempt.",
    },
    {
      id: 3,
      title: "Chipping Game",
      type: "Chipping",
      skillLevel: "Beginning",
      description:
        "Set up a small target area, such as a hula hoop or bucket, about 10-15 feet away from you. Take turns chipping balls into the target area with a partner or group of friends. Keep score and see who can get the most balls into the target area.",
    },
  ]);

  // useEffect(() => {
  //   // fetch drills from database
  //   const fetchDrills = async () => {
  //     const response = await fetch('/api/drills');
  //     const data = await response.json();
  //     console.log(data);
  //     setDrills(data);
  //   };

  //   fetchDrills();
  // }, []);

// <Link to={`/drill/${drill.id}`}>

  return (
    <div>
      <Navbar />

      <h1>homepage</h1>
        {drills.map((drill) => (
      <div className="card-list">
          <div className="card" key={drill.id}>
            <Link to={`/drills`}>
              <h3>{drill.title}</h3>
            </Link>
            <p>Type: {drill.type}</p>
            <p>Skill Level: {drill.skillLevel}</p>
            <p>{drill.description}</p>
          </div>
      </div>
        ))}
    </div>
  );
};

export default HomePage;
