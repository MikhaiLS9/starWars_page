import { useState, useEffect } from "react";

interface FetchOptions extends RequestInit {
  params?: Record<string, string>;
}

type FetchState<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

function useRequest<T>(
  url: string,
  trigger: boolean,
  options?: FetchOptions
): FetchState<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!trigger) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        let finalUrl = url;
        if (options?.params) {
          const queryParams = new URLSearchParams(options.params).toString();
          finalUrl = `${url}?${queryParams}`;
        }

        const response = await fetch(finalUrl, options);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, options, trigger]);

  return { data, loading, error };
}

export default useRequest;
