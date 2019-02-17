const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://127.0.0.1/myapp",
  {
    useNewUrlParser: true
  },
  (err, result) => {
    if (err) {
      throw err;
    }
    console.log("connected to database");
  }
);
var Schema = mongoose.Schema;

var blogSchema = new Schema({
  title: String,
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: {
    type: Date,
    default: Date.now
  },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
});

var Blog = mongoose.model("Blog", blogSchema);
