const {writeFileSync} = require('fs');

const target = './src/environments/environment.ts';
const file = `export const environment = {
  phone: '${process.env.PHONE}',
  email: '${process.env.EMAIL}',
  address: '${process.env.ADDRESS}',
  drive: '${process.env.DRIVE}',
  emailJsPublicKey: '${process.env.EMAIL_JS_PUBLIC_KEY}',
  emailJsServiceId: '${process.env.EMAIL_JS_SERVICE_ID}',
  emailJsTemplateId: '${process.env.EMAIL_JS_TEMPLATE_ID}',
};
`;

writeFileSync(target, file, {encoding: 'utf-8'});
console.log(`Env file generated at ${target}`);
