const UserList = () => {
  const users = [
    { id: 1, name: "sayan", age: 20 },
    { id: 2, name: "suman", age: 19 },
    { id: 3, name: "suraj", age: 30 },
  ];

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h1>Name: {user.name}</h1>
          <h1>Age: {user.age}</h1>
        </div>
      ))}
    </div>
  );
};

export default UserList;
