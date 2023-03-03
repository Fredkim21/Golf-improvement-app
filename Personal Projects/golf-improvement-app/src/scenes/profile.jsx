import React, { useState, useEffect, PureComponent } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { useLocation } from "react-router-dom";
import Navbar from "./navbar";

const ProfilePage = () => {
  const location = useLocation();
  const userId = new URLSearchParams(location.search).get("user_id");
  const [profile, setProfile] = useState(null);

  // fetch profile data from API
  // useEffect(() => {
  //   const fetchProfile = async () => {
  //     const response = await fetch("/api/profile", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ userId }),
  //     });
  //     const data = await response.json();
  //     setProfile(data);
  //   };

  //   fetchProfile();
  // }, [userId]);

  // if (!profile) {
  //   return <div>Loading...</div>;
  // }

  // // data fom fetched data
  // const values = [
  //   { category: "Putting", value: profile.putting },
  //   { category: "Driver", value: profile.driver },
  //   { category: "Long Irons", value: profile.longIrons },
  //   { category: "Short Irons", value: profile.shortIrons },
  //   { category: "Chipping", value: profile.chipping },
  //   { category: "Bunker", value: profile.bunker },
  // ];

  // dummy data
  const values = [
    { category: "Putting", value: 70 },
    { category: "Driver", value: 50 },
    { category: "Long Irons", value: 35 },
    { category: "Short Irons", value: 60 },
    { category: "Chipping", value: 45 },
    { category: "Bunker", value: 30 },
  ];

  return (
    <div style={{ width: "1000px" }}>
      <Navbar />
      <h1>ProfilePage</h1>
      <ResponsiveContainer width="100%" height={400}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={values}>
          <PolarGrid />
          <PolarAngleAxis dataKey="category" tick={{ fontSize: 14 }} />
          {/* <PolarRadiusAxis angle={30} domain={[0, 100]} /> */}
          <Radar
            name="Skill"
            dataKey="value"
            stroke="#d4e09b"
            fill="#d4e09b"
            fillOpacity={0.8}
          />
        </RadarChart>
      </ResponsiveContainer>
      <table id="table" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Category</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {values.map(({ category, value }) => (
            <tr key={category}>
              <td>{category}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProfilePage;
