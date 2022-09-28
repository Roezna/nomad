import { NextApiRequest, NextApiResponse } from "next";
import { hotels } from "../../shared/constants/hotels";
import { Hotel, Phrase } from "../../shared/types";

type Data = {
  heroUrl: string;
  heroText: string;
  phrase: Phrase;
  hotels: {
    title: string;
    description: string;
    hotelsToShow: Hotel[];
  };
};

export default function home(_req: NextApiRequest, res: NextApiResponse): void {
  const content: Data = {
    heroUrl: "hero.png",
    heroText: "Tu tribu te espera",
    phrase: {
      content:
        "Un hogar con espacio para coworkear, conectarte con aventuras locales y personas increíbles.",
      highlight: "aventuras locales",
    },
    hotels: {
      title: "Hoteles que son hogares",
      description:
        "Siéntete parte de la tribu en un ambiente diseñado para que experimentes el viaje que va a cambiar algo en ti.",
      hotelsToShow: [
        {
          ...hotels.urban,
        },
        {
          ...hotels.tribe,
        },
        {
          ...hotels.family,
        },
      ],
    },
  };
  res.status(200).json(content);
}
