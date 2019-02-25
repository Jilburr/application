$('h1').addClass('appear')
$('p').addClass('appear')

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


$(document).on('scroll', function() {
  let pixelsFromTop = $(document).scrollTop()
  const documentHeight = $(document).height()
  let windowHeight = $(window).height()

  let difference = documentHeight - windowHeight
  let percentage = 100 * pixelsFromTop / difference

  $('.bar').css('width', percentage + '%')
  $('.percentage h3').html(Math.floor(percentage) + '% done')
})

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

$(document).on('scroll', function() {
  var pixelsFromTop = $(document).scrollTop()
  console.log(pixelsFromTop)

  if (pixelsFromTop > 960) {
    $('body').css('background-color', '#C65162')
    $('h1').css('color', 'white')
    $('h3').css('color', 'white')
    $('p').css('color', 'white')
    $('a').css('color', 'white')
    $('.header').css('border-bottom', '1px white solid')
    $('.bar').css('background-color', 'white')
  } else {
    $('body').css('background-color', 'white')
    $('h1').css('color', '#C65162')
    $('h3').css('color', '#C65162')
    $('p').css('color', '#C65162')
    $('a').css('color', '#C65162')
    $('.header').css('border-bottom', '1px #C65162 solid')
    $('.bar').css('background-color', '#C65162')
  }
})





