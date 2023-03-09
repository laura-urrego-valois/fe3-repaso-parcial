import React from "react";

const Card = ({ nombre, medico }) => {
  const date = new Date();
  const dia = date.getDate();
  const mes = date.getMonth();
  console.log(date);

  return (
    <div>
      <h3>
        {nombre} tienes turno con {medico}
      </h3>
      <h3>
        Para el día {dia + 7}/{mes + 1} a las 16:00 hrs
      </h3>
    </div>
  );
};

export default Card;