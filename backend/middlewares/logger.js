const logger = () => {
  return (req, res, next) => {
    console.log(`${req.method}: ${req.originalUrl} enecodeajillaa`);
    next();
  };
};

module.exports = { logger };
