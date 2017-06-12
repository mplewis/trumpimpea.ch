/* eslint-env jquery */

// Jan 20, 2017, 12:00 PM EST
var inaugOn = new Date('2017-01-20T12:00:00.00-0900')

function updateCount () {
  const since = moment.duration(new Date() - inaugOn)
  const msg = since.format('d [days], h [hours], m [minutes], [and] s [seconds]')
  document.querySelector('.clock').innerText = msg
}

setInterval(updateCount, 1000);
updateCount();
