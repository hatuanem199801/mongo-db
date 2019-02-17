import React, { Component, Fragment } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import LaunchItem from "./LaunchItem";
import MissonKey from "./MissonKey";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_year
      launch_date_local
      launch_success
    }
  }
`;

class Launches extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <MissonKey />
        <Query query={LAUNCHES_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <h4 className="text-info">Loading ...</h4>;
            if (error) console.log(error);
            return (
              <Fragment>
                {data.launches.map(launch => (
                  <LaunchItem launch={launch} key={launch.flight_number} />
                ))}
              </Fragment>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

export default Launches;
