import React, { useEffect } from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap';
import { connect } from 'react-redux';
import { getPlants, removePlant } from '../state/actions';
import { Link } from 'react-router-dom';

const PlantList = (props) => {
  const { getPlants, user } = props;

  useEffect(() => {
    getPlants(user.user_id);
  }, [user, getPlants]);

  const deletePlant = (plant) => {
    props.removePlant(props.user.user_id, plant);
  };

  return (
    <section className={props.className + ' grid'}>
      {props.plants.map((plant) => (
        <Card key={plant.id}>
          <CardImg
            top
            width="100%"
            height="200px"
            src={plant.image}
            alt={plant.nickname}
            className="image-fit"
          />
          <CardBody>
            <CardTitle>{plant.nickname}</CardTitle>
            <CardSubtitle>{plant.species}</CardSubtitle>
            <CardText>Needs water every {plant.h2oFrequency} hours</CardText>
            <Link to={'/plants/edit/' + plant.id}>
              <Button className="gap">Edit</Button>
            </Link>
            <Button
              onClick={(e) => {
                e.preventDefault();
                deletePlant(plant);
              }}
              className="gap-x"
            >
              Delete
            </Button>
          </CardBody>
        </Card>
      ))}
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    plants: state.plants,
    user: state.user,
  };
};

export default connect(mapStateToProps, { getPlants, removePlant })(PlantList);
