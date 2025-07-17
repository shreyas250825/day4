const transactions = ["checkout", "return", "priority", "cancelled", "checkout", "priority"];

const counts: Record<string, number> = {
  checkout: 0,
  return: 0,
  priority: 0,
  cancelled: 0
};

// 1. Count each transaction
for (const txn of transactions) {
  counts[txn]++;
}
console.log(counts);

// 2. Infinite loop with break
let priorityReceived = false;
let i = 0;
while (true) {
  if (transactions[i] === "priority") {
    console.log("Priority transaction received.");
    break;
  }
  i++;
}

// 3. Dynamic return queue with do...while
let returnQueue = ["item1", "item2"];
do {
  const item = returnQueue.shift();
  console.log(`Processing ${item}`);
  if (item === "item2") returnQueue.push("item3");
} while (returnQueue.length);

// 4. Reset inventory
let inventory: Record<string, number> = { pen: 5, book: 10 };
for (let key in inventory) {
  inventory[key] = 0;
}
console.log(inventory);

// 5. Reverse visitor names
const visitors = ["A", "B", "C"];
for (let i = visitors.length - 1; i >= 0; i--) {
  console.log(visitors[i]);
}
