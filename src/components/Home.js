import React from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';

const Home = () => {
  return (
    <div className="flex-center">
      <Card>
        <CardHeader>
          <h2>Welcome</h2>
        </CardHeader>
        <CardBody>
          <p>This is Water My Plants</p>
          <p>
            Where you can track your best friends and make sure they get the
            nutrition they need
          </p>
        </CardBody>
      </Card>
    </div>
  );
};

export default Home;
