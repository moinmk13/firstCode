import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const Get_Data = () => {
  const [user, setUser] = useState([]);
  const [isError,setIsError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        let responce = await axios.get("https://reqres.in/api/users?page=2");
        setUser(responce.data.data);
      } catch (err) {
        setIsError(err.message);
      }
    }
    fetchData();
  }, []);

// using .then 

// useEffect(()=>{
//     axios.get("https://reqres.in/api/users?page=2").then((responce)=>{
//         // console.warn(resp);
//         setUser(responce.data.data)
//     }).catch((error)=>setIsError(error.message));
// },[])

console.warn(isError)
  return (
    <>
      <h1>Get Data From Api</h1>
      {
        isError !== "" && <p className="text-red-500">{isError}</p>
      }
      <Table>
        <thead>
          <tr>
            <td>Id</td>
            <td>First_Name</td>
            <td>Last_Name</td>
            <td>Email</td>
            <td>Avatar</td>
          </tr>
        </thead>
        <tbody>
          {user.map((userData) => {
            return (
              <tr key={userData.id}>
                <td>{userData.id}</td>
                <td>{userData.first_name}</td>
                <td>{userData.last_name}</td>
                <td>{userData.email}</td>
                {/* <td>{userData.avatar}</td> */}
                <img
                  src={userData.avatar}
                  alt="image"
                  height="100px"
                  width="100px"
                />
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default Get_Data;
