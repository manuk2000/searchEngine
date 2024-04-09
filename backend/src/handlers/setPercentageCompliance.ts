import { setPercentageForCompatibility } from "../search/Search";
import { Request, Response } from "express";

function setPercentageCompliance(req: Request, res: Response) {
  // Extract the percentage value from the query parameters
  const percentage: number = Number(req.query.percentage);
  // Check if the provided percentage is a valid number
  if (!isFinite(percentage)) {
    res.status(400).send("Percentage must be a number.");
    return;
  }

  // Call setPercentageForCompatibility with the extracted percentage value
  setPercentageForCompatibility(percentage);

  // Send a response indicating success
  res.send("Percentage set successfully.");
}
export default setPercentageCompliance;
