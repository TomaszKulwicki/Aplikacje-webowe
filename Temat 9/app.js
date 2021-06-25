const express = require('express');

const app = express();
app.use(express.json()); 

app.get('/hello', (req, res) => res.send('Hello World!'));

require('./routers/product.routers')(app);
require('./routers/category.routers')(app);

app.listen(3000, () => console.log('Example app listening on port 3000!'));

//node .\app.js