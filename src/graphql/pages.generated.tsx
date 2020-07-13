/* eslint-disable */
import * as Types from '../generated/types';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';

export type SearchQueryVariables = Types.Exact<{
  page?: Types.Maybe<Types.Scalars['Int']>;
  id?: Types.Maybe<Types.Scalars['Int']>;
  type?: Types.Maybe<Types.MediaType>;
  isAdult?: Types.Maybe<Types.Scalars['Boolean']>;
  search?: Types.Maybe<Types.Scalars['String']>;
  format?: Types.Maybe<Array<Types.Maybe<Types.MediaFormat>>>;
  status?: Types.Maybe<Types.MediaStatus>;
  countryOfOrigin?: Types.Maybe<Types.Scalars['CountryCode']>;
  source?: Types.Maybe<Types.MediaSource>;
  season?: Types.Maybe<Types.MediaSeason>;
  year?: Types.Maybe<Types.Scalars['String']>;
  onList?: Types.Maybe<Types.Scalars['Boolean']>;
  yearLesser?: Types.Maybe<Types.Scalars['FuzzyDateInt']>;
  yearGreater?: Types.Maybe<Types.Scalars['FuzzyDateInt']>;
  episodeLesser?: Types.Maybe<Types.Scalars['Int']>;
  episodeGreater?: Types.Maybe<Types.Scalars['Int']>;
  durationLesser?: Types.Maybe<Types.Scalars['Int']>;
  durationGreater?: Types.Maybe<Types.Scalars['Int']>;
  chapterLesser?: Types.Maybe<Types.Scalars['Int']>;
  chapterGreater?: Types.Maybe<Types.Scalars['Int']>;
  volumeLesser?: Types.Maybe<Types.Scalars['Int']>;
  volumeGreater?: Types.Maybe<Types.Scalars['Int']>;
  licensedBy?: Types.Maybe<Array<Types.Maybe<Types.Scalars['String']>>>;
  genres?: Types.Maybe<Array<Types.Maybe<Types.Scalars['String']>>>;
  excludedGenres?: Types.Maybe<Array<Types.Maybe<Types.Scalars['String']>>>;
  tags?: Types.Maybe<Array<Types.Maybe<Types.Scalars['String']>>>;
  excludedTags?: Types.Maybe<Array<Types.Maybe<Types.Scalars['String']>>>;
  minimumTagRank?: Types.Maybe<Types.Scalars['Int']>;
  sort?: Types.Maybe<Array<Types.Maybe<Types.MediaSort>>>;
}>;


export type SearchQuery = { __typename?: 'Query', Page?: Types.Maybe<{ __typename?: 'Page', pageInfo?: Types.Maybe<{ __typename?: 'PageInfo', total?: Types.Maybe<number>, perPage?: Types.Maybe<number>, currentPage?: Types.Maybe<number>, lastPage?: Types.Maybe<number>, hasNextPage?: Types.Maybe<boolean> }>, media?: Types.Maybe<Array<Types.Maybe<{ __typename?: 'Media', id: number, bannerImage?: Types.Maybe<string>, season?: Types.Maybe<Types.MediaSeason>, description?: Types.Maybe<string>, type?: Types.Maybe<Types.MediaType>, format?: Types.Maybe<Types.MediaFormat>, status?: Types.Maybe<Types.MediaStatus>, episodes?: Types.Maybe<number>, duration?: Types.Maybe<number>, chapters?: Types.Maybe<number>, volumes?: Types.Maybe<number>, genres?: Types.Maybe<Array<Types.Maybe<string>>>, isAdult?: Types.Maybe<boolean>, averageScore?: Types.Maybe<number>, popularity?: Types.Maybe<number>, title?: Types.Maybe<{ __typename?: 'MediaTitle', userPreferred?: Types.Maybe<string> }>, coverImage?: Types.Maybe<{ __typename?: 'MediaCoverImage', extraLarge?: Types.Maybe<string>, large?: Types.Maybe<string>, color?: Types.Maybe<string> }>, startDate?: Types.Maybe<{ __typename?: 'FuzzyDate', year?: Types.Maybe<number>, month?: Types.Maybe<number>, day?: Types.Maybe<number> }>, endDate?: Types.Maybe<{ __typename?: 'FuzzyDate', year?: Types.Maybe<number>, month?: Types.Maybe<number>, day?: Types.Maybe<number> }>, nextAiringEpisode?: Types.Maybe<{ __typename?: 'AiringSchedule', airingAt: number, timeUntilAiring: number, episode: number }>, mediaListEntry?: Types.Maybe<{ __typename?: 'MediaList', id: number, status?: Types.Maybe<Types.MediaListStatus> }>, studios?: Types.Maybe<{ __typename?: 'StudioConnection', edges?: Types.Maybe<Array<Types.Maybe<{ __typename?: 'StudioEdge', isMain: boolean, node?: Types.Maybe<{ __typename?: 'Studio', id: number, name: string }> }>>> }> }>>> }> };


export const SearchDocument = gql`
    query search($page: Int = 1, $id: Int, $type: MediaType, $isAdult: Boolean = false, $search: String, $format: [MediaFormat], $status: MediaStatus, $countryOfOrigin: CountryCode, $source: MediaSource, $season: MediaSeason, $year: String, $onList: Boolean, $yearLesser: FuzzyDateInt, $yearGreater: FuzzyDateInt, $episodeLesser: Int, $episodeGreater: Int, $durationLesser: Int, $durationGreater: Int, $chapterLesser: Int, $chapterGreater: Int, $volumeLesser: Int, $volumeGreater: Int, $licensedBy: [String], $genres: [String], $excludedGenres: [String], $tags: [String], $excludedTags: [String], $minimumTagRank: Int, $sort: [MediaSort] = [POPULARITY_DESC, SCORE_DESC]) {
  Page(page: $page, perPage: 20) {
    pageInfo {
      total
      perPage
      currentPage
      lastPage
      hasNextPage
    }
    media(id: $id, type: $type, season: $season, format_in: $format, status: $status, countryOfOrigin: $countryOfOrigin, source: $source, search: $search, onList: $onList, startDate_like: $year, startDate_lesser: $yearLesser, startDate_greater: $yearGreater, episodes_lesser: $episodeLesser, episodes_greater: $episodeGreater, duration_lesser: $durationLesser, duration_greater: $durationGreater, chapters_lesser: $chapterLesser, chapters_greater: $chapterGreater, volumes_lesser: $volumeLesser, volumes_greater: $volumeGreater, licensedBy_in: $licensedBy, genre_in: $genres, genre_not_in: $excludedGenres, tag_in: $tags, tag_not_in: $excludedTags, minimumTagRank: $minimumTagRank, sort: $sort, isAdult: $isAdult) {
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
      nextAiringEpisode {
        airingAt
        timeUntilAiring
        episode
      }
      mediaListEntry {
        id
        status
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
  }
}
    `;

/**
 * __useSearchQuery__
 *
 * To run a query within a React component, call `useSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchQuery({
 *   variables: {
 *      page: // value for 'page'
 *      id: // value for 'id'
 *      type: // value for 'type'
 *      isAdult: // value for 'isAdult'
 *      search: // value for 'search'
 *      format: // value for 'format'
 *      status: // value for 'status'
 *      countryOfOrigin: // value for 'countryOfOrigin'
 *      source: // value for 'source'
 *      season: // value for 'season'
 *      year: // value for 'year'
 *      onList: // value for 'onList'
 *      yearLesser: // value for 'yearLesser'
 *      yearGreater: // value for 'yearGreater'
 *      episodeLesser: // value for 'episodeLesser'
 *      episodeGreater: // value for 'episodeGreater'
 *      durationLesser: // value for 'durationLesser'
 *      durationGreater: // value for 'durationGreater'
 *      chapterLesser: // value for 'chapterLesser'
 *      chapterGreater: // value for 'chapterGreater'
 *      volumeLesser: // value for 'volumeLesser'
 *      volumeGreater: // value for 'volumeGreater'
 *      licensedBy: // value for 'licensedBy'
 *      genres: // value for 'genres'
 *      excludedGenres: // value for 'excludedGenres'
 *      tags: // value for 'tags'
 *      excludedTags: // value for 'excludedTags'
 *      minimumTagRank: // value for 'minimumTagRank'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useSearchQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SearchQuery, SearchQueryVariables>) {
        return ApolloReactHooks.useQuery<SearchQuery, SearchQueryVariables>(SearchDocument, baseOptions);
      }
export function useSearchLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SearchQuery, SearchQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SearchQuery, SearchQueryVariables>(SearchDocument, baseOptions);
        }
export type SearchQueryHookResult = ReturnType<typeof useSearchQuery>;
export type SearchLazyQueryHookResult = ReturnType<typeof useSearchLazyQuery>;
export type SearchQueryResult = ApolloReactCommon.QueryResult<SearchQuery, SearchQueryVariables>;

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
    
