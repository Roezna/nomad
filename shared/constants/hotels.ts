export const hotels = {
  urban: {
    title: "urban",
    description:
      "Social hub de alta experiencia, para millennials y zetas ejecutivos.",
    services: [
      { name: "Habitaciones VIP", reference: "room" },
      { name: "Piscina climatizada", reference: "pool" },
      { name: "Salón de eventos", reference: "bar" },
      { name: "Espacio coworking", reference: "coworking" },
      { name: "Wifi gratís", reference: "wifi" },
    ],
    priceNightFrom: 4560,
    image: { drawer: "urban.png", landing: "urban-landing.png" },
    location: "Arequipa",
    mainColor: "urban",
  },
  tribe: {
    title: "tribe",
    description:
      "Exploradores, artistas y emprendedores juntos en un lugar único.",
    services: [
      { name: "Habitaciones VIP", reference: "room" },
      { name: "Piscina", reference: "pool" },
      { name: "Gastronomía Vegana", reference: "food" },
      { name: "Wifi gratís", reference: "wifi" },
    ],
    priceNightFrom: 3190,
    image: { drawer: "tribe.png", landing: "tribe-landing.gif" },
    location: "Arequipa",
    mainColor: "androidGreen",
  },
  family: {
    title: "family",
    description:
      "Vive junto a toda tu familia la mejor experiencia de sus vidas.",
    services: [
      { name: "Habitaciones VIP", reference: "room" },
      { name: "Piscina climatizada", reference: "pool" },
      { name: "Actividades", reference: "games" },
      { name: "Spa", reference: "spa" },
      { name: "Wifi gratís", reference: "wifi" },
    ],
    priceNightFrom: 4560,
    image: { drawer: "family.png", landing: "family-landing.png" },
    location: "Arequipa",
    imageLanding: "family-landing.png",
    mainColor: "deepPurple",
  },
};
