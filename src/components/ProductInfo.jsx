const ProductInfo = () => {
  const Product = {
    name: "Laptop",
    price: 1500,
    availability: "In stock",
  };
  return (
    <div>
      <h1>Product Name: {Product.name}</h1>
      <h1>Product Price: ${Product.price}</h1>
      <h1>Product Availability: {Product.availability}</h1>
    </div>
  );
};

export default ProductInfo;
