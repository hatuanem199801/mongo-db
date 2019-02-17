const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

const url = "mongodb://127.0.0.1";

const dbName = "demo";

MongoClient.connect(url, (err, client) => {
  assert.equal(null, err);
  console.log("Connected to server ...");
  const db = client.db(dbName);
  //   insertDoucment(db, data => {
  //     console.log("data", data);
  //     client.close();
  //   });
  //   findCollection(db, data => {
  //     console.log(data);
  //     client.close();
  //   });
  //   updateDocument(db, data => {
  //     console.log(data);
  //     client.close();
  //   });
  //   removeDocument(db, data => {
  //     console.log(data);
  //     client.close();
  //   });
  indexCollection(db, data => {
    console.log(data);
    client.close();
  });
});

const insertDoucment = (db, callback) => {
  const collection = db.collection("documents");
  collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into collections");
    callback(result);
  });
};

const findCollection = (db, callback) => {
  const collection = db.collection("documents");
  collection.find({ a: 3 }).toArray((err, docs) => {
    assert.equal(err, null);
    console.log("found the records");
    callback(docs);
  });
};

const updateDocument = function(db, callback) {
  const collection = db.collection("documents");
  collection.updateOne({ a: 2 }, { $set: { b: 1 } }, (err, result) => {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    console.log("updated records with fileds a equal to 2");
    callback(result);
  });
};

const removeDocument = (db, callback) => {
  const collection = db.collection("documents");
  collection.deleteOne({ a: 3 }, (err, result) => {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    console.log("removed documents with fileds equal 3");
  });
};

const indexCollection = (db, callback) => {
  db.collection("documents").createIndex({ a: 3 }, null, (err, result) => {
    console.log(result);
    callback(result);
  });
};
