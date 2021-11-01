import {useQuery, UseQueryResult, QueryObserverOptions} from 'react-query';
import {gql} from 'graphql-request';

import {appSyncGraphQLClient} from '../index';

export interface IRepos {
  user: {
    repositories: {
      nodes: Array<{
        name: string;
        url: string;
      }>;
    };
  };
}

export type IParamsCategoriesQuery = QueryObserverOptions<
  IRepos,
  unknown,
  IRepos,
  IRepos,
  'getReposQuery'
>;

export const getRepos = (username: string) => (): Promise<IRepos> =>
  appSyncGraphQLClient.request<IRepos>(
    gql`
      query GetReposQuery($username: String!) {
        user(login: $username) {
          repositories(first: 10, isFork: false) {
            nodes {
              name
              url
            }
          }
        }
      }
    `,
    {username},
  );

const useGetReposByUser = (
  username: string,
  useQueryOptions?: IParamsCategoriesQuery,
): UseQueryResult<IRepos, unknown> =>
  useQuery('getReposQuery', getRepos(username), useQueryOptions);

export default useGetReposByUser;
