// import logo from "./logo.svg";

import "./App.css";
import { useState } from "react";
import { API } from "./Api/BankApi";

function App() {
  const [userData, setUserData] = useState("");

  const handleGetAllUsers = async () => {
    try {
      const { data } = await API.get("http://localhost:5000/bank/getusers");
      // const { data } = await API.get("http://localhost:5000/weather/haifa");

      // const { data } = await API.get("/haifa");
      console.log(data);
      setUserData(data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleCreateUsers = async () => {
    try {
      const { data } = await API.get("http://localhost:5000/weather/haifa");
      // const { data } = await API.get("http://localhost:5000/weather/haifa");
      // const { data } = await API.get("/haifa");
      console.log(data);
      setUserData(data);
    } catch (err) {
      console.log(err);
    }
  };
  const ShowAllUsers = () => {
    return userData.map((user) => {
      return (
        <div key={user.id} className="user-detail">
          <p>user id: {user.id}</p>
          <p>user cash: {user.cash}</p>
          <p>user credit: {user.credit}</p>
          <p>
            user account:{" "}
            {user.account.map((account) => {
              return <span key={account}> {account}</span>;
            })}
          </p>
        </div>
      );
    });
  };
  const handleClick = async () => {
    try {
      const { data } = await API.get("http://localhost:5000/weather/haifa");
      // const { data } = await API.get("http://localhost:5000/weather/haifa");
      // const { data } = await API.get("/haifa");
      console.log(data[0].cash);
      setUserData(data[0].cash);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="App">
      <div className="get-users">
        <button onClick={handleGetAllUsers}>get users</button>
        {userData && <div className="show-users"> {ShowAllUsers()}</div>}
      </div>
      <div className="get-users">
        <button onClick={handleCreateUsers}>create users</button>
        {userData && <div className="show-users"> {ShowAllUsers()}</div>}
      </div>
    </div>
  );
}

export default App;
