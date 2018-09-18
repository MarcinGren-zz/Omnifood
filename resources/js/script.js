const waypoints = require('waypoints/lib/noframework.waypoints.js')

const waypoint = new Waypoint({
    element: document.querySelectorAll('.section-features')[0],
    handler: function() {
      console.log('Basic waypoint triggered')
    }
  })