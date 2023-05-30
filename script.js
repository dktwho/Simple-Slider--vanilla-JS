const prevBtn = document.getElementById('show-prev-btn')
const nextBtn = document.getElementById('show-next-btn')

let images = []
images.push('https://gratisography.com/wp-content/uploads/2023/05/gratisography-retro-pastime-free-stock-photo-800x525.jpg')
images.push('https://gratisography.com/wp-content/uploads/2023/05/gratisography-cool-colorful-door-free-stock-photo-800x525.jpg')
images.push('https://gratisography.com/wp-content/uploads/2023/05/gratisography-party-balloons-free-stock-photo-800x525.jpg')

let currentImage = 0

const slideImage = document.getElementById('slide-image')
slideImage.src = images[currentImage]

prevBtn.addEventListener('click', onShowPrevBtnClick )
nextBtn.addEventListener('click', onShowNextBtnClick )








function onShowPrevBtnClick() {
  currentImage--
  slideImage.src = images[currentImage]
}

function onShowNextBtnClick() {
  currentImage++
  slideImage.src = images[currentImage]
}

