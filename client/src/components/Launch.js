import React, { Component, Fragment } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import classNames from "classnames";
import rocketLogo from "../icon-rocket.png";

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_date_local
      launch_success
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;

class Launch extends Component {
  state = {};
  render() {
    let { flight_number } = this.props.match.params;
    flight_number = parseInt(flight_number);
    console.log(flight_number);
    return (
      <Fragment>
        <Query query={LAUNCH_QUERY} variables={{ flight_number }}>
          {({ loading, error, data }) => {
            if (loading) return <h4 className="text-info">Loading ...</h4>;
            if (error) console.log(error);
            const {
              flight_number,
              mission_name,
              launch_year,
              launch_date_local,
              launch_success,
              rocket: { rocket_id, rocket_name, rocket_type }
            } = data.launch;
            console.log(data.launch);
            return (
              <div className="text-center">
                <h1>Tên nhiệm vụ : {mission_name}</h1>
                <p>
                  Phóng vào năm :{" "}
                  <Moment
                    className="badge badge-light text-dark p-1"
                    format="HH:mm DD-MM-YYYY"
                  >
                    {launch_date_local}
                  </Moment>{" "}
                </p>
                <p>
                  Status :{" "}
                  <span
                    className={
                      "badge p-1 badge-" +
                      classNames({
                        danger: !launch_success,
                        success: launch_success
                      })
                    }
                  >
                    {launch_success ? "Success" : "Failed"}
                  </span>
                </p>
                <div className="">
                  <img
                    src={rocketLogo}
                    width="45px"
                    height="auto"
                    className="img-fluid mb-3"
                  />
                  <br />
                  <span>Thông tin tên lửa :</span>
                  <div className="rocket-info">
                    <span>
                      Mã :{" "}
                      <span className="badge badge-warning">{rocket_id}</span>
                    </span>
                    <br />
                    <span>
                      Tên :{" "}
                      <span className="badge badge-warning">{rocket_name}</span>
                    </span>
                    <br />
                    <span>
                      Loại :{" "}
                      <span className="badge badge-warning">{rocket_type}</span>
                    </span>
                  </div>
                </div>
                <Link to="/" className="btn btn-secondary btn-sm mt-3">
                  Back home
                </Link>
              </div>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

export default Launch;
