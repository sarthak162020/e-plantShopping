import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

const products = [
  {
    id: 1,
    name: "Aloe Vera",
    price: 10,
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    category: "Indoor Plants"
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 15,
    image: "https://images.unsplash.com/photo-1598887142487-3e0d6b8c8c9f",
    category: "Indoor Plants"
  },
  {
    id: 3,
    name: "Peace Lily",
    price: 18,
    image: "https://images.unsplash.com/photo-1524594157368-3a7a7b4a6e3d",
    category: "Indoor Plants"
  },
  {
    id: 4,
    name: "Rose Plant",
    price: 20,
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    category: "Outdoor Plants"
  },
  {
    id: 5,
    name: "Tulip",
    price: 22,
    image: "https://images.unsplash.com/photo-1524594157368-3a7a7b4a6e3d",
    category: "Outdoor Plants"
  },
  {
    id: 6,
    name: "Cactus",
    price: 12,
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb",
    category: "Succulents"
  }
];

function ProductList() {
  const dispatch = useDispatch();

  const categories = [...new Set(products.map(p => p.category))];

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Our Plant Collection</h1>

      {categories.map((category) => (
        <div key={category} style={{ marginBottom: "40px" }}>
          <h2>{category}</h2>

          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {products
              .filter((product) => product.category === category)
              .map((product) => (
                <div
                  key={product.id}
                  style={{
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    padding: "15px",
                    width: "200px",
                    textAlign: "center"
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      width: "100%",
                      height: "150px",
                      objectFit: "cover"
                    }}
                  />
                  <h3>{product.name}</h3>
                  <p>${product.price}</p>
                  <button
                    onClick={() => handleAddToCart(product)}
                    style={{
                      padding: "8px 12px",
                      backgroundColor: "#4CAF50",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer"
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
