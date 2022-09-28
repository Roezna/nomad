import { NextApiRequest, NextApiResponse } from "next";

type Data = { name: string; source: string; items?: Data[] };

export default function nav(_req: NextApiRequest, res: NextApiResponse): void {
  const links: Data[] = [
    { name: "Alojate", source: "#" },
    { name: "Co-Work", source: "#" },
    {
      name: "Experimenta",
      source: "#",
      items: [
        { name: "City Host", source: "#" },
        { name: "Actividades", source: "#" },
        { name: "Gastronomía", source: "#" },
        { name: "Eventos", source: "#" },
      ],
    },
    { name: "Únete", source: "#" },
    { name: "English", source: "#" },
  ];
  res.status(200).json(links);
}
