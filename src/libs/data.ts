export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[]
};


export const productsData: Product[] = [
  {
    id: 1,
    title: "EcoLite Wireless Earbuds",
    description: "High-quality sound with noise cancellation and 24h battery life.",
    price: 59.99,
    images: [
      "https://picsum.photos/id/180/400/400",
      "https://picsum.photos/id/181/400/400",
    ],
  },
  {
    id:2,
    title: "Zenith Pro Mechanical Keyboard",
    description: "Durable RGB backlit mechanical keyboard for gamers and coders.",
    price: 89.5,
    images: [
      "https://picsum.photos/id/250/400/400",
      "https://picsum.photos/id/251/400/400",
    ],
  },
  {
    id:3,
    title: "AuraSmart Fitness Watch",
    description: "Track your workouts, heart rate, sleep cycles, and more.",
    price: 129.99,
    images: [
      "https://picsum.photos/id/1062/400/400",
      "https://picsum.photos/id/1063/400/400",
    ],
  },
  {
    id:4,
    title: "Luna Classic Sunglasses",
    description: "Stylish UV-protected sunglasses with anti-glare lenses.",
    price: 34.75,
    images: [
      "https://picsum.photos/id/1080/400/400",
      "https://picsum.photos/id/1081/400/400",
    ],
  },
  {
    id:5,
    title: "Orbit Smart Home Hub",
    description: "Central controller for all your smart home devices.",
    price: 149,
    images: [
      "https://picsum.photos/id/1057/400/400",
      "https://picsum.photos/id/1058/400/400",
    ],
  },
  {
    id:6,
    title: "Vinta Casual Sneakers",
    description: "Comfortable and breathable sneakers for everyday wear.",
    price: 49.95,
    images: [
      "https://picsum.photos/id/1025/400/400",
      "https://picsum.photos/id/1026/400/400",
    ],
  },
  {
    id:7,
    title: "Nova Ultra HD Monitor",
    description: "27″ 4K UHD display with vibrant colors and fast refresh rate.",
    price: 279.99,
    images: [
      "https://picsum.photos/id/179/400/400",
      "https://picsum.photos/id/178/400/400",
    ],
  },
  {
    id:8,
    title: "CaféBrew Espresso Maker",
    description: "Brew café-style espresso at home with a sleek design.",
    price: 99.49,
    images: [
      "https://picsum.photos/id/1084/400/400",
      "https://picsum.photos/id/1085/400/400",
    ],
  },
  {
    id:9,
    title: "Aurora Travel Backpack",
    description: "Lightweight, water-resistant backpack with multiple compartments.",
    price: 69.2,
    images: [
      "https://picsum.photos/id/1040/400/400",
      "https://picsum.photos/id/1041/400/400",
    ],
  },
  {
    id:10,
    title: "PixelMax Bluetooth Speaker",
    description: "Portable speaker with rich bass and 12h playtime.",
    price: 45,
    images: [
      "https://picsum.photos/id/1087/400/400",
      "https://picsum.photos/id/1088/400/400",
    ],
  },
];


