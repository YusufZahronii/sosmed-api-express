import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import usersRouters from ".././src/routers/usersRouters";

const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", usersRouters);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(400).send(err.message);
});

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
