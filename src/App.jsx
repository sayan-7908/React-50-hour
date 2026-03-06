import Greeting from "./components/Greeting";
import UserStatus from "./components/UserStatus";
import Weather from "./components/Weather";

const App = () => {
  return (
    <div>
      <Weather temperature={20} />
      <UserStatus loggedIn={true} isadmin={true} />
      <Greeting timeOfDay="morning" />
    </div>
  );
};

export default App;
