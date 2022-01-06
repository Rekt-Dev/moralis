var NoIP = require('no-ip')

var noip = new NoIP({
  hostname: 'brobro.ddns.net',
  user: 'rektdevvv@gmail.com',
  pass: 'NoipScamAF88'
})

noip.on('error', function(err){
  console.log(err)
})

noip.on('success', function(isChanged, ip){
  console.log(isChanged, ip)
})

noip.update() // Manual update, you can also provide a custom IP address

noip.start() // start an automatic renewal every 1h by default or provide a custom ms.
// noip.stop() // stop the previously started automatic update
