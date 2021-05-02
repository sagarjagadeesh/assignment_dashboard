import React, { Component } from "react";
import "./Pagination.scss";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

class Pagination extends Component {
  render() {
    const {
      currentPage,
      totalPageCount,
      handleClick,
      hidePagination,
    } = this.props;
    let disablePrevious = currentPage === 1;
    let disableNext = totalPageCount === currentPage;
    return hidePagination ? (
      <div className="pagination-cont">
        <FaAngleLeft
          onClick={() => !disablePrevious && handleClick(currentPage - 1)}
          className="icons"
        />
        <div>Page - </div>
        <div>{currentPage}</div>
        <div>of</div>
        <div>{totalPageCount}</div>
        <FaAngleRight
          onClick={() => !disableNext && handleClick(currentPage + 1)}
          className="icons"
        />
      </div>
    ) : (
      <div className="pagination-cont search-cont">Searching data</div>
    );
  }
}

export default Pagination;

// const pageNumbers = [];
// for (let i = 1; i <= Math.ceil(all_modals?.length / todosPerPage); i++) {
//   pageNumbers.push(i);
// }

// const renderPageNumbers = pageNumbers.map((number) => {
//   return (
//     <Pagination.Item key={number} active={number === currentPage} onClick={() => this.handleClick(number)}>
//       {number}
//     </Pagination.Item>
//   );
// });
