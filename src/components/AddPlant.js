import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { updatePlant, addPlant } from '../state/actions';
import { useHistory } from 'react-router-dom';

const AddPlant = (props) => {
  const history = useHistory();

  const { id } = useParams();
  const isEditing = !!id;
  const [plant, setPlant] = useState(() => {
    const existingPlant = props.plants.find((plant) => plant.id === Number(id));
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
      props.updatePlant(props.user.user_id, plant).then(() => {
        history.push('/plants');
      });
    } else {
      console.log('new', plant);
      props.addPlant(props.user.user_id, plant).then(() => {
        history.push('/plants');
      });
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

const mapStateToProps = (state) => {
  return {
    plants: state.plants,
    user: state.user,
  };
};

export default connect(mapStateToProps, { updatePlant, addPlant })(AddPlant);
