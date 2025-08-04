exports.getAllUsers = (req, res) => {
  const users = [
    { id: 1, name: "Nguyen Van A" },
    { id: 2, name: "Tran Thi B" }
  ];
  res.json(users);
};

exports.createUser = (req, res) => {
  const { name } = req.body;
  res.json({ message: "User created", name });
};
