const Rollbar = require("rollbar");
const rollbar = new Rollbar("bc0a273c3ee341719f23d72df2a046c7");
rollbar.info("hello rollbar!")
console.log("run rollbar.info")

browser.runtime.onInstalled.addListener((details) => {
  console.log('previousVersion', details.previousVersion)
})

browser.browserAction.setBadgeText({
  text: `'Allo`
})

console.log(`'Allo 'Allo! Event Page for Browser Action`)
