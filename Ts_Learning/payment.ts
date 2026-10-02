function processPayment(amount: number): void {
  if (amount <= 0) {
    throw new Error("Amount must be greater than zero.");
  }
}

export default processPayment;