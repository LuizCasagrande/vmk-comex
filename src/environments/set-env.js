const {writeFileSync} = require('fs');

const target = './src/environments/environment.ts';
const file = `export const environment = {
  phone: '${process.env.PHONE}',
  email: '${process.env.EMAIL}',
  address: '${process.env.ADDRESS}',
};
`;

writeFileSync(target, file, {encoding: 'utf-8'});
console.log(`Env file generated at ${target}`);
