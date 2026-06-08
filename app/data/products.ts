export interface ProductSpecification {
  label: string;
  value: string;
}

export interface ProductVariety {
  name: string;
  image: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  image: string;
  badge?: string;
  description: string;
  fullDescription: string;
  features: string[];
  specifications: ProductSpecification[];
  moq: string; // Minimum Order Quantity
  origin: string;
  packaging: string[];
  varieties?: ProductVariety[];
}

export const products: Product[] = [
  {
    id: "basmati-rice",
    name: "Basmati Rice",
    image: "/images/basmati_rice.png",
    badge: "Best Seller",
    description:
      "Long-grain, aromatic perfection. Known for its distinct flavor and fluffy texture.",
    fullDescription: "Pearl Logistics brings you the finest Basmati Rice, sourced directly from the fertile foothills of the Himalayas. Our Basmati is characterized by its extra-long grains, delicate aroma, and sweet taste. Each grain is aged to perfection to ensure non-sticky, fluffy results after cooking. Perfect for biryanis, pulaos, and gourmet dishes, our Basmati rice sets the standard for quality and authenticity in the global market.",
    features: [
      "Extra-long grain (8.35mm+)",
      "Aged for 12-24 months for enhanced aroma",
      "Non-GMO and pesticide-free",
      "Silky smooth texture",
      "100% Sortex cleaned"
    ],
    specifications: [
      { label: "Moisture", value: "12% Max" },
      { label: "Broken Grain", value: "1% Max" },
      { label: "Damage/Discolour", value: "0.5% Max" },
      { label: "Foreign Matter", value: "Nil" },
      { label: "Purity", value: "95%" },
      { label: "Admixture", value: "5% Max" },
    ],
    moq: "20 Metric Tons (1 Container)",
    origin: "India (Punjab/Haryana region)",
    packaging: ["5kg", "10kg", "25kg", "50kg (PP/Jute/Non-Woven)"],
    varieties: [
      {
        name: "1121 Sella Basmati Rice",
        image: "/Basmati Rice/1121 Sella Basmati Rice.png",
        description: "World's longest grain rice with excellent cooking properties and aroma."
      },
      {
        name: "1509 Golden Sella Rice",
        image: "/Basmati Rice/1509 Golden Sella Rice.png",
        description: "Premium quality parboiled rice with golden hue and non-sticky texture."
      },
      {
        name: "Traditional Raw Basmati",
        image: "/Basmati Rice/Traditional Raw Basmati.png",
        description: "Authentic raw basmati rice aged naturally for maximum fragrance."
      }
    ]
  },
  {
    id: "normal-rice",
    name: "Normal Rice (Non-Basmati)",
    image: "/images/normal_rice.png",
    description:
      "High-quality, versatile daily rice. Milled for maximum nutrition and consistency.",
    fullDescription: "Our Non-Basmati Rice varieties are selected for their excellent cooking properties and nutritional value. From long-grain white rice to parboiled varieties, we provide high-quality grains that are staples in kitchens worldwide. Processed in state-of-the-art milling facilities, our rice undergoes rigorous quality checks to ensure it is free from impurities and consistent in size and texture.",
    features: [
      "Premium milled quality",
      "High nutritional value",
      "Consistent grain size",
      "Great for daily consumption",
      "Cost-effective premium grade"
    ],
    specifications: [
      { label: "Moisture", value: "14% Max" },
      { label: "Broken Grain", value: "5%, 10%, 25% (As per requirement)" },
      { label: "Damage/Discolour", value: "1% Max" },
      { label: "Foreign Matter", value: "0.5% Max" },
      { label: "Sortex", value: "100% Cleaned" },
    ],
    moq: "25 Metric Tons",
    origin: "India",
    packaging: ["25kg", "50kg (PP Bags)"],
    varieties: [
      {
        name: "IR-64 Long Grain Rice",
        image: "/Rice/IR‑64 Long Grain Rice.png",
        description: "Popular long-grain variety known for its affordability and taste."
      },
      {
        name: "Sona Masoori Rice",
        image: "/Rice/Sona Masoori Rice.png",
        description: "Medium-grain, aromatic rice widely used in South Indian cuisine."
      },
      {
        name: "PR-11 Non-Basmati Rice",
        image: "/Rice/PR-11 Non-Basmati Rice.png",
        description: "Premium long-grain non-basmati rice with great nutritional value."
      }
    ]
  },
  {
    id: "wheat",
    name: "Premium Wheat",
    image: "/images/wheat_grains.png",
    description:
      "Rich, golden wheat kernels sourced from the finest farms. Perfect for high-quality flour.",
    fullDescription: "Pearl Logistics exports premium grade Wheat (Triticum aestivum) characterized by high protein content and superior milling quality. Our wheat is sourced from the breadbasket regions of India, where ideal climatic conditions produce plump, golden kernels. It is perfect for producing high-quality flour used in bread, pasta, and various traditional flatbreads. We ensure the wheat is cleaned and graded to meet international phytosanitary standards.",
    features: [
      "High gluten/protein content",
      "Golden, plump kernels",
      "Export-grade certified",
      "Low moisture content",
      "Free from live insects"
    ],
    specifications: [
      { label: "Protein", value: "11.5% - 13% Min" },
      { label: "Moisture", value: "12% Max" },
      { label: "Test Weight", value: "78 kg/hl Min" },
      { label: "Foreign Matter", value: "1% Max" },
      { label: "Falling Number", value: "300 sec Min" },
      { label: "Gluten (Wet)", value: "26% Min" },
    ],
    moq: "50 Metric Tons",
    origin: "India (Madhya Pradesh/Rajasthan)",
    packaging: ["50kg (PP Bags)", "Bulk in Containers"],
    varieties: [
      {
        name: "Sharbati Wheat",
        image: "/Wheat/Sharbati Wheat.png",
        description: "Premium quality wheat from MP, known for making softest rotis."
      },
      {
        name: "Durum Wheat",
        image: "/Wheat/Durum Wheat.png",
        description: "Hard wheat variety perfect for pasta and semolina production."
      },
      {
        name: "Milling Grade Wheat",
        image: "/Wheat/Milling Grade Wheat.png",
        description: "High-protein wheat suitable for commercial bread and flour mills."
      }
    ]
  },
  {
    id: "red-lentils",
    name: "Red Lentils (Masoor)",
    image: "/images/red_lentils.png",
    badge: "New",
    description:
      "Vibrant, protein-rich lentils with a quick-cook advantage. A global culinary staple.",
    fullDescription: "Pearl Logistics offers premium quality Red Lentils (Masoor Dal), one of the most widely consumed pulses across South Asia, the Middle East, and Europe. Known for their bright orange-red hue and earthy flavour, our red lentils are carefully cleaned, sortex-processed, and graded to ensure uniformity. Rich in protein, iron, and dietary fibre, they are a nutritional powerhouse that cooks quickly without pre-soaking. Ideal for soups, stews, dals, and a variety of international dishes.",
    features: [
      "High protein content (25%+)",
      "Quick-cook — no soaking required",
      "100% Sortex cleaned & graded",
      "Rich in iron and dietary fibre",
      "Non-GMO and naturally processed"
    ],
    specifications: [
      { label: "Moisture", value: "13% Max" },
      { label: "Protein", value: "25% Min" },
      { label: "Broken/Split", value: "2% Max" },
      { label: "Foreign Matter", value: "0.5% Max" },
      { label: "Admixture", value: "1% Max" },
      { label: "Purity", value: "98% Min" },
    ],
    moq: "20 Metric Tons",
    origin: "India (Madhya Pradesh/Uttar Pradesh)",
    packaging: ["25kg", "50kg (PP Bags)", "Custom Retail Packs"],
    varieties: [
      {
        name: "Whole Masoor (Brown Lentil)",
        image: "/Pulses/Whole Masoor.png",
        description: "Unpolished whole lentils with a robust earthy flavour and high fibre content."
      },
      {
        name: "Split Masoor Dal (Red)",
        image: "/Pulses/Split Masoor Dal.png",
        description: "Hulled and split red lentils that cook in minutes, perfect for soups and dals."
      },
      {
        name: "Polished Masoor Dal",
        image: "/Pulses/Polished Masoor Dal.png",
        description: "Machine-polished split lentils with a bright colour and clean, mild taste."
      }
    ]
  },

  {
    id: "chickpeas",
    name: "Chickpeas (Chana)",
    image: "/images/chickpeas.png",
    badge: "New",
    description:
      "Hearty, versatile legumes packed with protein. The cornerstone of cuisines worldwide.",
    fullDescription: "Pearl Logistics exports premium quality Chickpeas (Cicer arietinum), also known as Chana or Garbanzo Beans, sourced from the fertile plains of Rajasthan and Madhya Pradesh. Our chickpeas are bold, round, and uniformly sized, machine-cleaned and graded to the highest export standards. Rich in plant-based protein, complex carbohydrates, and essential minerals, they are a vital ingredient in hummus, curries, salads, and snacks across the globe. We supply both Desi (brown) and Kabuli (white) varieties to cater to diverse market demands.",
    features: [
      "High protein & fibre content",
      "Bold, uniform grain size",
      "Machine cleaned & sortex processed",
      "Available in Desi & Kabuli varieties",
      "Export-grade phytosanitary compliance"
    ],
    specifications: [
      { label: "Moisture", value: "12% Max" },
      { label: "Protein", value: "20% Min" },
      { label: "Foreign Matter", value: "0.5% Max" },
      { label: "Admixture", value: "2% Max" },
      { label: "Broken", value: "1% Max" },
      { label: "Purity", value: "98% Min" },
    ],
    moq: "25 Metric Tons",
    origin: "India (Rajasthan/Madhya Pradesh)",
    packaging: ["25kg", "50kg (PP/Jute Bags)", "Custom Bulk"],
    varieties: [
      {
        name: "Kabuli Chana (White Chickpea)",
        image: "/Pulses/Kabuli Chana.png",
        description: "Large, cream-coloured chickpeas ideal for hummus, salads, and Middle Eastern dishes."
      },
      {
        name: "Desi Chana (Brown Chickpea)",
        image: "/Pulses/Desi Chana.png",
        description: "Smaller, darker chickpeas with a stronger flavour, widely used in Indian curries."
      },
      {
        name: "Green Chickpeas",
        image: "/Pulses/Green Chickpeas.png",
        description: "Fresh-dried green chickpeas with a sweeter taste, popular as a healthy snack."
      }
    ]
  },

  {
    id: "chana-dal",
    name: "Split Peas (Chana Dal)",
    image: "/images/chana_dal.png",
    badge: "New",
    description:
      "Nutty, golden split peas with a rich texture. A beloved staple in South Asian cooking.",
    fullDescription: "Pearl Logistics supplies premium Chana Dal (Split Chickpeas / Bengal Gram Dal), produced by dehusking and splitting Desi chickpeas to reveal their golden, nutty interior. It is one of the most popular lentils in South Asian cuisine, prized for its rich, slightly sweet flavour and firm texture that holds up well in cooking. Our Chana Dal is sortex cleaned, machine graded, and packed hygienically to retain freshness. With a low glycaemic index and high protein content, it is a favourite choice for health-conscious consumers and food manufacturers globally.",
    features: [
      "Low glycaemic index — diabetic-friendly",
      "Rich, nutty flavour & firm texture",
      "High protein & fibre",
      "100% Sortex cleaned & machine graded",
      "Consistent golden-yellow colour"
    ],
    specifications: [
      { label: "Moisture", value: "12% Max" },
      { label: "Protein", value: "22% Min" },
      { label: "Broken/Powder", value: "2% Max" },
      { label: "Foreign Matter", value: "0.5% Max" },
      { label: "Admixture", value: "1% Max" },
      { label: "Purity", value: "98% Min" },
    ],
    moq: "20 Metric Tons",
    origin: "India (Rajasthan/Maharashtra)",
    packaging: ["25kg", "50kg (PP Bags)", "1kg & 2kg Retail Packs"],
    varieties: [
      {
        name: "Bold Chana Dal",
        image: "/Pulses/Bold Chana Dal.png",
        description: "Large-sized split chickpeas with a pronounced nutty aroma, ideal for snacks and dals."
      },
      {
        name: "Medium Chana Dal",
        image: "/Pulses/Medium Chana Dal.png",
        description: "Standard-grade split peas, perfect for everyday cooking and food processing."
      },
      {
        name: "Besan (Chickpea Flour Grade)",
        image: "/Pulses/Besan Grade Chana.png",
        description: "Fine-milling grade Chana Dal, specifically selected for producing high-quality besan."
      }
    ]
  },

  {
    id: "beans",
    name: "Beans (Rajma, Moong)",
    image: "/images/beans.png",
    badge: "New",
    description:
      "Premium dried beans packed with nutrition. From robust Rajma to delicate Moong.",
    fullDescription: "Pearl Logistics exports a diverse range of premium dried beans, including hearty Rajma (Kidney Beans) and versatile Moong Beans (Mung Beans). Rajma, with its deep red colour and creamy texture, is a cornerstone of North Indian cuisine and is gaining global popularity as a nutritious meat substitute. Moong beans, available whole or split, are celebrated for their digestibility and quick-cooking properties. All our beans are carefully cleaned, sorted, and graded to meet international food safety standards, making them suitable for retail, food service, and industrial use worldwide.",
    features: [
      "High plant-based protein source",
      "Available whole & split varieties",
      "Machine cleaned & Sortex processed",
      "Free from pesticide residues",
      "Consistent size and colour grading"
    ],
    specifications: [
      { label: "Moisture", value: "13% Max" },
      { label: "Protein", value: "22-24% Min" },
      { label: "Foreign Matter", value: "0.5% Max" },
      { label: "Admixture", value: "2% Max" },
      { label: "Broken", value: "1% Max" },
      { label: "Purity", value: "98% Min" },
    ],
    moq: "20 Metric Tons",
    origin: "India (Uttar Pradesh/Rajasthan/Andhra Pradesh)",
    packaging: ["25kg", "50kg (PP/Jute Bags)", "Custom Retail Packs"],
    varieties: [
      {
        name: "Rajma (Dark Red Kidney Beans)",
        image: "/Pulses/Rajma Dark Red.png",
        description: "Bold, dark red kidney beans with a hearty flavour, ideal for rich curries and stews."
      },
      {
        name: "Rajma (Light Red Kidney Beans)",
        image: "/Pulses/Rajma Light Red.png",
        description: "Lighter, speckled kidney beans with a milder taste, popular in international markets."
      },
      {
        name: "Whole Moong (Green Gram)",
        image: "/Pulses/Whole Moong.png",
        description: "Small, green mung beans prized for sprouting, soups, and Asian cuisines."
      },
      {
        name: "Moong Dal (Yellow Split Mung)",
        image: "/Pulses/Moong Dal.png",
        description: "Hulled and split mung beans with a delicate flavour and fast cook time."
      }
    ]
  },
];