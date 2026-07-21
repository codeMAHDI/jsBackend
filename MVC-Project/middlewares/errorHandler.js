const errorHandler = (err, req, res, next) => {

    console.log("Global Error Caught:", err.message);

    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        success: false,
        message: err.message || "Internal server error",
        stack: err.stack

    })

};


export default errorHandler;