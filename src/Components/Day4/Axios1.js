import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const Asyncfu = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    async function getData() {
      const responce = await axios.get("https://reqres.in/api/products");
      setUserData(responce.data.data);
    }
    getData();
  }, []);
  return (
    <>
      <Table striped bordered variant="primary">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Color</th>
            <th>Year</th>
            <th>Penton value</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.color}</td>
                <td>{item.year}</td>
                <td>{item.pantone_value}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default Asyncfu;
