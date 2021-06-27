import axios from 'axios';
import { useQuery } from 'react-query';

import { QueryConfig } from '../@types';

export const makeQuery = (queryConfig: QueryConfig) => (payload) => {
  const { VERB, ENDPOINT } = queryConfig;
  return useQuery(axios[VERB](ENDPOINT));
};
