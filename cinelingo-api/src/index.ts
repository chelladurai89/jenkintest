import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3005;

app.use(cors())
app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server 1532");
});

app.get('/products', function (req, res, next) {
  res.json({msg: 'This is from products'})
})

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});