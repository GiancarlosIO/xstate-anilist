import React from 'react';
import { useMachine } from '@xstate/react';

import CategoriesAnimeList from './sections/CategoriesAnimeList';
import SearchResults from './sections/SearchResults';
import Filters from './sections/Filters';

import machine from './machine';

const Search = () => {
  const [stateMachine, sendEvent] = useMachine(machine);

  const isFiltered = stateMachine.matches('filtered');

  return (
    <div>
      <div className="mb-10">
        <Filters filterSelected={stateMachine.context} sendEvent={sendEvent} />
      </div>
      {isFiltered ? (
        <SearchResults filterSelected={stateMachine.context} />
      ) : (
        <CategoriesAnimeList />
      )}
    </div>
  );
};

export default Search;
