const UserStatus = ({ loggedIn, isadmin }) => {
  if (loggedIn && isadmin) {
    return <h1>welcome admin</h1>;
  } else if (loggedIn && !isadmin) {
    return <h1>welcome user</h1>;
  } else {
    return <h1>please log in!!</h1>;
  }
};

export default UserStatus;
