import React, { useState } from "react";
import UseTable from "./components/UseTable";
import { v4 as uuidv4 } from 'uuid';


function App() {

  const usersData = [
    { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
    { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
    { id: uuidv4(), name: 'Ben', username: 'benisphere' },
  ]

  const [users, setUsers] = useState(usersData)

  return (
    <div className="container">
      <h1>React - CRUD con Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Edit user</h2>
        </div>

        <div className="flex-large">
          <h2>Editar Usuario</h2>
          <UseTable users={users}/>
        </div>
      </div>
    </div>
  );
}

export default App;
