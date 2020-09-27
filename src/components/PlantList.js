import React, { useState } from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap';

export default (props) => {
  const [plants] = useState([
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
  ]);

  return (
    <section className={props.className + ' grid'}>
      {plants.map((plant) => (
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
            <Button className="gap">Edit</Button>
            <Button className="gap-x">Delete</Button>
          </CardBody>
        </Card>
      ))}
    </section>
  );
};
