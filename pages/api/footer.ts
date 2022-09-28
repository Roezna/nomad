import { NextApiRequest, NextApiResponse } from "next";
import { Links, Phrase } from "../../shared/types";

type Data = {
  textSEO: string;
  phoneNumber: string;
  email?: string;
  links: Links[];
  socialMedia: Links[];
  phrase: Phrase;
};

export default function footer(
  _req: NextApiRequest,
  res: NextApiResponse
): void {
  const data: Data = {
    textSEO:
      "Here we should have a few words about what and who the company is. This should serve well for SEO purposes.",
    phoneNumber: "(054) 1234567",
    email: "info@nomadperu.com.pe",
    links: [
      { name: "Alojate", source: "#" },
      { name: "Co-work", source: "#" },
      { name: "Experimenta", source: "#" },
      { name: "Unete", source: "#" },
      { name: "Inversores", source: "#" },
    ],
    socialMedia: [
      { name: "youtube", source: "#" },
      { name: "facebook", source: "#" },
      { name: "twitter", source: "#" },
      { name: "instagram", source: "#" },
    ],
    phrase: { content: "Gracias por scrollear :)" },
  };
  res.status(200).json(data);
}
