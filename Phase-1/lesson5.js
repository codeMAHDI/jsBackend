const fetchProductFromDatabase= ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve({ id: "p01", name: "Wireless Mouse", price: 1200 });
        }, 2000);
    });
};


const getProductController = async()=>{
    console.log("Step 1: Flutter App requested for product details.");
    console.log("Step 2: Querying Database... (Waiting for 2 seconds)");

    const product = await fetchProductFromDatabase();

    console.log("Step 3: Database responded with data!");
    console.log(`Step 4: Sending standard JSON back to Flutter -> Product Name: ${product.name}`);

};

getProductController();