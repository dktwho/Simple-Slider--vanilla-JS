const prevBtn = document.getElementById('show-prev-btn')
const nextBtn = document.getElementById('show-next-btn')

let images = []
images.push('https://gratisography.com/wp-content/uploads/2023/05/gratisography-retro-pastime-free-stock-photo-800x525.jpg')
images.push('https://gratisography.com/wp-content/uploads/2023/05/gratisography-cool-colorful-door-free-stock-photo-800x525.jpg')
images.push('https://gratisography.com/wp-content/uploads/2023/05/gratisography-party-balloons-free-stock-photo-800x525.jpg')

let currentImageIndex = 0

const slideImage = document.getElementById('slide-image')
slideImage.src = images[currentImageIndex]
prevBtn.disabled = true

prevBtn.addEventListener('click', onShowPrevBtnClick )
nextBtn.addEventListener('click', onShowNextBtnClick )



function onShowPrevBtnClick() {
  currentImageIndex--
  slideImage.src = images[currentImageIndex]
  nextBtn.disabled = false
  if(currentImageIndex ===  0) {
    prevBtn.disabled = true
    }
}

function onShowNextBtnClick() {
  currentImageIndex++
  const slideImage = document.getElementById('slide-image')
  slideImage.src = images[currentImageIndex]
  prevBtn.disabled = false
  if(currentImageIndex ===  images.length - 1) {
    nextBtn.disabled = true
    }
}

