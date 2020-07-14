/* eslint-disable */
import * as Types from '../../../generated/types';

import gql from 'graphql-tag';
import * as ApolloReactCommon from 'react-apollo';
import * as ApolloReactHooks from 'react-apollo';

export type GenresAndTagsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GenresAndTagsQuery = { __typename?: 'Query', genres?: Types.Maybe<Array<Types.Maybe<string>>>, tags?: Types.Maybe<Array<Types.Maybe<{ __typename?: 'MediaTag', name: string, description?: Types.Maybe<string>, category?: Types.Maybe<string>, isAdult?: Types.Maybe<boolean> }>>> };


export const GenresAndTagsDocument = gql`
    query genresAndTags {
  genres: GenreCollection
  tags: MediaTagCollection {
    name
    description
    category
    isAdult
  }
}
    `;

/**
 * __useGenresAndTagsQuery__
 *
 * To run a query within a React component, call `useGenresAndTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGenresAndTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGenresAndTagsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGenresAndTagsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GenresAndTagsQuery, GenresAndTagsQueryVariables>) {
        return ApolloReactHooks.useQuery<GenresAndTagsQuery, GenresAndTagsQueryVariables>(GenresAndTagsDocument, baseOptions);
      }
export function useGenresAndTagsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GenresAndTagsQuery, GenresAndTagsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GenresAndTagsQuery, GenresAndTagsQueryVariables>(GenresAndTagsDocument, baseOptions);
        }
export type GenresAndTagsQueryHookResult = ReturnType<typeof useGenresAndTagsQuery>;
export type GenresAndTagsLazyQueryHookResult = ReturnType<typeof useGenresAndTagsLazyQuery>;
export type GenresAndTagsQueryResult = ApolloReactCommon.QueryResult<GenresAndTagsQuery, GenresAndTagsQueryVariables>;
export function refetchGenresAndTagsQuery(variables?: GenresAndTagsQueryVariables) {
      return { query: GenresAndTagsDocument, variables: variables }
    }

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
    
