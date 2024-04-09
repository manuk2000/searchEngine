import { Request, Response } from "express";
import { searching } from "../Main";

function searchHendler(req: Request, res: Response) {
  console.log(`target is ${req.query.target}`); // Use req.query to retrieve query parameters
  const target = req.query.target as string; // Extract the target parameter
  const found = searching(target); // Pass the target to your searching function
  // console.log(found);
  res.status(200).send(found);
}

export default searchHendler;
