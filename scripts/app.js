/* eslint-env jquery */

// Jan 20, 2017, 12:00 PM EST
var inaugOn = new Date('2017-01-20T10:00:00-07:00')
var preInaug = 'Trump will be sworn into office in'
var postInaug = [
  'Trump has been in office for',
  'without being impeached'
]

function countUp () {
  $('.top').text(postInaug[0])
  $('.bottom').text(postInaug[1])

  var since = (inaugOn - new Date()) / 1000
  $('.clock').FlipClock(since, {
    clockFace: 'DailyCounter'
  })
}

function countDown () {
  $('.top').text(preInaug)

  var until = (inaugOn - new Date()) / 1000
  $('.clock').FlipClock(until, {
    clockFace: 'DailyCounter',
    countdown: true
  })
}

var now = new Date()
if (now - inaugOn >= 0) countUp(); else countDown()
