import React from 'react';
import styled from 'styled-components';

import { FulfillingBouncingCircleSpinner } from 'react-epic-spinners';

import AnimeCard from '../../components/AnimeCard';

import {
  useAnimesQuery,
  MediaFragment,
  AnimesQueryVariables,
} from '../../graphql/animes.generated';

const sectionTitles = {
  trending: 'TRENDING NOW',
  season: 'POPULAR THIS SEASON',
  nextSeason: 'UPCOMING NEXT SEASON',
  popular: 'ALL TIME POPULAR',
  top: 'TOP 100 ANIME',
};

type AnimeListKeys = keyof AnimesQueryVariables;

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

const CategoriesAnimeList = () => {
  const { data, loading, error, refetch } = useAnimesQuery();

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
        {data &&
          Object.keys(sectionTitles).map((key: AnimeListKeys) => {
            const title = sectionTitles[key];
            const animes = data ? data[key] : [];

            return (
              <div className="mb-12" key={key}>
                <h2 className="mb-4 font-bold text-xl">{title}</h2>
                <CardContainer>
                  {animes.media.map(anime => (
                    <AnimeCard key={anime.id} anime={anime as MediaFragment} />
                  ))}
                </CardContainer>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CategoriesAnimeList;
