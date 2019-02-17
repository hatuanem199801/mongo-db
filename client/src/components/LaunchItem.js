import React, { Component } from "react";
import classNames from "classnames";
import Moment from "react-moment";
import { Link } from "react-router-dom";

export default function LaunchItem({
  launch: { flight_number, mission_name, launch_date_local, launch_success }
}) {
  return (
    <div className="col-md-4 launch">
      <div className="mb-3 p-2 bg-secondary">
        <p className="p-0 m-0">
          Tên nhiệm vụ :{" "}
          <span
            className={classNames({
              "text-success": launch_success,
              "text-danger": !launch_success
            })}
          >
            {mission_name}
          </span>
        </p>
        <p className="small p-0 m-0">
          Ngày phóng :{" "}
          <Moment
            className="badge badge-light text-dark p-1"
            format="HH:mm DD-MM-YYYY"
          >
            {launch_date_local}
          </Moment>
        </p>
        <hr className="my-1 bg-white" />
        <Link
          to={`/launch/${flight_number}`}
          className="badge badge-dark text-white text-right"
        >
          chi tiết
        </Link>
      </div>
    </div>
  );
}
