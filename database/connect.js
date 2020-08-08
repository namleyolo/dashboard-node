const mongoose = require("mongoose")


const connect = mongoose.connect("mongodb://mongo:27017/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
mongoose.connection.on("error", err => {
  console.log("err", err)
})
mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected")
})

module.exports = connect;
