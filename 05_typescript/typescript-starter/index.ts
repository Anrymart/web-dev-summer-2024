interface User {
  name: string;
  id: number;
}

function greetUser(user: User) {
  console.log(`Hi ${user.name}`);
}

greetUser({name: 'Bob', id: 0});