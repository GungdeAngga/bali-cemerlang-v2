import React, { useEffect, useState } from "react";

const useQuery = (fn) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    isSuccess: false,
    isError: false,
    error: "",
  });

  useEffect(() => {
    if (!fn) return;
    setState((s) => ({ ...s, isLoading: true }));
    fn()
      .then((data) => {
        setState((s) => ({
          ...s,
          data,
          isLoading: false,
          isError: false,
          error: "",
        }));
      })
      .catch((err) => {
        setState((s) => ({
          ...s,
          data: null,
          isLoading: false,
          isError: true,
          error: err.message || "failed to fetch",
        }));
      });
  }, []);

  return state;
};

export default useQuery;
