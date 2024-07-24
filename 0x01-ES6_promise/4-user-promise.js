export default function signUpUser(firstName, lastName) {
  const values = { firstName, lastName };
  return Promise.resolve(values);
}
