const { checkPasswordStrengthIncorrectly } = require('@selfpentest/notpasswdstrength');

const unused = 'for eslint to complain';
const input = document.createElement('input');
input.type = 'password';
input.placeholder = 'Enter password';

const meter = document.createElement('meter');
meter.min = 0;
meter.max = 100;

const label = document.createElement('span');

input.addEventListener('input', () => {
  const result = checkPasswordStrengthIncorrectly(input.value);
  meter.value = result.score;
  label.textContent = result.label;
});

document.body.append(input, meter, label);
