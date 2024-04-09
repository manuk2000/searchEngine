// import express from "express";
// import cors from "cors";
// import setPercentageCompliance from "./handlers/setPercentageCompliance";
// import searchHendler from "./handlers/serchHendler";
//
// const app = express();
//
// // Enable CORS for all origins
// app.use(cors());
// app.use(express.json());
//
// app.get("/search", searchHendler);
//
// app.post("/setPercentageCompliance", setPercentageCompliance);
//
// app.listen(3000, () => {
//   console.log("Application started on port 3000!");
// });
import express from "express";
import cors from "cors";
import setPercentageCompliance from "./handlers/setPercentageCompliance";
import searchHendler from "./handlers/serchHendler";
import searchByRelationHendler from "./handlers/searchByRelationHendler";

const app = express();

// Enable CORS for all origins
app.use(cors());
app.use(express.json());

app.get("/searchByRelation", searchByRelationHendler);

app.get("/search", searchHendler);

app.post("/setPercentageCompliance", setPercentageCompliance);

app.listen(3000, () => {
  console.log("Application started on port 3000!");
});
