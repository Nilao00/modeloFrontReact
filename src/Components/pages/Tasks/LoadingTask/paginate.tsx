import React, { useState } from "react";
import { Pages } from "./style";
import "./style.css";

interface Props {
  postsPerPage: number;
  totalPosts: number;
  currentPage: number;
  paginate(pagenumbers: number): void;
  prevPage(): void;
  nextPage(): void;
}

const Paginate: React.FC<Props> = ({
  postsPerPage,
  totalPosts,
  currentPage,
  paginate,
  nextPage,
  prevPage,
}) => {
  const pagenumbers: number[] = [];
  const maxVisibleButtons = 5;
  const totalPages = totalPosts / postsPerPage;

  let maxLeft = currentPage - Math.floor(maxVisibleButtons / 2);
  let maxRight = currentPage + Math.floor(maxVisibleButtons / 2);

  if (maxLeft < 1) {
    maxLeft = 1;
    maxRight = maxVisibleButtons;
  }

  if (maxRight > totalPages) {
    maxLeft = totalPages - (maxVisibleButtons - 1);
    maxRight = totalPages;

    if (maxLeft < 1) maxLeft = 1;
  }

  for (let page = maxLeft; page <= maxRight; page++) {
    pagenumbers.push(Math.ceil(page));
  }

  return (
    <div>
      <nav>
        <Pages
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {currentPage !== 1 && (
            <button className="buttonPrev" onClick={prevPage}>
              Anterior
            </button>
          )}
          {pagenumbers.map((item) => {
            return (
              <th
                onClick={() => paginate(item)}
                key={item}
                className="page-item"
              >
                <button
                  className="table-button"
                  style={{ background: currentPage === item && "red" }}
                >
                  {item}
                </button>
              </th>
            );
          })}
          {pagenumbers[pagenumbers.length - 1] !== currentPage &&
            pagenumbers.length > 0 && (
              <button className="buttonNext" onClick={nextPage}>
                Próximo
              </button>
            )}
        </Pages>
      </nav>
    </div>
  );
};
export default Paginate;
