import React, { useEffect, useState } from "react";

import * as ReactBootStrap from "react-bootstrap";

export const Home = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/`)
      .then((response) => response.json())
      .then((data) => setData(data.results));
    // console.log(data)
    //setData(Data);
  }, [setData]);

  console.log("///", Data);
  return (
    <div>
      {/* <h1>{props.mass}</h1> */}
      <nav aria-label="Page navigation example">
        <ReactBootStrap.Table striped bordered hover>
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Hight</th>
              <th scope="col">Mass</th>
              <th scope="col">Birth Year</th>
              <th scope="col">Gender</th>
            </tr>
          </thead>
          <tbody>
            {Data &&
              Data.map((el) => (
                <tr key={el.id}>
                  <td>{el.name}</td>
                  <td>{el.height}</td>
                  <td>{el.mass}</td>
                  <td>{el.birth_year}</td>
                  <td>{el.gender}</td>
                </tr>
              ))}
          </tbody>
        </ReactBootStrap.Table>
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#">
              Previous
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
