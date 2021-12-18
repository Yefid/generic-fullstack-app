const express = require('express');
const moviesRouter = require('./routers/moviesRouter');

require('dotenv').config();

let PORT = process.env.PORT || 8000;
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/api/movies', moviesRouter);

app.listen(PORT, () => console.log(`server started on port ${PORT} mode: ${process.env.ENVMODE}`));
