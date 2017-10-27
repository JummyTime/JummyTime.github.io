---
layout: null
sitemap:
  exclude: 'yes'
---

$(document).ready(function () {
  $('a.blog-button').click(function (e) {
    on_nav()
  })
  $('a.button').click(function (e) {
    on_nav()
  })


  if (window.location.hash && window.location.hash == '#blog') {
    $('.panel-cover').addClass('panel-cover--collapsed')
  }
  else if (window.location.pathname !== '{{ site.baseurl }}/' && window.location.pathname !== '{{ site.baseurl }}/index.html') {
    //$('.panel-cover').addClass('panel-cover--collapsed')
    setTimeout( function() {
      on_nav()
    }, 333);
  }

  $('.btn-mobile-menu').click(function () {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })

  $('.navigation-wrapper .blog-button').click(function () {
    $('.navigation-wrapper').toggleClass('visible')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })

})

function on_nav() {
  if ($('.panel-cover').hasClass('panel-cover--collapsed')) return
  currentWidth = $('.panel-cover').width()

    if (currentWidth < 960) {
    $('.panel-cover').addClass('panel-cover--collapsed')
    //$('.content-wrapper').addClass('animated slideInRight')
  } else {
    $('.panel-cover').css('max-width', currentWidth)
    $('.panel-cover').animate({'max-width': '400px', 'width': '25%'}, 400, swing = 'swing', function () {})
  }
}
