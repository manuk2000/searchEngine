import { searchByRelation } from "../MainForRelation";

function searchByRelationHendler(req, res) {
  const { type, id } = req.query;
  console.log(`targets are ${type}   ${id}`); // Use req.query to retrieve query parameters

  const found = searchByRelation(type, id);

  res.status(200).send(found);
}
export default searchByRelationHendler;
