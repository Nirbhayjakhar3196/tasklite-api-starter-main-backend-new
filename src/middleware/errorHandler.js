// TODO: Implement centralized error handler
// - Log error
// - Return JSON:
// { success: false, message: "Internal Server Error" }


const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "Internal Server Error" });
};

module.exports = errorHandler;
