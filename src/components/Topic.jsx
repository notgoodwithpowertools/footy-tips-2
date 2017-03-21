import React from 'react';

const Topic = ({match}) => {

  return (
    <div>
      <h2>{match.params.topicId}</h2>
    </div>
  );

};

export default Topic;
