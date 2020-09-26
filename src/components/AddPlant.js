import React, { useState } from "react";

const AddPlant = () => {
  const [plant, setPlant] = useState({
    nickName: "",
    species: "",
    h2oFrequency: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setPlant({
        nickName: e.target.value,
        species: e.target.value,
        h2oFrequency: e.target.value,
    });
};

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("submitted plant");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={plant.nickName}
        placeholder="Nickname"
        name="nickName"
        onChange={handleChange}
      />
      <input
        type="text"
        value={plant.species}
        placeholder="Species"
        name="species"
        onChange={handleChange}
      />
      <input
        type="number"
        value={plant.h2oFrequency}
        placeholder="H2O Frequency"
        name="h2oFrequency"
        onChange={handleChange}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default AddPlant;
