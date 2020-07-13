/* eslint-disable */
import * as Types from '../../../generated/types';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';

export type AnimesQueryVariables = Types.Exact<{
  season?: Types.Maybe<Types.MediaSeason>;
  seasonYear?: Types.Maybe<Types.Scalars['Int']>;
  nextSeason?: Types.Maybe<Types.MediaSeason>;
  nextYear?: Types.Maybe<Types.Scalars['Int']>;
}>;


export type AnimesQuery = { __typename?: 'Query', trending?: Types.Maybe<{ __typename?: 'Page', media?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Media' }
      & MediaFragment
    )>>> }>, season?: Types.Maybe<{ __typename?: 'Page', media?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Media' }
      & MediaFragment
    )>>> }>, nextSeason?: Types.Maybe<{ __typename?: 'Page', media?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Media' }
      & MediaFragment
    )>>> }>, popular?: Types.Maybe<{ __typename?: 'Page', media?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Media' }
      & MediaFragment
    )>>> }>, top?: Types.Maybe<{ __typename?: 'Page', media?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Media' }
      & MediaFragment
    )>>> }> };

export type MediaFragment = { __typename?: 'Media', id: number, bannerImage?: Types.Maybe<string>, season?: Types.Maybe<Types.MediaSeason>, description?: Types.Maybe<string>, type?: Types.Maybe<Types.MediaType>, format?: Types.Maybe<Types.MediaFormat>, status?: Types.Maybe<Types.MediaStatus>, episodes?: Types.Maybe<number>, duration?: Types.Maybe<number>, chapters?: Types.Maybe<number>, volumes?: Types.Maybe<number>, genres?: Types.Maybe<Array<Types.Maybe<string>>>, isAdult?: Types.Maybe<boolean>, averageScore?: Types.Maybe<number>, popularity?: Types.Maybe<number>, title?: Types.Maybe<{ __typename?: 'MediaTitle', userPreferred?: Types.Maybe<string> }>, coverImage?: Types.Maybe<{ __typename?: 'MediaCoverImage', extraLarge?: Types.Maybe<string>, large?: Types.Maybe<string>, color?: Types.Maybe<string> }>, startDate?: Types.Maybe<{ __typename?: 'FuzzyDate', year?: Types.Maybe<number>, month?: Types.Maybe<number>, day?: Types.Maybe<number> }>, endDate?: Types.Maybe<{ __typename?: 'FuzzyDate', year?: Types.Maybe<number>, month?: Types.Maybe<number>, day?: Types.Maybe<number> }>, mediaListEntry?: Types.Maybe<{ __typename?: 'MediaList', id: number, status?: Types.Maybe<Types.MediaListStatus> }>, nextAiringEpisode?: Types.Maybe<{ __typename?: 'AiringSchedule', airingAt: number, timeUntilAiring: number, episode: number }>, studios?: Types.Maybe<{ __typename?: 'StudioConnection', edges?: Types.Maybe<Array<Types.Maybe<{ __typename?: 'StudioEdge', isMain: boolean, node?: Types.Maybe<{ __typename?: 'Studio', id: number, name: string }> }>>> }> };

export const MediaFragmentDoc = gql`
    fragment media on Media {
  id
  title {
    userPreferred
  }
  coverImage {
    extraLarge
    large
    color
  }
  startDate {
    year
    month
    day
  }
  endDate {
    year
    month
    day
  }
  bannerImage
  season
  description
  type
  format
  status
  episodes
  duration
  chapters
  volumes
  genres
  isAdult
  averageScore
  popularity
  mediaListEntry {
    id
    status
  }
  nextAiringEpisode {
    airingAt
    timeUntilAiring
    episode
  }
  studios(isMain: true) {
    edges {
      isMain
      node {
        id
        name
      }
    }
  }
}
    `;
export const AnimesDocument = gql`
    query animes($season: MediaSeason, $seasonYear: Int, $nextSeason: MediaSeason, $nextYear: Int) {
  trending: Page(page: 1, perPage: 6) {
    media(sort: TRENDING_DESC, type: ANIME, isAdult: false) {
      ...media
    }
  }
  season: Page(page: 1, perPage: 6) {
    media(season: $season, seasonYear: $seasonYear, sort: POPULARITY_DESC, type: ANIME, isAdult: false) {
      ...media
    }
  }
  nextSeason: Page(page: 1, perPage: 6) {
    media(season: $nextSeason, seasonYear: $nextYear, sort: POPULARITY_DESC, type: ANIME, isAdult: false) {
      ...media
    }
  }
  popular: Page(page: 1, perPage: 6) {
    media(sort: POPULARITY_DESC, type: ANIME, isAdult: false) {
      ...media
    }
  }
  top: Page(page: 1, perPage: 10) {
    media(sort: SCORE_DESC, type: ANIME, isAdult: false) {
      ...media
    }
  }
}
    ${MediaFragmentDoc}`;

/**
 * __useAnimesQuery__
 *
 * To run a query within a React component, call `useAnimesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAnimesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAnimesQuery({
 *   variables: {
 *      season: // value for 'season'
 *      seasonYear: // value for 'seasonYear'
 *      nextSeason: // value for 'nextSeason'
 *      nextYear: // value for 'nextYear'
 *   },
 * });
 */
export function useAnimesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AnimesQuery, AnimesQueryVariables>) {
        return ApolloReactHooks.useQuery<AnimesQuery, AnimesQueryVariables>(AnimesDocument, baseOptions);
      }
export function useAnimesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AnimesQuery, AnimesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AnimesQuery, AnimesQueryVariables>(AnimesDocument, baseOptions);
        }
export type AnimesQueryHookResult = ReturnType<typeof useAnimesQuery>;
export type AnimesLazyQueryHookResult = ReturnType<typeof useAnimesLazyQuery>;
export type AnimesQueryResult = ApolloReactCommon.QueryResult<AnimesQuery, AnimesQueryVariables>;

      export interface IntrospectionResultData {
        __schema: {
          types: {
            kind: string;
            name: string;
            possibleTypes: {
              name: string;
            }[];
          }[];
        };
      }
      const result: IntrospectionResultData = {
  "__schema": {
    "types": [
      {
        "kind": "UNION",
        "name": "NotificationUnion",
        "possibleTypes": [
          {
            "name": "AiringNotification"
          },
          {
            "name": "FollowingNotification"
          },
          {
            "name": "ActivityMessageNotification"
          },
          {
            "name": "ActivityMentionNotification"
          },
          {
            "name": "ActivityReplyNotification"
          },
          {
            "name": "ActivityReplySubscribedNotification"
          },
          {
            "name": "ActivityLikeNotification"
          },
          {
            "name": "ActivityReplyLikeNotification"
          },
          {
            "name": "ThreadCommentMentionNotification"
          },
          {
            "name": "ThreadCommentReplyNotification"
          },
          {
            "name": "ThreadCommentSubscribedNotification"
          },
          {
            "name": "ThreadCommentLikeNotification"
          },
          {
            "name": "ThreadLikeNotification"
          },
          {
            "name": "RelatedMediaAdditionNotification"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "ActivityUnion",
        "possibleTypes": [
          {
            "name": "TextActivity"
          },
          {
            "name": "ListActivity"
          },
          {
            "name": "MessageActivity"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "LikeableUnion",
        "possibleTypes": [
          {
            "name": "ListActivity"
          },
          {
            "name": "TextActivity"
          },
          {
            "name": "MessageActivity"
          },
          {
            "name": "ActivityReply"
          },
          {
            "name": "Thread"
          },
          {
            "name": "ThreadComment"
          }
        ]
      }
    ]
  }
};
      export default result;
    
