const TAX_RATE= 0.15;
const SHIPING_COST= 5.00;

const incomingCartItem={
    id: "product-1",
    name:"Wireless Mouse",
    price: 25.00,
    quantity: 2
};

const processOrder= (item)=>{
    subtotal= item.price*item.quantity;
    const taxAmount= subtotal*TAX_RATE;
    const totatAmount= subtotal+taxAmount+SHIPING_COST;

    return{
        productName: item.name,
        subtotal: subtotal,
        tax: taxAmount,
        shipping: SHIPING_COST,
        finalTotal: totatAmount,
        isFreeShipping: totatAmount>50
    };

};

const orderSummary= processOrder(incomingCartItem);
console.log(orderSummary);