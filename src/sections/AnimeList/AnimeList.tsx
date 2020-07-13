import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import GET_ANIMES_QUERY from '../../graphql/animes.graphql';

const AnimeList = props => {
  const { data, loading, error } = useQuery(GET_ANIMES_QUERY);

  console.log({ data, loading, error });

  return <div>asdasd</div>;
};

export default AnimeList;
