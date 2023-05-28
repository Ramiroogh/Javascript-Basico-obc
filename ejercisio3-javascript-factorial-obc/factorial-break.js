let number = 10;
let factorial = 1;
let i = 1;

while (true) {
  factorial *= i;

  if (i === number) {
    break;
  }

  i++;
}

console.log(`El factorial de ${number} es: ${factorial}`);