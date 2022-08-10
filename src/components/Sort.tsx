import React from 'react';

export const Sort = ({ sortList }) => {
  return (
    <>
      <div className="col-4 col-sm-4 col-lg-6">
        <button type="button" className="btn btn-light sort-button" onClick={() => sortList(1)}>-</button>
        <button type="button" className="btn btn-light sort-button" onClick={() => sortList(2)}>+</button>
      </div>
    </>
  );
};