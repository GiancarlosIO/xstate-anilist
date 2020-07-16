import React, { FC } from 'react';
import styled from 'styled-components';

import { FulfillingBouncingCircleSpinner } from 'react-epic-spinners';

import AnimeCard from '../../components/AnimeCard';

import { MediaType, MediaFormat } from '../../../../generated/types';

import { useSearchQuery } from '../../graphql/search.generated';

import { MediaFragment } from '../../graphql/animes.generated';

import { Context } from '../../machine';

const CardContainer = styled.div`
  display: grid;
  grid-gap: 25px 14px;
  grid-template-columns: repeat(2, 1fr);
  @media (min-width: 475px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

const SearchResults: FC<{ filterSelected: Context }> = ({ filterSelected }) => {
  const { data, loading, error, refetch } = useSearchQuery({
    variables: {
      type: MediaType.Anime,
      // TODO: Converte format filter to multiselect
      format:
        filterSelected.format.length > 0
          ? filterSelected.format.map(f => f.value)
          : undefined,
      year: filterSelected.year ? `${filterSelected.year.value}%` : undefined,
      genres: filterSelected.genres?.value,
      season: filterSelected.season?.value,
    },
  });

  if (loading) {
    return (
      <div className="mt-12 w-full h-full flex justify-center">
        <FulfillingBouncingCircleSpinner color="#2C7A7B" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-12 w-full h-full flex flex-col justify-center">
        <p className="mb-4">Ups! Something went wrong :(</p>
        <button
          type="button"
          className="px-4 py-2 bg-blue-500 text-white font-bold"
          onClick={() => refetch()}
        >
          Try again
        </button>
      </div>
    );
  }

  console.log('AnimeList');

  return (
    <div>
      <div className="w-full">
        <CardContainer>
          {data?.Page?.media?.map(anime => (
            <AnimeCard key={anime.id} anime={anime as MediaFragment} />
          ))}
        </CardContainer>
      </div>
    </div>
  );
};

export default SearchResults;
