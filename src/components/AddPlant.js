import React, { useState } from "react";

const AddPlant = () => {
  const [plant, setPlant] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("submitted plant");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value="nickname" placeholder="Nickname" />
      <input type="text" value="species" placeholder="Species" />
      <input type="number" value="H2O Frequency" placeholder="H2O Frequency" />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default AddPlant;
