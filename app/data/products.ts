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
];
