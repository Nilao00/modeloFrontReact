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

  function paginate(pageNumber: number) {
    setCurrentPage(pageNumber);
  }

  function nextPage() {
    setCurrentPage(currentPage + 1);
  }

  function prevPage() {
    setCurrentPage(currentPage - 1);
  }

  return (
    <LoadingView
      paginate={paginate}
      currentPosts={currentPosts}
      currentPage={currentPage}
      prevPage={prevPage}
      nextPage={nextPage}
    />
  );
};

export default ContainerLoadingTask;
