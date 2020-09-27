import React, { useState } from "react";
import { Button } from "reactstrap";

const AddPlant = () => {
  const [plant, setPlant] = useState({
    nickName: "",
    species: "",
    h2oFrequency: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setPlant({ ...plant, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log(plant)
    e.preventDefault();
    alert("submitted plant");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        
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
      <Button color="success">SUBMIT</Button>
    </form>
  );
};

export default AddPlant;
