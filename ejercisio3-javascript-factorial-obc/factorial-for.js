let number = 10;
let factorial = 1;

for (let i = 1; i <= number; i++) {
  factorial *= i;
}

console.log(`El factorial de ${number} es: ${factorial}`);