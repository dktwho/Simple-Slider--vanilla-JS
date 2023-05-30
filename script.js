const prevBtn = document.getElementById('show-prev-btn')
const nextBtn = document.getElementById('show-next-btn')



prevBtn.addEventListener('click', onShowPrevBtnClick )
nextBtn.addEventListener('click', onShowNextBtnClick )


function onShowPrevBtnClick() {
  console.log('prev')
}

function onShowNextBtnClick() {
  console.log('next')
}

