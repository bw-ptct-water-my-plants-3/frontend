import React from 'react';
import { Button } from 'reactstrap';

import PlantList from './PlantList';

export default () => {
  return (
    <div className="margin">
      <div className="flex-end gap-y">
        <Button color="primary">Add</Button>
      </div>
      <PlantList className="gap-y"></PlantList>
    </div>
  );
};
