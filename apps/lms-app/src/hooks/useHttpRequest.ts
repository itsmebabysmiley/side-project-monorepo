import apiClient from '@/httpClient/axios'
import { useMutation, useQuery, UseQueryOptions } from '@tanstack/react-query'
import { AxiosRequestConfig } from 'axios'

export const useGetRequest = <T = unknown>(
  url: string,
  queries?: Record<string, any>,
  options?: Omit<UseQueryOptions<T>, 'queryKey' | 'queryFn'>,
) =>
  useQuery({
    queryKey: [url, queries],
    queryFn: () =>
      apiClient.get<T>(url, { params: queries }).then((res) => res.data),
    ...options,
    retry: 0,
  })

export const usePostRequest = <
  TResponse = unknown,
  TData = Record<string, any>,
  TConfig = AxiosRequestConfig,
>(
  url: string,
) =>
  useMutation<
    TResponse,
    Error,
    { data: TData; config?: AxiosRequestConfig },
    TConfig
  >({
    mutationKey: [url],
    mutationFn: ({ data, config }) =>
      apiClient
        .post<TResponse>(url, data, config)
        .then((res) => res.data as unknown as TResponse),
    retry: 0,
  })

// export const usePutRequest = <T = unknown>(
//   url: string,
//   data: any,
//   options?: UseMutationOptions<T>,
// ) =>
//   useMutation(
//     () => apiClient.put<T>(url, data).then((res) => res.data),
//     options,
//   )

// export const useDeleteRequest = <T = unknown>(
//   url: string,
//   options?: UseMutationOptions<T>,
// ) =>
//   useMutation(() => apiClient.delete<T>(url).then((res) => res.data), options)

// export const usePatchRequest = <T = unknown>(
//   url: string,
//   data: any,
//   options?: UseMutationOptions<T>,
// ) =>
//   useMutation(
//     () => apiClient.patch<T>(url, data).then((res) => res.data),
//     options,
//   )
