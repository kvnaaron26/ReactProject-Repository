import React, { useState, useEffect } from "react";
import UserComponent from "../UserComponent/UserComponent";

const CardListComponent = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      // .then(json => console.log(json));
      .then((json) => setUsers(json));
  }, []);

  return (
    <div>
      {users.map((user) => {
        return (
          <div>
            <UserComponent data={user} />
          </div>
        );
      })}
    </div>
  );
};

export default CardListComponent;
