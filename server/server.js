import bodyParser from 'body-parser';
import cors from 'cors';
import * as dotenv from 'dotenv';
import express from 'express';

const PORT = process.env.PORT || 4000;
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Server is working on http://localhost:${PORT}`);
});
