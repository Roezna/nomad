import { NextApiRequest, NextApiResponse } from "next";
import { hotels } from "../../../shared/constants/hotels";
import { Hotel } from "../../../shared/types";

export default function availability(
  _req: NextApiRequest,
  res: NextApiResponse
): void {
  const details: Hotel[] = [
    {
      ...hotels.urban,
    },
    {
      ...hotels.tribe,
    },
    {
      ...hotels.family,
    },
  ];
  res.status(200).json(details);
}
