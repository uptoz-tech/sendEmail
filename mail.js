var elasticemail = require('elasticemail');
var client = elasticemail.createClient({
  username: 'info.uptoz@gmail.com',
  apiKey: '2B682661630CC395424CE7A8960F6870A10223BB376CD1DDBD0B033482E49DED62BF8ABF867B29CDE5141CF5BA972875'
});
 
var msg = {
  from: 'info.uptoz@gmail.com',
  from_name: 'Sooriya',
  to: 'sooriyanadarajan@gmail.com',
  subject: 'Intimation Mail for View State',
  body_text: 'helo '
  // 'Hello Boss!,         First name and Last name tried to reach You !'
};
 
client.mailer.send(msg, function(err, result) {
  if (err) {
    return console.error(err);
  }
 
  console.log('Email Sent Successfully', 'Result_id:' ,result);
});
