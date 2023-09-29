// // For local environment
module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "STORE_DP",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

// for production
// module.exports = {
//     HOST: "containers-us-west-123.railway.app",
//     USER: "root",
//     PASSWORD: "vnjkTxc6RgHmqLIHdTRn",
//     DB: "railway",
//     dialect: "mysql",
//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000,
//     },
//   };
