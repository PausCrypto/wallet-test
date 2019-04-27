const Wallet = require('./wallet.js')
let wallet = new Wallet(1)

wallet.start().then((result) => {
  setInterval(function(){
    wallet.getSyncStatus().then((result) => {
      console.log(result)
    }).catch((error) => {
      console.log(error)
    })
  },1000)
}).catch((error) => {
  console.log(error)
})
