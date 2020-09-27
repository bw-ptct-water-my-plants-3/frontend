import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Button } from 'reactstrap';

const plantsList = [
  {
    id: 1,
    user_id: 1,
    nickname: 'Sunflower',
    species: 'Annualforbof',
    h2oFrequency: 2,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/a/a9/A_sunflower.jpg',
  },
  {
    id: 2,
    user_id: 2,
    nickname: 'Tulips',
    species: 'Liliaceae',
    h2oFrequency: 4,
    image:
      'https://s-media-cache-ak0.pinimg.com/736x/b4/c7/16/b4c716ddface1a7ef8f6c54151c15def.jpg',
  },
];

export default () => {
  const { id } = useParams();
  const isEditing = !!id;
  const [plant, setPlant] = useState(() => {
    const existingPlant = plantsList.find((plant) => plant.id === Number(id));
    return (
      existingPlant ?? {
        nickname: '',
        species: '',
        h2oFrequency: '',
      }
    );
  });

  const handleChange = (e) => {
    setPlant({ ...plant, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      console.log('edit', plant);
    } else {
      console.log('new', plant);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nickname"
        name="nickname"
        value={plant.nickname}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Species"
        name="species"
        value={plant.species}
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="H2O Frequency"
        name="h2oFrequency"
        value={plant.h2oFrequency}
        onChange={handleChange}
      />
      <Button type="submit" color="success">
        Submit
      </Button>
    </form>
  );
};
