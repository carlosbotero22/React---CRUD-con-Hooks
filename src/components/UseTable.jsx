import React from "react";

const UseTable = (props) => {
  console.log(props.users);
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Usuario</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {
            props.users.length > 0 ?
            props.users.map(user => (
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>
                        <button className="btn btn-success m-2">Editar</button>
                        <button className="btn btn-danger m-2">Eliminar</button>
                    </td>
                </tr>
            )) : (
                <tr>
                    <td colSpan={3}>No hay usuarios</td>
                </tr>
            )
            
        }
      </tbody>
    </table>
  );
}

export default UseTable;
