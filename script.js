// On load animation

$('h1').addClass('appear')
$('p').addClass('appear')

// Loading screen

setTimeout(function() {
  document.querySelector('.loading').classList.add('hidden')
}, 1800)

$('#head').mouseenter(function() {
  $('.bubble').css('opacity', '1')
  $('#head')
    .attr('src', '13528497_1033251186729898_2969738674851039966_oo.png')
    .mouseleave(function() {
      $('.bubble').css('opacity', '0')
      $('#head').attr('src', '13528497_1033251186729898_2969738674851039966_o.png')
    })
})

// Reading bar

$(document).on('scroll', function() {
  let pixelsFromTop = $(document).scrollTop()
  const documentHeight = $(document).height()
  let windowHeight = $(window).height()

  let difference = documentHeight - windowHeight
  let percentage = 100 * pixelsFromTop / difference

  $('.bar').css('width', percentage + '%')
  $('.percentage h3').html(Math.floor(percentage) + '% done')
})

// Contact toggle

$('#contact').on('click', function() {
  $('.contact').css('opacity', 1)
  $('.contact').css('z-index', 9999)
  $('.contact').css('pointer-events', 'auto')
  $('body').css('overflow', 'hidden')
})

$('#closeImg').on('click', function() {
  $('.contact').css('opacity', 0)
  $('.contact').css('z-index', 1)
  $('.contact').css('pointer-events', 'none')
  $('body').css('overflow', 'auto')
})

// Image appear

$('p a').on('mouseenter', function() {
  linkId = this.id

  $(`.imgLeft img[id='${linkId}']`).addClass('slideDown')
  $(`.imgRight img[id='${linkId}']`).addClass('slideUp')
})

$('p a').on('mouseleave', function() {
  linkId = this.id

  $(`.imgLeft img[id='${linkId}']`).removeClass('slideDown')
  $(`.imgRight img[id='${linkId}']`).removeClass('slideUp')
})

//Color change

$(document).on('scroll', function() {
  var pixelsFromTop = $(document).scrollTop()
  console.log(pixelsFromTop)

  if (pixelsFromTop > 914) {
    $('body').css('background-color', '#c5d4ea')
    $('h1').css('color', 'white')
    $('h3').css('color', 'white')
    $('p').css('color', 'white')
    $('a').css('color', 'white')
    $('.header').css('border-bottom', '1px white solid')
    $('.bar').css('background-color', 'white')
    $('.contenttable').css('pointer-events', 'auto')
    $('.contenttable').css('opacity', 1)
  } else {
    $('body').css('background-color', 'white')
    $('h1').css('color', '#C65162')
    $('h3').css('color', '#C65162')
    $('p').css('color', '#C65162')
    $('a').css('color', '#C65162')
    $('.header').css('border-bottom', '1px #C65162 solid')
    $('.bar').css('background-color', '#C65162')
    $('.contenttable').css('pointer-events', 'none')
    $('.contenttable').css('opacity', 0)
  }
})

// Scroll to

const scrollLinks = document.querySelectorAll('.js-scroll')

scrollLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault()

    const href = link.getAttribute('href')
    document.querySelector(href).scrollIntoView({
      behavior: 'smooth'
    })
  })
})
