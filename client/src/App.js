// import logo from "./logo.svg";
import axios from "axios";
import qs from "qs";
import "./App.css";
import { useState } from "react";
import { API } from "./Api/BankApi";

function App() {
  const [userData, setUserData] = useState([]);
  const [inputId, setInputID] = useState("");
  const [userDataById, setUserDataById] = useState("");

  const handleGetAllUsers = async () => {
    try {
      const { data } = await API.get("/users/get-all-users");
      // const { data } = await axios.get("http://localhost:5000/get-all-users");
      // const { data } = await API.get("http://localhost:5000/weather/haifa");

      // const { data } = await API.get("/haifa");
      console.log(data);
      setUserData(data);
      setUserDataById("");
    } catch (err) {
      console.log(err);
    }
  };

  const handleGetById = async () => {
    try {
      const { data } = await API.post("/users/get-by-id", {
        id: inputId,
      });
      // const { data } = await API.get("http://localhost:5000/weather/haifa");
      // const { data } = await API.get("/haifa");
      console.log(data);
      setUserDataById(data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleId = ({ target }) => {
    setInputID(target.value);
  };
  const handleCreateUsers = async () => {
    try {
      const { data } = await API.get("/users/create-all");
      // const { data } = await API.get("http://localhost:5000/weather/haifa");
      // const { data } = await API.get("/haifa");
      console.log(data);
      setUserData(data);
    } catch (err) {
      console.log(err);
    }
  };

  const ShowUserData = () => {
    return (
      <div className="user-detail">
        <p>user id: {userDataById._id}</p>
        <p>user cash: {userDataById.cash}</p>
        <p>user credit: {userDataById.credit}</p>
        <p>
          user account: {userDataById.account}
          {/* {user.account.map((account) => {
            return <span key={account}> {account}</span>;
          })} */}
          {/* {console.log(user.account)} */}
        </p>
      </div>
    );
  };
  const ShowAllUsers = () => {
    return userData.map((user) => {
      return (
        <div key={user._id} className="user-detail">
          <p>user id: {user._id}</p>
          <p>user cash: {user.cash}</p>
          <p>user credit: {user.credit}</p>
          <p>
            user account: {user.account}
            {/* {user.account.map((account) => {
              return <span key={account}> {account}</span>;
            })} */}
            {console.log(user.account)}
          </p>
        </div>
      );
    });
  };
  const handleClick = async () => {
    try {
      const { data } = await API.get("/weather/haifa");
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
      <div className="container">
        <div className="button-container">
          <button onClick={handleGetAllUsers}>get users</button>
          <button onClick={handleCreateUsers}>create users</button>
          <div className="getbyid">
            <button onClick={handleGetById}>get by id</button>
            <input
              placeholder="insert id"
              value={inputId}
              onChange={handleId}
            />
          </div>
        </div>
        <div className="content-container">
          {console.log(userData)}
          {userDataById ? (
            <div className="show-users"> {ShowUserData()}</div>
          ) : (
            userData && <div className="show-users"> {ShowAllUsers()}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
