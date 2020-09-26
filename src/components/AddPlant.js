import React, { useState } from "react";

const AddPlant = () => {
  const [plant, setPlant] = useState({
      nickName:"",
      species:"",
      h2oFrequency:""
  });

const handleChange = (e) => {
    e.preventDefault();

}

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("submitted plant");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={plant.nickName} placeholder="Nickname" name="nickName"/>
      <input type="text" value={plant.species} placeholder="Species" name="species"/>
      <input type="number" value={plant.h2oFrequency} placeholder="H2O Frequency" name="h2oFrequency" />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default AddPlant;
