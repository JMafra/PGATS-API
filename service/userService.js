const { users } = require('../model/userModel');

function registerUser(username, password, favorecido = false) {
  if (users.find(u => u.username === username)) {
    return { error: 'Usuário já existe.' };
  }
  const user = { username, password, favorecido };
  users.push(user);
  return { success: true, user };
}

function loginUser(username, password) {
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return { error: 'Login ou senha inválidos.' };
  return { success: true, user };
}

function getUsers() {
  return users;
}

module.exports = { registerUser, loginUser, getUsers };
