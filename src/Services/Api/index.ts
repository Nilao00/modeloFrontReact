import axios, { AxiosResponse } from "axios";
import useSWR from "swr";

const baseUrl = axios.create({
  baseURL: "https://api.github.com",
});

export function useFetch<Data = Object, Error = Object>(url: string) {
  const { data, error } = useSWR<Data, Error>(url, async (url: string) => {
    const response: AxiosResponse = await baseUrl.get(url);

    return response.data;
  });

  return { data, error };
}

export default baseUrl;
