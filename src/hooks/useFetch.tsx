import { useCallback, useEffect, useState } from "react";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

type FetchOptions = {} & RequestInit;

const useFetch = <T,>(url: string, options?: FetchOptions) => {
  const [fetchState, setFetchState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  const fetchData = useCallback(async () => {
    setFetchState({ data: null, loading: true, error: null });

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = (await response.json()) as T;
      setFetchState({ data, loading: false, error: null });
    } catch (error) {
      const err = error as Error;
      setFetchState({ data: null, loading: false, error: err });
    }
  }, [url, options]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { ...fetchState, refetch: fetchData };
};

export default useFetch;
