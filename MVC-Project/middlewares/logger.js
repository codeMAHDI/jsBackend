const loggerMiddleware = (req, res, next) => {
    const currentTime = new Date().toISOString();
    console.log(`[${currentTime}] ${req.metho} request made to: ${req.url}`);
    next();

};

export default loggerMiddleware;