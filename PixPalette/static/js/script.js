// window.onbeforeunload = function () {
//   window.scrollTo(0,0);
// };
const body = document.querySelector('body'),
blockShowImage = document.querySelector('.img-previow'),
btnDowload = body.querySelector('#dowload')


let dowload = (input)=>{
  blockShowImage.innerHTML = ''
  let file = input.files[0]
  let reader = new FileReader()
  reader.readAsDataURL(file)
  console.log(file);
  
  reader.onload = function(){
    let img = document.createElement('img')
    blockShowImage.append(img)
    img.src = reader.result
    img.classList.add('workShow__img--content')
    document.querySelector('.workPage-wrapper').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

const colors = body.querySelectorAll('.color'),
typeChangeRgb = body.querySelectorAll('.info__title-link--rgb'),
typeChangeCmyk = body.querySelectorAll('.info__title-link--cmyk'),
typeChangeHsv = body.querySelectorAll('.info__title-link--hsv'),
colorText = body.querySelectorAll('.color-text__wrapper')

let activeTypeRgb = (link)=>{
  if (link.classList.contains('info__title-link--active')) {
    typeChangeRgb.forEach((item, index, arr) => {
      item.classList.remove('info__title-link--active')
    });
    link.classList.remove('info__title-link--active')
    if (link.innerText == 'F' || link.innerText == 'H') {
      colorText.forEach((item, index, arr) => {
        if (item.classList.contains('color-text__wrapper--rgb')) {
          item.innerText = '255 255 255'
        }
      });
    }
  } else {
    typeChangeRgb.forEach((item, index, arr) => {
      item.classList.remove('info__title-link--active')
    });
    link.classList.add('info__title-link--active')
    if (link.innerText == 'F') {
      colorText.forEach((item, index, arr) => {
        if (item.classList.contains('color-text__wrapper--rgb')) {
          item.innerText = '1 1 1'
        }
      });
    } else if(link.innerText == 'H') {
      colorText.forEach((item, index, arr) => {
        if (item.classList.contains('color-text__wrapper--rgb')) {
          item.innerText = '#ffffff'
        }
      });
    }
  }
}
let activeTypeCmyk = (link)=>{
  if (link.classList.contains('info__title-link--active')) {
    // typeChangeRgb.forEach((item, index, arr) => {
    //   // console.log(item);
    //   item.classList.remove('info__title-link--active')
    // });
    link.classList.remove('info__title-link--active')
    if (link.innerText == 'F') {
      colorText.forEach((item, index, arr) => {
        if (item.classList.contains('color-text__wrapper--cmyk')) {
          item.innerText = '0 0 0 61'
        }
      });
    }
  } else {
    link.classList.add('info__title-link--active')
    if (link.innerText == 'F') {
      colorText.forEach((item, index, arr) => {
        if (item.classList.contains('color-text__wrapper--cmyk')) {
          item.innerText = '1 1 1 2'
        }
      });
    }
  }
}
let activeTypeHsv = (link)=>{
  if (link.classList.contains('info__title-link--active')) {
    link.classList.remove('info__title-link--active')
    if (link.innerText == 'F') {
      colorText.forEach((item, index, arr) => {
        if (item.classList.contains('color-text__wrapper--hsv')) {
          item.innerText = '0 0 32.2'
        }
      });
    }
  } else {
    link.classList.add('info__title-link--active')
    if (link.innerText == 'F') {
      colorText.forEach((item, index, arr) => {
        if (item.classList.contains('color-text__wrapper--hsv')) {
          item.innerText = '1 1 1.1'
        }
      });
    }
  }
}
// colors.forEach((item, index, arr) => {
//   console.log(item, index);
// });
// let paintColor = (hexColor)=>{
//   colors.forEach((item, index, arr) => {
//     item.style.backgroundColor = `#${hexColor}`
//   });
// }
let translateColor = (color)=>{
  console.log(color);
}
let chooseColor = (color)=>{
  colors.forEach((item, index, arr) => {
    item.classList.remove('choose-color')
    // console.log(item.childNodes);
  });
  translateColor(window.getComputedStyle(color).backgroundColor)
  color.classList.add('choose-color')

  // let circle = document.createElement('div')
  // color.append(circle)
  // circle.classList.add('circle')
}