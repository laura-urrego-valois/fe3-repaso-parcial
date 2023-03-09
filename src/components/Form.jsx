import React, { useState } from "react";
import Card from "./Card";

const Form = () => {
  const [user, setUser] = useState({
    nombre: "",
    obraSocial: "",
    email: "",
    medico: "",
  });

  const [show, setShow] = useState(false);
  const [err, setErr] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (user.nombre.length > 8 && user.medico !== "") {
      setShow(true);
      setErr(false);
    } else {
      setShow(false);
      setErr(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label> Nombre Completo </label>
        <input
          type="text"
          onChange={(event) => setUser({ ...user, nombre: event.target.value })}
        />
        <label> Obra Social </label>
        <input
          type="text"
          onChange={(event) =>
            setUser({ ...user, obraSocial: event.target.value })
          }
        />
        <label> Email </label>
        <input
          type="email"
          onChange={(event) => setUser({ ...user, email: event.target.value })}
        />

        <br></br>
        <br></br>

        <select
          onChange={(event) => setUser({ ...user, medico: event.target.value })}
        >
          <option value="">Seleccione un especialista:</option>
          <option value="Dermatologo">Dermatólogo</option>
          <option value="Otorrinolaringologo">Otorrinolaringólogo</option>
          <option value="Cardiologo">Cardiólogo</option>
        </select>

        <br></br>
        <br></br>

        <button>Enviar</button>
      </form>
      {show ? <Card nombre={user.nombre} medico={user.medico} /> : null}
      {err ? "No ha puesto la información correcta" : null}
    </div>
  );
};

export default Form;
