const waypoints = require('waypoints')

const waypoint = new Waypoint({
    element: document.querySelectorAll('.section-features'),
    handler: function() {
      console.log('Basic waypoint triggered')
    }
  })