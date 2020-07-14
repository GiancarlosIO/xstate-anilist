import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { FulfillingBouncingCircleSpinner } from 'react-epic-spinners';

import { useAnimesQuery } from '../../graphql/animes.generated';

const AnimeList = props => {
  const { data, loading, error } = useAnimesQuery();

  console.log({ data, loading, error });

  if (true) {
    return (
      <div className="w-full h-full flex justify-center">
        <FulfillingBouncingCircleSpinner color="#2C7A7B" />
      </div>
    );
  }

  return <div>asdasd</div>;
};

export default AnimeList;
