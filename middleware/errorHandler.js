function errorHandler(err, req, res, next) {
  console.error("Error Handler:", err);

  let status = err.status || 500;
  let message = err.message || "Internal Server Error";

  if (err.name === "SequelizeValidationError") {
    status = 400;
    message = err.errors.map((e) => e.message).join(", ");
  }

  if (err.name === "SequelizeUniqueConstraintError") {
    status = 400;
    message = "Duplicate entry detected";
  }

  if (err.name === "SequelizeDatabaseError") {
    status = 500;
    message = "Database error occurred";
  }

  res.status(status).json({
    message: message,
  });
}

module.exports = errorHandler;
