var elasticemail = require('elasticemail');
const express = require('express')

var bodyParser = require('body-parser')
const app = express()
const port = 3000


app.use(bodyParser.json())

app.post('/create', function (req, res) {
    console.log(req.body,'data')

    const to = req.body.toemail
    const fname = req.body.fname
    const lname = req.body.lname
    const num = req.body.pnum
    var client = elasticemail.createClient({
        username: 'info.uptoz@gmail.com',
        apiKey: '2B682661630CC395424CE7A8960F6870A10223BB376CD1DDBD0B033482E49DED62BF8ABF867B29CDE5141CF5BA972875'
    });

    var msg = {
        from: 'info.uptoz@gmail.com',
        from_name: 'UptoZ Technologies',
        to: to,
        subject: 'Intimation Mail for View State',
        body_text: 'Hello Boss!, '        + fname + lname +  ' tried to reach You ! , Please Contact Back (' + num  + ')' 
    };

    client.mailer.send(msg, function (err, result) {
        if (err) {
            return console.error(err);
        }
        res.send('Email Sent Successfully', 'Result_id: ', result)
        console.log('Email Sent Successfully', 'Result_id:', result);
    })
})
app.listen(port, () => {
    console.log(`nodemailerProject is listening at http://localhost:${port}`)
})