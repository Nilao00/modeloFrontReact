import React from "react";
import { Pages } from "./style";

interface Props {
  postsPerPage: number;
  totalPosts: number;
  paginate(pagenumbers: number): void;
}
const Paginate: React.FC<Props> = ({ postsPerPage, totalPosts, paginate }) => {
  const pagenumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pagenumbers.push(i);
  }
  console.log(pagenumbers)
  return (
    <div>
      <nav>
        <Pages>
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
        </Pages>
      </nav>
    </div>
  );
};
export default Paginate;
