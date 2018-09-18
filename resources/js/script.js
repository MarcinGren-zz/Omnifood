const waypoints = require('waypoints/lib/noframework.waypoints.js')

const sectionFeatures  = document.querySelector('.section-features'),
      sectionPlans     = document.querySelector('.section-plans'),
      sectionWorks     = document.querySelector('.section-steps'),
      sectionCities    = document.querySelector('.section-cities'),
      sectionSignup    = document.querySelector('.section-plans'),
      navbar           = document.querySelector('header nav'),
      navbarDelivery   = document.querySelector('.navbar-delivery'),
      navbarHowItWorks = document.querySelector('.navbar-works'),
      navbarCities     = document.querySelector('.navbar-cities'),
      navbarSignup     = document.querySelector('.navbar-signup'),
      imHungryButton   = document.querySelector('.hero-text-box .btn-full'),
      showMeMoreButton = document.querySelector('.hero-text-box .btn-ghost')

function smoothScrollTo() {
    window.scroll({top: this.offsetTop, behavior: 'smooth'})
}

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

imHungryButton.addEventListener("click", smoothScrollTo.bind(sectionPlans))
showMeMoreButton.addEventListener("click", smoothScrollTo.bind(sectionFeatures))
navbarDelivery.addEventListener("click", smoothScrollTo.bind(sectionFeatures))
navbarHowItWorks.addEventListener("click", smoothScrollTo.bind(sectionWorks))
navbarCities.addEventListener("click", smoothScrollTo.bind(sectionCities))
navbarSignup.addEventListener("click", smoothScrollTo.bind(sectionSignup))