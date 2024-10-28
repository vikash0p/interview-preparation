export interface ProductProps {
  id: number; // Unique identifier for the product
  name: string; // Name of the product
  price: number; // Price of the product
  description: string; // Description of the product
  imageUrl: string; // URL of the product image
  category: string; // Category of the product (e.g., Earrings, Bracelets)
  inStock: boolean; // Availability of the product in stock
}

export const products: ProductProps[] = [
  {
    id: 1,
    name: "Gold Plated Hoop Earrings",
    price: 29.99,
    description: "Stylish gold plated hoop earrings perfect for any occasion.",
    imageUrl:
      "https://cdn.pixabay.com/photo/2023/08/24/00/58/horse-8209533_1280.jpg",
    category: "Earrings",
    inStock: true,
  },
  {
    id: 2,
    name: "Silver Charm Bracelet",
    price: 49.99,
    description: "A beautiful silver charm bracelet with customizable charms.",
    imageUrl:
      "https://cdn.pixabay.com/photo/2024/09/27/09/03/bird-9078403_640.jpg",
    category: "Bracelets",
    inStock: true,
  },
  {
    id: 3,
    name: "Diamond Engagement Ring",
    price: 999.99,
    description: "Elegant diamond engagement ring with a classic design.",
    imageUrl:
      "https://cdn.pixabay.com/photo/2024/10/17/16/14/waterfall-9128051_640.jpg",
    category: "Rings",
    inStock: false,
  },
  {
    id: 4,
    name: "Pearl Necklace",
    price: 89.99,
    description:
      "Classic pearl necklace, a timeless addition to your jewelry collection.",
    imageUrl:
      "https://cdn.pixabay.com/photo/2024/02/27/15/17/tree-frog-8600329_640.jpg",
    category: "Necklaces",
    inStock: true,
  },
  {
    id: 5,
    name: "Sterling Silver Pendant",
    price: 39.99,
    description: "Delicate sterling silver pendant for everyday wear.",
    imageUrl:
      "https://cdn.pixabay.com/photo/2024/09/19/07/30/horses-9057949_640.jpg",
    category: "Necklaces",
    inStock: true,
  },
  {
    id: 6,
    name: "Rose Gold Stackable Rings",
    price: 24.99,
    description: "Set of three rose gold stackable rings for a trendy look.",
    imageUrl:
      "https://cdn.pixabay.com/photo/2023/05/28/09/21/south-tyrol-8023213_640.jpg",
    category: "Rings",
    inStock: true,
  },
  {
    id: 7,
    name: "Vintage Brooch",
    price: 35.99,
    description: "Antique-style brooch to add a touch of vintage charm.",
    imageUrl:
      "https://cdn.pixabay.com/photo/2022/11/25/09/33/car-7615816_640.jpg",
    category: "Brooches",
    inStock: true,
  },
  {
    id: 8,
    name: "Gemstone Drop Earrings",
    price: 44.99,
    description: "Elegant drop earrings featuring colorful gemstones.",
    imageUrl:
      "https://cdn.pixabay.com/photo/2023/11/07/06/52/forest-8371211_640.jpg",
    category: "Earrings",
    inStock: true,
  },
  {
    id: 9,
    name: "Leather Wrap Bracelet",
    price: 19.99,
    description: "Stylish leather wrap bracelet for a casual look.",
    imageUrl:
      "https://cdn.pixabay.com/photo/2022/11/24/21/25/oak-7615084_640.jpg",
    category: "Bracelets",
    inStock: true,
  },
  {
    id: 10,
    name: "Cubic Zirconia Studs",
    price: 14.99,
    description: "Simple yet elegant cubic zirconia stud earrings.",
    imageUrl:
      "https://cdn.pixabay.com/photo/2023/08/19/19/12/leaves-8201050_640.jpg",
    category: "Earrings",
    inStock: true,
  },
  {
    id: 11,
    name: "Turquoise Beaded Necklace",
    price: 39.99,
    description: "Stunning turquoise beaded necklace for a pop of color.",
    imageUrl:
      "https://cdn.pixabay.com/photo/2022/12/01/04/43/girl-7628308_640.jpg",
    category: "Necklaces",
    inStock: true,
  },
  {
    id: 12,
    name: "Infinity Ring",
    price: 59.99,
    description: "Stylish infinity ring, a symbol of everlasting love.",
    imageUrl:
      "https://cdn.pixabay.com/photo/2023/09/03/15/16/rofous-8230881_640.jpg",
    category: "Rings",
    inStock: true,
  },
  {
    id: 13,
    name: "Personalized Name Necklace",
    price: 49.99,
    description: "Customizable name necklace, a perfect gift.",
    imageUrl:
      "https://cdn.pixabay.com/photo/2023/10/05/11/20/strawberries-8295645_640.jpg",
    category: "Necklaces",
    inStock: true,
  },
  {
    id: 14,
    name: "Classic Gold Watch",
    price: 199.99,
    description: "Timeless gold watch for men and women.",
    imageUrl:
      "https://cdn.pixabay.com/photo/2024/08/02/16/44/rose-8940207_640.jpg",
    category: "Watches",
    inStock: false,
  },
  {
    id: 15,
    name: "Amethyst Dangle Earrings",
    price: 54.99,
    description: "Beautiful amethyst dangle earrings for special occasions.",
    imageUrl:
      "https://cdn.pixabay.com/photo/2024/01/10/16/22/woman-8499959_640.jpg",
    category: "Earrings",
    inStock: true,
  },
  {
    id: 16,
    name: "Chunky Knit Bracelet",
    price: 24.99,
    description: "Trendy chunky knit bracelet, perfect for layering.",
    imageUrl:
      "https://cdn.pixabay.com/photo/2024/06/05/19/45/mountains-8811206_640.jpg",
    category: "Bracelets",
    inStock: true,
  },
  {
    id: 17,
    name: "Swarovski Crystal Ring",
    price: 79.99,
    description: "Sparkling Swarovski crystal ring, a true statement piece.",
    imageUrl:
      "https://cdn.pixabay.com/photo/2022/08/22/16/53/honey-bee-7404063_640.jpg",
    category: "Rings",
    inStock: true,
  },
  {
    id: 18,
    name: "Bamboo Hoop Earrings",
    price: 29.99,
    description: "Unique bamboo hoop earrings for a natural look.",
    imageUrl:
      "https://cdn.pixabay.com/photo/2023/11/28/21/35/ural-owl-8418249_640.jpg",
    category: "Earrings",
    inStock: true,
  },
  {
    id: 19,
    name: "Celestial Necklace Set",
    price: 79.99,
    description: "Gorgeous celestial-themed necklace set.",
    imageUrl:
      "https://cdn.pixabay.com/photo/2023/03/16/15/28/cactus-7856967_640.jpg",
    category: "Necklaces",
    inStock: true,
  },
  {
    id: 20,
    name: "Simple Chain Bracelet",
    price: 14.99,
    description: "Minimalist chain bracelet for everyday wear.",
    imageUrl:
      "https://cdn.pixabay.com/photo/2023/10/24/14/59/woman-8338390_640.jpg",
    category: "Bracelets",
    inStock: true,
  },
];
