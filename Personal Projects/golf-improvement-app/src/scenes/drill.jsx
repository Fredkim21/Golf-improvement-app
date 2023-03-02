import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DrillsPage = () => {
  const { id } = useParams();
  const [drill, setDrill] = useState(null);
  const [sliderValue, setSliderValue] = useState(0);
  
  useEffect(() => {
    const fetchDrill = async () => {
      try {
        const response = await fetch(`/drills/${id}`);
        const data = await response.json();
        setDrill(data);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchDrill();
  }, [id]);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(`/users/${user_id}`, {
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

  if (!drill) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{drill.name}</h1>
      <p>Category: {drill.category}</p>
      <p>Skill Level: {drill.skillLevel}</p>
      <p>{drill.drill_info}</p>
      <input
        type="range"
        min="0"
        max="10"
        value={sliderValue}
        onChange={handleSliderChange}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default DrillsPage;
