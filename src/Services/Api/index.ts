import axios from "axios";
import useSWR from "swr";

const baseUrl = axios.create({
  baseURL: "https://api.github.com",
});

export function useFetch<Data = any, Error = any>(url: string) {
  const { data, error } = useSWR<Data, Error>(url, async (url) => {
    const response = await baseUrl.get(url);

    return response.data;
  });

  return { data, error };
}

export default baseUrl;
