const express = require('express'); 
const app = express();
const bodyParser = require('body-parser');
const PORT = 5000;

app.use(express.static('server/public'));

app.get('/input-numbers', (req,res) => {
    console.log('GET ROUTE');
    res.send('GOT IT');
});

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});