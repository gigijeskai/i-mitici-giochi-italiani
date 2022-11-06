const express = require('express');
var cors = require('cors')
const router = express();
router.use(cors())
const port = 3000;

let msg = [{
    username: 'Panico',
    message: 'So Lillo !',
    color: ''
}]
router.get('/getmessaggi', (req, res) => {
    res.send('Hello World, from express');
});
router.get('/getmsg', (req, res) => {
    res.send(msg);
    console.log(msg)
});
router.post('/newmsg',express.json(),(req,res) => {
    msg.push(req.body);
    res.json(req.body + 'Nuovo messaggio salvato');
})

router.listen(port, () => console.log(`Pronto sulla porta ${port}!`))