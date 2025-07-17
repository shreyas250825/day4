type CustomerID = string;

type Customer = {
  id: CustomerID;
  name: string;
  email?: string;
};

type OrderStatus = "Pending" | "Shipped" | "Delivered";

type ProcessOrder = (orderId: number, callback: (status: OrderStatus) => void) => void;

const processOrder: ProcessOrder = (orderId, callback) => {
  console.log(`Processing Order: ${orderId}`);
  callback("Shipped");
};

type Container<T> = {
  value: T;
};

const customerContainer: Container<Customer> = {
  value: {
    id: "cust001",
    name: "Jane Doe"
  }
};

processOrder(101, (status) => {
  console.log(`Order Status: ${status}`);
});
