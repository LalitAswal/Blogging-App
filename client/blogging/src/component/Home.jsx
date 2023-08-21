import React, { useEffect, useState } from "react";
import "../style/login.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [userDetails, setUserDetails] = useState([]);
  const navigate = useNavigate();

  const getUserDetails = async () => {
    const jwt = localStorage.getItem("jwt");
    console.log(jwt);
    if (!jwt) {
      navigate("/");
    }
    const headers = {
      "Content-Type": "application/json",
      authorization: `${jwt}`,
    };

    const response = await fetch("http://localhost:4000/user_Details", {
      headers,
    });
    const data = await response.json();
    console.log(data);
    setUserDetails(data["data"]);
  };
  useEffect(() => {
    getUserDetails();
  },);
  return (
    <h1>
      {
        <div className="div1">
          <table id="customers">
            <tr>
              <th>first Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
            {userDetails.map((ele, index) => {
              return (
                <tr key={index}>
                  <th>{ele.firstName}</th>
                  <th>{ele.lastName}</th>
                  <th>{ele.email}</th>
                </tr>
              );
            })}
          </table>
        </div>
      }
    </h1>
  );
};

export default Home;
