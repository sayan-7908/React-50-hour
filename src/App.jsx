import Person from "./components/Person";
import Product from "./components/Product";

const App = () => {
  return (
    <div>
      <Person name="sayan" age={20} />
      <Product name="Iphone" price="$500" />
    </div>
  );
};

export default App;
