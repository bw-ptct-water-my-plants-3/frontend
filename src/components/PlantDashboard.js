import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

import PlantList from './PlantList';

export default () => {
  return (
    <div className="margin">
      <div className="flex-end gap-y">
        <Link to="/plants/new">
          <Button color="primary">Add</Button>
        </Link>
      </div>
      <PlantList className="gap-y"></PlantList>
    </div>
  );
};
