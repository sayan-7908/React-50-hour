import IconComponent from "./components/IconComponent";
import ProfileCard from "./components/ProfileCard";
import StyledCard from "./components/StyledCard";
import { FaCartShopping } from "react-icons/fa6";

const App = () => {
  return (
    <div>
      <StyledCard />
      <ProfileCard />
      <FaCartShopping />
      <IconComponent />
    </div>
  );
};

export default App;
