const myCarousel = document.querySelector('#carouselExampleCaptions')
const carousel = new bootstrap.Carousel(myCarousel, {
  interval: 4000,
  ride: 'carousel',
  pause: false,
})