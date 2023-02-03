import express from "express";
import { AppError } from "./errors/appErro";
import routes from "./routes/clientRoutes";
import { Request, Response, NextFunction } from "express";

const app = express();

app.use(express.json())

app.use(routes)

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }

  console.error(err);
  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

app.listen(3000)