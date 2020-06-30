const express = require('express');

const app = express();
// app.use(express.static('dist'));
app.use(express.json());
const port = 3000;


app.get('/', (req, res) => res.send(`PROXY WUT WUT`));



app.listen(port, () => console.log(`app listening at http://localhost:${port}`));