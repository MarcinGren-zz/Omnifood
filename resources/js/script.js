const waypoints = require('waypoints/lib/noframework.waypoints.js')

const sectionFeatures = document.querySelectorAll('.section-features')[0],
      navbar          = document.querySelectorAll('header nav')[0]

const waypoint = new Waypoint({
  element: sectionFeatures,
  handler: function (direction) {
    if (direction == 'down') {
      navbar.classList.add('sticky')
    } else {
      navbar.classList.remove('sticky')
    }
  }, 
  offset: '80px'
})