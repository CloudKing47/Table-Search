import React, { useState, useEffect } from "react";
import "./styles.css";

const url = "https://run.mocky.io/v3/d22f6c23-4242-4f93-bf6b-8805c9e57051";
export default function App() {
  const [userDetails, setUserDetails] = useState([]);
  const [serachParams, setSearchParams] = useState("");

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((resp) => {
        setUserDetails(resp);
      });
  }, []);

  const checkMatch = (items) => {
    const tt = serachParams.includes(items.firstname.split(""));
    console.log(tt);
  };
  return (
    <div className="App">
      <input
        type="text"
        value={serachParams}
        onChange={(event) => setSearchParams(event.target.value)}
      />
      <table border="1" style={{ borderCollapse: "collapse" }}>
        <thead>
          <th>
            <td>FirstName </td>
          </th>
          <th>Last Name</th>
          <th>Phone</th>
          <th>Satte</th>
        </thead>
        <tbody>
          {userDetails.length > 0 &&
            userDetails
              .filter((itm, i) => {
                return itm.firstname.toLowerCase().includes(serachParams);
              })
              .map((item, index) => (
                <tr
                  style={{
                    backgroundColor: serachParams.includes(
                      item.firstname.toLowerCase()
                    )
                      ? "red"
                      : ""
                  }}
                >
                  <td>{item.firstname}</td>
                  <td>{item.lastname}</td>
                  <td>
                    <tr>
                      <td>{item.phone[0]}</td>
                      <td>{item.phone[0]}</td>
                    </tr>
                  </td>
                  <td>{item.state}</td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
}
