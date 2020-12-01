import React from "react";
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
  const totalPages = totalPosts / postsPerPage;

  for (let i = 1; i <= Math.ceil(totalPages); i++) {
    if (i <= 5) {
      pagenumbers.push(i);
    }
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
                <button className="table-button">{item}</button>
              </th>
            );
          })}
          {totalPages > 1 &&
            pagenumbers[pagenumbers.length - 1] !== totalPages && (
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
