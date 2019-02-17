const express = require("express");
const graphqlHTTP = require("express-graphql");
const cors = require("cors");
const schema = require("./spacex/schema");
const path = require("path");

const app = express();

//allow cross-origin
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("server is running in ", PORT));
