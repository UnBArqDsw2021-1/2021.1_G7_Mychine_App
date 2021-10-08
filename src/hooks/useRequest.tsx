import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import get from 'lodash/get';
import useSWR, { SWRConfiguration, SWRResponse } from 'swr';

import api from '../services/api';

export type GetRequest = AxiosRequestConfig | null;
interface Return<Data, Error>
  extends Pick<
    SWRResponse<AxiosResponse<Data>, AxiosError<Error>>,
    'isValidating' | 'error' | 'mutate'
  > {
  data: Data | undefined;
  response: AxiosResponse<Data> | undefined;
  isLoading: boolean;
}

export interface Config<T, Error = unknown>
  extends SWRConfiguration<AxiosResponse<T>, AxiosError<Error>> {
  dataPath?: keyof T | string | string[];
}

export default function useRequest<T = unknown, Error = unknown>(
  request: GetRequest,
  { dataPath: path, ...config }: Config<T, Error> = {}
): Return<T, Error> {
  const {
    data: response,
    error,
    isValidating,
    mutate,
  } = useSWR<AxiosResponse<T>, AxiosError<Error>>(
    request && JSON.stringify(request),
    /**
     * NOTE: Typescript thinks `request` can be `null` here, but the fetcher
     * function is actually only called by `useSWR` when it isn't.
     */
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    () => api(request!),
    {
      ...config,
    }
  );

  const dataPath = path ? `data.${path}` : 'data';

  return {
    data: get(response, dataPath),
    response,
    isLoading: !response && !error,
    error,
    isValidating,
    mutate,
  };
}
