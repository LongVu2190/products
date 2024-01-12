import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

import { corsOptions }  from "./config/index.js";
import credentials from "./middleware/credentials.js";

import { productsRoute } from "./routes/index.js";

const app = express();

app.set('views', path.join(path.dirname(fileURLToPath(import.meta.url)), 'views'));
app.set('view engine', 'ejs');

app.use(credentials);
app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.json());

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use("/", productsRoute);

app.use("/public/", express.static(path.join(__dirname, "public")));

app.listen(3000, async () => {
  console.log("Server is listening on PORT " + 3000);
});
