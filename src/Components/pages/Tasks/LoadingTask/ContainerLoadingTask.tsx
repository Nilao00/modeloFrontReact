import React, { useState } from "react";

import LoadingView from "./";
import { useConfigContext } from "../../../../Context/taskContext";

const ContainerLoadingTask: React.FC = () => {
    
  const { task } = useConfigContext();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState(5);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFisrtPost = indexOfLastPost - postsPerPage;
  const currentPosts = task.slice(indexOfFisrtPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return <LoadingView paginate={paginate} currentPosts={currentPosts} />;
};

export default ContainerLoadingTask;
