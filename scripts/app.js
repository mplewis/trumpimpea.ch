/* eslint-env jquery */

// Jan 20, 2017, 12:00 PM EST
var inaugOn = new Date('2017-01-20T12:00:00.00-0900')

function updateCount () {
  const diff = (new Date() - inaugOn) / 1000
  const secs = parseInt(diff % 60)
  const mins = parseInt((diff / 60) % 60)
  const hours = parseInt((diff / 60 / 60) % 24)
  const days = parseInt(diff / 60 / 60 / 24)
  const ss = secs === 1 ? '' : 's'
  const ms = mins === 1 ? '' : 's'
  const hs = hours === 1 ? '' : 's'
  const ds = days === 1 ? '' : 's'
  const msg = `${days} day${ds}, ${hours} hour${hs}, ${mins} minute${ms}, and ${secs} second${ss}`
  document.querySelector('.clock').innerText = msg
}

setInterval(updateCount, 1000);
updateCount();
