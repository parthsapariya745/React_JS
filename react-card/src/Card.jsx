function Card() {
  let products = [
    {
      id: 1,
      image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MQTQ3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=dkp4djAxbnA1NnpYWDIvVklnLzRpUWtuVHYzMERCZURia3c5SzJFOTlPZ3oveDdpQVpwS0ltY2w2UW05aU90T1lYTmlwOFY3ZXdFd0FRY2dWaUc5UlE',
      name: "Wireless Headphones",
      brand: "Sony",
      price: 4499,
      currency: "INR",
      category: "Electronics",
      rating: 4.6,
      stock: 35,
      description: "ANC over-ear headphones with 30h battery life and quick charge.",
      returnPolicy: "7 Days Replacement",
      tags: ["audio", "bluetooth", "anc"],
    },
    {
      id: 2,
      image: 'https://www.jiomart.com/images/product/original/469615583_whiteandmaroon/men-floral-print-twill-slim-fit-shirt-model-469615583_whiteandmaroon-0-202404151622.jpg?im=Resize=(500,630)',
      name: "Men's Cotton Shirt",
      brand: "Peter England",
      price: 699,
      currency: "INR",
      category: "Clothing",
      rating: 4.2,
      stock: 120,
      description: "Slim-fit 100% cotton shirt for formal and casual wear.",
      returnPolicy: "10 Days Return",
      tags: ["mens", "formal", "cotton"],
    },
    {
      id: 3,
      image: 'https://giftcentre.co.in/wp-content/uploads/2022/12/WhatsApp-Image-2023-08-04-at-11.17.13-1.jpeg',
      name: "Smartphone Stand",
      brand: "Spigen",
      price: 149,
      currency: "INR",
      category: "Accessories",
      rating: 4.4,
      stock: 220,
      description: "Adjustable aluminum stand for phones and small tablets.",
      returnPolicy: "15 Days Return",
      tags: ["desk", "holder", "aluminum"],
    },
    {
      id: 4,
      image: 'https://bergnerhome.in/cdn/shop/files/BGIN-6565-1.jpg?v=1736093998',
      name: "Stainless Steel Water Bottle",
      brand: "Milton",
      price: 599,
      currency: "INR",
      category: "Home & Kitchen",
      rating: 4.5,
      stock: 80,
      description: "Insulated bottle keeps drinks cold 24h, hot 12h.",
      returnPolicy: "7 Days Return",
      tags: ["bottle", "insulated", "steel"],
    },
    {
      id: 5,
      image: 'https://rukminim2.flixcart.com/image/704/844/xif0q/shoe/p/x/p/-original-imagxe2gr3qrhmyf.jpeg?q=90&crop=false',
      name: "Running Shoes",
      brand: "Nike",
      price: 3999,
      currency: "INR",
      category: "Footwear",
      rating: 4.3,
      stock: 42,
      description: "Lightweight trainers with breathable mesh and cushioned sole.",
      returnPolicy: "14 Days Return",
      tags: ["sports", "mesh", "cushion"],
    },
    {
      id: 6,
      image: 'https://artstreet.in/cdn/shop/files/51gFX46ujTL._SL1000_695x695_f99973ec-ddb9-4939-87f9-1a3cad4ff056_695x695.jpg?v=1684235358',
      name: "LED Desk Lamp",
      brand: "Wipro",
      price: 1299,
      currency: "INR",
      category: "Lighting",
      rating: 4.1,
      stock: 95,
      description: "Dimmable LED lamp with 3 color modes and USB power.",
      returnPolicy: "10 Days Return",
      tags: ["study", "LED", "dimmable"],
    },
    {
      id: 7,
      image: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/6/3/63f7fa212939_Grey_5.jpg?rnd=20200526195200&tr=w-512',
      name: "Backpack 25L",
      brand: "Wildcraft",
      price: 1299,
      currency: "INR",
      category: "Bags",
      rating: 4.4,
      stock: 60,
      description: "25L everyday backpack with laptop sleeve and water resistance.",
      returnPolicy: "10 Days Return",
      tags: ["laptop", "daily", "water-resistant"],
    },
    {
      id: 8,
      image: 'https://www.jiomart.com/images/product/original/493837009/home-one-non-stick-aluminium-induction-base-fry-pan-28-cm-product-images-o493837009-p608465371-0-202403152018.jpg?im=Resize=(1000,1000)',
      name: "Non-stick Frying Pan 28cm",
      brand: "Prestige",
      price: 1399,
      currency: "INR",
      category: "Home & Kitchen",
      rating: 4.2,
      stock: 150,
      description: "PFOA-free non-stick pan compatible with gas and induction.",
      returnPolicy: "7 Days Return",
      tags: ["cookware", "non-stick", "induction"],
    },
    {
      id: 9,
      image: 'https://images.price.tools/images/cmf-33w-type-c-power-fast-m-qgEe0kqs.jpg',
      name: "USB-C Fast Charger 33W",
      brand: "Xiaomi",
      price: 999,
      currency: "INR",
      category: "Electronics",
      rating: 4.6,
      stock: 200,
      description: "PD + QC fast charger with detachable USB-C cable.",
      returnPolicy: "7 Days Replacement",
      tags: ["charger", "fast-charge", "usb-c"],
    },
    {
      id: 10,
      image: 'https://m.media-amazon.com/images/I/81bBfD-P5BL._UF894,1000_QL80_.jpg',
      name: "Cotton Bedsheet (Queen)",
      brand: "Bombay Dyeing",
      price: 1699,
      currency: "INR",
      category: "Home & Living",
      rating: 4.0,
      stock: 70,
      description: "300 TC cotton bedsheet with 2 pillow covers, fade-resistant.",
      returnPolicy: "15 Days Return",
      tags: ["bedding", "cotton", "queen"],
    },
  ];

  return (
    <div className="card-box">
      {products.map((e, i) => {
        return (
           <div className="card" key={i}>
            <div className="img-box">
              <img src={e.image} alt={e.name} />
            </div>
            <div className="content">
              <h2>{e.name}</h2>
              <p className="brand">{e.brand}</p>
              <p className="price">₹ {e.price}</p>
              <p className="desc">{e.description}</p>
              <p className="rating">⭐ {e.rating}</p>
              <p className="return">{e.returnPolicy}</p>
              <button className="btn">Add to Cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;