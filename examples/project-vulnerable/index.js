const { checkPasswordStrengthIncorrectly } = require('@selfpentest/notpasswdstrength');

const unused = 'for eslint to complain';
const input = document.createElement('input');
input.type = 'password';
input.placeholder = 'Enter password';

const label = document.createElement('span');

input.addEventListener('input', () => {
  const result = checkPasswordStrengthIncorrectly(input.value);
  label.textContent = result;
});

document.body.append(input, label);
