import React, { Component } from "react";
import Lauches from "./components/Lauches";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Launches from "./components/Lauches";
import Launch from "./components/Launch";
import Info from "./components/Info";

const client = new ApolloClient({
  uri: "/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="container-fluid text-white">
            <div className="text-center mb-2">
              <h1 style={{ fontSize: "70px" }}>SpaceX</h1>
              <p>
                Tập đoàn Công nghệ Khai phá Không gian, viết tắt theo tiếng Anh
                SpaceX, là một công ty tư nhân về vận chuyển trong không gian có
                trụ sở tại Hawthorne, California. Công ty được thành lập năm
                2002 bởi Elon Musk, một trong những doanh nhân đã sáng lập công
                ty PayPal.
              </p>
              <Info />
              <hr className="bg-white p-0" />
            </div>
            <Switch>
              <Route exact path="/" component={Launches} />
              <Route exact path="/launch/:flight_number" component={Launch} />
            </Switch>
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
