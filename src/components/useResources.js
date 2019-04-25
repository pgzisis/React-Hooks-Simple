import { useState, useEffect } from "react";
import jsonPlaceholder from "../apis/jsonPlaceholder";

const useResources = resource => {
  const [resources, setRecources] = useState([]);

  const fetchResource = async () => {
    const response = await jsonPlaceholder.get(`/${resource}`);
    setRecources(response.data);
  };

  useEffect(() => {
    fetchResource(resource);
  }, [resource]);

  return resources;
};

export default useResources;
