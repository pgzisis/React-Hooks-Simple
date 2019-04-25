import React from "react";
import useResources from "./useResources";

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);

  const renderList = resources => {
    return resources.map(record => <li key={record.id}>{record.title}</li>);
  };

  return <ul>{renderList(resources)}</ul>;
};

export default ResourceList;
