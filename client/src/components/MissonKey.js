import React, { Component } from "react";
export default function MissonKey() {
  return (
    <div className="m-2 p-2">
      <p>
        <span className="px-3 mr-2 bg-success" /> = Thành công
      </p>
      <p>
        <span className="px-3 mr-2 bg-danger" /> = Thất bại
      </p>
    </div>
  );
}
