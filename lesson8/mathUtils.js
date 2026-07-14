export const calculateTax=(price)=>{
    const taxRate = 15;
    const taxAmount = (price * taxRate) / 100;
    return taxAmount;
};