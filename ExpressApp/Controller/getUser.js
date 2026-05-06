const user = [{
  name: "John",
  email: "john@example.com",
  age: 30,
},
{
  name: "Jane",
  email: "jane@example.com",
  age: 25,
},
{
  name: "Bob",
  email: "bob@example.com",
  age: 28,
}]


const getUser = async (req, res) => {
  res.send(user);
}



const addUserController = async (req, res) => {
  const { name, email, address, profilePic, age } = req.body;
  console.log(name);
}

module.exports = { getUser, addUserController };