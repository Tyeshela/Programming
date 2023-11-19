// Customer object
const customer = {
    name: "John",
    tableNumber: 3,
  };
  
  // Menu item object
  const menuItem = {
    name: "Burger",
    price: 10.99,
  };
  
  // Function to take an order
  function takeOrder(menuItem) {
    console.log(`${this.name} at table ${this.tableNumber} ordered a ${menuItem.name}.`);
  }
  
  // Simulate order placement using call
  takeOrder.call(customer, menuItem);
  // Output: John at table 3 ordered a Burger.
  
  // Function to calculate the bill
  function calculateBill(gratuityRate) {
    const totalAmount = this.price + (this.price * gratuityRate);
    console.log(`Total bill for ${this.name}: $${totalAmount.toFixed(2)}`);
  }
  
  // Simulate bill calculation using apply
  calculateBill.apply(menuItem, [0.15]);
  // Output: Total bill for Burger: $12.64
  