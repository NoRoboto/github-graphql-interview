import {endpoint, token} from '../consts';
import {GraphQLClient} from 'graphql-request';

import {QueryClient} from 'react-query';

export const queryClient = new QueryClient();

export const appSyncGraphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${token}`,
  },
});
