function describePerson(name: string, age?: number): void {
  console.log(`Name: ${name}, Age: ${age ?? "Unknown"}`);
}

function calculatePrice(basePrice: number, discount: number = 0.1): number {
  return basePrice * (1 - discount);
}

// Test calls
describePerson("Eve");
describePerson("Frank", 28);
console.log(calculatePrice(100)); // 90
console.log(calculatePrice(100, 0.2)); // 80
