const Greeting = () => {
  const name = "sayan";
  const date = new Date();
  return (
    <div>
      <h1>hii {name}</h1>
      <p>Date: {date.getDate()}</p>
    </div>
  );
};

export default Greeting;
