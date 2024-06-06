export const getUsers = (req, res) => {
  res.send({ status: "sucees", result: "users" });
};

export const createUser = (req, res) => {
  res.send({ status: "sucees", result: "createUser" });
};

export const getUserById = (req, res) => {
  res.send({ status: "sucees", result: "getUserById" });
};
