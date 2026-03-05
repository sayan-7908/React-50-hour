const ProductList = () => {
  const products = [
    { id: 1, name: "phone", price: "$699" },
    { id: 2, name: "laptop", price: "$1200" },
    { id: 3, name: "headphones", price: "$199" },
  ];

  return (
    <div>
      {products.map((item) => (
        <div key={item.id}>
          <h1>Name: {item.name}</h1>
          <h1>Price: {item.price}</h1>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
