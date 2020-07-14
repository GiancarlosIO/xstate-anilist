import React, { FC } from 'react';

import { MediaFragment } from '../graphql/animes.generated';

type AnimeCardProps = {
  anime: MediaFragment;
};
const AnimeCard: FC<AnimeCardProps> = ({ anime }) => {
  return (
    <div className="w-full">
      <div>
        <div
          className="block relative"
          style={{
            paddingBottom: '142.85714%',
          }}
        >
          <img
            className="absolute inset-0 h-full object-cover"
            alt={anime.title?.userPreferred}
            src={anime.coverImage?.large}
          />
        </div>
      </div>
      <div>
        <p
          css={`
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          `}
          className="mt-2 text-sm overflow-hidden"
        >
          {anime.title?.userPreferred}
        </p>
      </div>
    </div>
  );
};

export default AnimeCard;
