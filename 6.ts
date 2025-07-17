function displayMember(name: string, email?: string): void {
  console.log(`Member: ${name}, Email: ${email ?? "Not provided"}`);
}

function calculateFines(...fines: number[]): number {
  return fines.reduce((sum, fine) => sum + fine, 0);
}

function computeFee(amount: number, discount: number = 0.1): number {
  return amount * (1 - discount);
}

function vipGreet(name: string): void {
  console.log(`Welcome VIP ${name}!`);
}

function consoleGreet(name: string): void {
  console.log(`Hello, ${name}`);
}

function factorial(n: number): number {
  return n <= 1 ? 1 : n * factorial(n - 1);
}

function generateReports(books: { title: string }[]): void {
  const text = books.map(b => `Title: ${b.title}`).join("\n");
  const json = JSON.stringify(books, null, 2);
  console.log("Text Report:\n" + text);
  console.log("JSON Report:\n" + json);
}

// Test calls
displayMember("Shreyas", "shreyas@example.com");
displayMember("Arya");
console.log("Total fines:", calculateFines(5, 10, 2.5));
console.log("Fee with default discount:", computeFee(100));
console.log("Fee with 20% discount:", computeFee(100, 0.2));
vipGreet("Alice");
consoleGreet("Bob");
console.log("Factorial of 5:", factorial(5));
generateReports([{ title: "1984" }, { title: "Brave New World" }]);
