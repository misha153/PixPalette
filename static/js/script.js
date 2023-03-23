let showPic = ()=>{
  if (localStorage.click == '') {
    localStorage.click = 'rgb(255, 0, 0)'
  } else if (localStorage.click !== ''){
    localStorage.click = ''
  }
}
console.clear()
let example = document.getElementById('example');
let context = example.getContext('2d');
let gr = context.createLinearGradient(200,0,0,200)

const body = document.querySelector('body'),
blockShowImage = document.querySelector('.img-previow'),
btnDowload = body.querySelector('#dowload'),
rgbBlock = body.querySelector('.color-text__wrapper--rgb'),
cmykBlock = body.querySelector('.color-text__wrapper--cmyk'),
hsvBlock = body.querySelector('.color-text__wrapper--hsv'),
ncsBlock = body.querySelector('.color-text__wrapper--ncs'),
getPath = body.querySelector('#get-path'),
typeColorRgb = body.querySelector('.info__title-link--rgb'),
typeColorCmyk = body.querySelector('.info__title-link--cmyk'),
typeColorHsv = body.querySelector('.info__title-link--hsv'),
formMain = body.querySelector('#formMain'),
dowloadBtn = body.querySelector('#dowload'),
paletteInp = body.querySelector('.palette-btnInput'),
paletteForm = body.querySelector('.paletteForm')

// rgbBlock.textContent.split('[').join('').split(']').join('')

let reroll = ()=>{  
  let file = dowloadBtn.files[0]
  let reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = function(){
    document.querySelector('.workPage-wrapper').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

setInterval(() => {
  $('.workShow__img--content').src = localStorage.getItem('imgFile')
})

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
  } else {
    typeChangeRgb.forEach((item, index, arr) => {
      item.classList.remove('info__title-link--active')
    });
    link.classList.add('info__title-link--active')
  }
}
let activeTypeCmyk = (link)=>{
  if (link.classList.contains('info__title-link--active')) {
    link.classList.remove('info__title-link--active')
  } else {
    link.classList.add('info__title-link--active')
  }
}
let activeTypeHsv = (link)=>{
  if (link.classList.contains('info__title-link--active')) {
    link.classList.remove('info__title-link--active')
  } else {
    link.classList.add('info__title-link--active')
  }
}
// let col = ['#808080','#808080','#808080','#808080','#808080','#808080','#808080','#808080']
// colors.forEach((item, index, arr) => {
//   item.style.backgroundColor = col[index]
// });
// colors.forEach((item, index, arr) => {
//   item.style.backgroundColor = item.textContent
//   item.textContent = ''
// });

let baseColors = body.querySelector('.count')
let res = JSON.parse(baseColors.textContent)
console.log(res);
// console.log(JSON.stringify(localStorage.resPal));
// console.log(JSON.stringify(localStorage.resPic));
// console.log(JSON.stringify(localStorage.resPath));

let basePalette = ()=>{
  if (res['palette']) {
    localStorage.resPal = JSON.stringify(res['palette'])
  }
  if (res['picker']){
    localStorage.resPic = JSON.stringify(res['picker'])
  }
  if (res['pipette']){
    localStorage.resPip = JSON.stringify(res['pipette'])
  }
  if (res['path']){
    localStorage.resPath = JSON.stringify(res['path'])
    blockShowImage.innerHTML = ''
    let img = document.createElement('img')
    blockShowImage.append(img)
    img.src = JSON.parse(localStorage.resPath)
    img.classList.add('workShow__img--content')
  } else if (!res['path']){
    blockShowImage.textContent = ""
    let img = document.createElement('img')
    blockShowImage.append(img)
    img.src = JSON.parse(localStorage.resPath)
    img.classList.add('workShow__img--content')
  }
}
console.log(JSON.parse(localStorage.resPal));
// basePalette('palette')
// basePalette('picker')
// basePalette('pipette')
basePalette(res['path'])
// console.log(basePalette('palette'));
// console.log(basePalette('palette')[1]['hex']);
// console.log(basePalette('Palette'));
// colors.forEach((item, index, arr) => {
// });
// for (let key in res) {
//   for (const key2 in res['palette']) {
//     colors.forEach((item, index, arr) => {
//       console.log(`${res['palette'][key2]['hex']} - элемент ${index}`);
//     });
//   }
// }
colors.forEach((item2, index2, arr2) => {
  item2.style.backgroundColor = JSON.parse(localStorage.resPal)[index2]['hex']
});
// let daun = ['rgb', 'floatrgb', 'hex', 'cmyk', 'floatcmyk', 'hsv', 'floathsv', 'ncs']
// res['palette'].forEach((item, index, arr) => {
//   daun.forEach((item2, index2, arr2) => {
//     console.log(`${res['palette'][index][item2]} - ${item2}`);
//   });
// });
let writeColor = (typeChange)=>{
  colors.forEach((item, index, arr) => {
    if ((localStorage.click !== '' || item.classList.contains('choose-color')) && $(`.info__title-link--rgb:contains('F')`).hasClass('info__title-link--active')) {
      if (typeChange == 'resPic') {
        rgbBlock.textContent = `${JSON.parse(localStorage.getItem(typeChange))['floatrgb']}`.split(',').join(', ')
        console.log(JSON.parse(localStorage.getItem(typeChange))['floatrgb']);
      } else if (typeChange == 'resPal'){
        rgbBlock.textContent = `${JSON.parse(localStorage.getItem(typeChange))[index]['floatrgb']}`.split(',').join(', ')
      }
    } else if ((localStorage.click !== '' || item.classList.contains('choose-color')) && $(`.info__title-link--rgb:contains('H')`).hasClass('info__title-link--active')) {
      if (typeChange == 'resPic') {
        rgbBlock.textContent = `${JSON.parse(localStorage.getItem(typeChange))['hex']}`.split(',').join(', ')
      } else if (typeChange == 'resPal'){
        rgbBlock.textContent = `${JSON.parse(localStorage.getItem(typeChange))[index]['hex']}`.split(',').join(', ')
      }
    } else if ((localStorage.click !== '' || item.classList.contains('choose-color')) && !$(`.info__title-link--rgb:contains('F')`).hasClass('info__title-link--active') && !$(`.info__title-link--rgb:contains('H')`).hasClass('info__title-link--active')){
      if (typeChange == 'resPic') {
        rgbBlock.textContent = `${JSON.parse(localStorage.getItem(typeChange))['rgb']}`.split(',').join(', ')
      } else if (typeChange == 'resPal'){
        rgbBlock.textContent = `${JSON.parse(localStorage.getItem(typeChange))[index]['rgb']}`.split(',').join(', ')
      }
    }

    if ((localStorage.click !== '' || item.classList.contains('choose-color')) && $(`.info__title-link--cmyk:contains('F')`).hasClass('info__title-link--active')) {
      if (typeChange == 'resPic') {
        cmykBlock.textContent = `${JSON.parse(localStorage.getItem(typeChange))['floatcmyk']}`.split(',').join(', ')
      } else if (typeChange == 'resPal'){
        cmykBlock.textContent = `${JSON.parse(localStorage.getItem(typeChange))[index]['floatcmyk']}`.split(',').join(', ')
      }
    } else if ((localStorage.click !== '' || item.classList.contains('choose-color')) && !$(`.info__title-link--cmyk:contains('F')`).hasClass('info__title-link--active')){
      if (typeChange == 'resPic') {
        cmykBlock.textContent = `${JSON.parse(localStorage.getItem(typeChange))['cmyk']}`.split(',').join(', ')
      } else if (typeChange == 'resPal'){
        cmykBlock.textContent = `${JSON.parse(localStorage.getItem(typeChange))[index]['cmyk']}`.split(',').join(', ')
      }
    }

    if ((localStorage.click !== '' || item.classList.contains('choose-color')) && $(`.info__title-link--hsv:contains('F')`).hasClass('info__title-link--active')) {
      if (typeChange == 'resPic') {
        hsvBlock.textContent = `${JSON.parse(localStorage.getItem(typeChange))['floathsv']}`.split(',').join(', ')
      } else if (typeChange == 'resPal'){
        hsvBlock.textContent = `${JSON.parse(localStorage.getItem(typeChange))[index]['floathsv']}`.split(',').join(', ')
      }
    } else if ((localStorage.click !== '' || item.classList.contains('choose-color')) && !$(`.info__title-link--hsv:contains('F')`).hasClass('info__title-link--active')){
      if (typeChange == 'resPic') {
        hsvBlock.textContent = `${JSON.parse(localStorage.getItem(typeChange))['hsv']}`.split(',').join(', ')
      } else if (typeChange == 'resPal'){
        hsvBlock.textContent = `${JSON.parse(localStorage.getItem(typeChange))[index]['hsv']}`.split(',').join(', ')
      }
    }
    
    if ((localStorage.click !== '' || item.classList.contains('choose-color')) && item.classList.contains('choose-color')){
      if (typeChange == 'resPic') {
        ncsBlock.textContent = `${JSON.parse(localStorage.getItem(typeChange))['ncs']}`
      } else if (typeChange == 'resPal'){
        ncsBlock.textContent = `${JSON.parse(localStorage.getItem(typeChange))[index]['ncs']}`
      }
    }
    if (typeChange == 'resPic') {
      console.log(`Схуяли приходит `);
      $('#status').html(`- ${JSON.parse(localStorage.getItem(typeChange))['hex']} -`)
      $('#status--r').html(`- ${JSON.parse(localStorage.getItem(typeChange))['rgb'][0]} -`)
      $('#status--g').html(`- ${JSON.parse(localStorage.getItem(typeChange))['rgb'][1]} -`)
      $('#status--b').html(`- ${JSON.parse(localStorage.getItem(typeChange))['rgb'][2]} -`)
      $('.pipetColor').addClass('choose-color')
      colors.forEach((item, index, arr) => {
        item.classList.remove('choose-color')
      });
    } else {
      $('.pipetColor').removeClass('choose-color')
    }
  });
}
let resPicOrResPal = ()=>{
  if (localStorage.click !== '') {
    console.log('Отправляем resPic');
    writeColor('resPic')
  } else if (localStorage.click == '') {
    writeColor('resPal')
  }
}
if (localStorage.click !== '') {
  writeColor('resPic')
} else if (localStorage.click == '') {
  writeColor('resPal')
}

if (localStorage.click !== ''){
  $('.pipetColor').css("backgroundColor", `${localStorage.click}`);
  $('.circle').css("top", `${localStorage.coordYBig}px`);
  $('.circle').css("left", `${localStorage.coordX}px`);
  $('.circle__tone').css('top', `${localStorage.coordYMin}px`)
}
// console.log(localStorage.hexMin)
gr.addColorStop(1, `${localStorage.hexMin}`)
context.fillStyle = gr
context.fillRect(0,0,200,200)
let rgbType = (color)=>{
  // if ($(`.info__title-link--rgb:contains('F')`).hasClass('info__title-link--active')) {
  //   rgbBlock.textContent = `${randomInt(2)} ${randomInt(2)} ${randomInt(2)}`
  // } else if($(`.info__title-link--rgb:contains('H')`).hasClass('info__title-link--active')){
  //   // let hex = "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);
  //   rgbBlock.textContent = `#${randomInt(9)}${randomInt(9)}${randomInt(9)}${randomInt(9)}${randomInt(9)}${randomInt(9)}`
  // } else {
  //   rgbBlock.textContent = getComputedStyle(color).backgroundColor.replace(/\D/g, " ")
  //   translateColor(window.getComputedStyle(color).backgroundColor)
  // }
  // chooseColor(color)
}
// let cmykType = (color)=>{
//   if ($(`.info__title-link--cmyk:contains('F')`).hasClass('info__title-link--active')) {
//     cmykBlock.textContent = `${randomInt(2)} ${randomInt(2)} ${randomInt(2)} ${randomInt(2)}`
//   } else {
//     cmykBlock.textContent = `${randomInt(2)} ${randomInt(2)} ${randomInt(2)} ${randomInt(200)}`
//     translateColor(window.getComputedStyle(color).backgroundColor)
//   }
//   chooseColor(color)
// }
// let hsvType = (color)=>{
//   if ($(`.info__title-link--hsv:contains('F')`).hasClass('info__title-link--active')) {
//     hsvBlock.textContent = `${randomInt(2)} ${randomInt(2)} ${randomInt(2)}.${randomInt(2)}`
//   } else {
//     hsvBlock.textContent = getComputedStyle(color).backgroundColor.replace(/\D/g, " ")
//     hsvBlock.textContent = `0 0 ${randomInt(200)}.${randomInt(10)}`
//   }
//   chooseColor(color)
// }
// let ncsType = (color)=>{
//   ncsBlock.textContent = `${randomInt(7)}${randomInt(6)}${randomInt(2)}${randomInt(2)}-N`
//   chooseColor(color)
// }

// let typePalette = (color)=>{
//   rgbType(color)
//   cmykType(color)
//   hsvType(color)
//   ncsType(color)
// }
// // (color)
let chooseColor = (color)=>{
  colors.forEach((item, index, arr) => {
    item.classList.remove('choose-color')
  });
  color.classList.add('choose-color')
}
// chooseColor()
let chooseType = (type)=>{
  colors.forEach((item, index, arr) => {
    if (item.classList.contains('choose-color')) {
      // typePalette(item)
    }
    // console.log(`Fire!`);
  });
}
let translateColor = (color)=>{
  console.log(color);
}

gr = context.createLinearGradient(0,0,200,0)
gr.addColorStop(0.025,'rgba(255, 255, 255, 1)')
gr.addColorStop(1,'rgba(255, 255, 255, 0)')
context.fillStyle = gr
context.fillRect(0,0,200,200)
gr = context.createLinearGradient(0,0,0,200)
gr.addColorStop(0.0,'rgba(0, 0, 0, 0)')
gr.addColorStop(0.95,'rgba(0, 0, 0, 1)')
context.fillStyle = gr
context.fillRect(0,0,200,200)

let exampleTone = document.getElementById('example__tone');
let contextTone = exampleTone.getContext('2d');
let gr2 = contextTone.createLinearGradient(20,0,0,200)
gr2.addColorStop(0, 'rgb(255,0,0)')
gr2.addColorStop(0.166, 'rgb(255,0,255)')
gr2.addColorStop(0.332, 'rgb(0,0,255)')
gr2.addColorStop(0.498, 'rgb(0,255,255)')
gr2.addColorStop(0.664, 'rgb(0,255,0)')
gr2.addColorStop(0.83, 'rgb(255,255,0)')
gr2.addColorStop(1, 'rgb(255,0,0)')
gr2.addColorStop(1.0,'rgba(255, 255, 255, 0)')
contextTone.fillStyle = gr2
contextTone.fillRect(0,0,20,200)

$('#example').mousedown(function () {
  $('.circle').css("display", "none");
})
$('#example').mouseup(function (e) {
  let pos = findPos(this);
  let x = e.pageX - pos.x;
  let y = e.pageY - pos.y;
  let c = this.getContext('2d');
  let p = c.getImageData(x, y, 1, 1).data; 
    let hex = "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);
    $('.pipetColor').css('backgroundColor', hex)
    paletteInp.value = `${p[0]} ${p[1]} ${p[2]}`
    $('.circle').css("display", "block");
    $('.circle').css("top", y);
    $('.circle').css("left", x);
    $('#paletteForm').submit()
    localStorage.coordX = x
    localStorage.coordYBig = y
    localStorage.click = `rgb(${p[0]}, ${p[1]}, ${p[2]})`
});



$('#example__tone').mousedown(function (e) {
  $('.circle__tone').css("display", "none");
})
$('#example__tone').mouseup(function (e) {
  let pos = findPos(this);
  let x = e.pageX - pos.x;
  let y = e.pageY - pos.y;
  let c = this.getContext('2d');
  let p = c.getImageData(x, y, 1, 1).data; 
  let hex = "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);
  $('.circle__tone').css("display", "block");
  $('.circle__tone').css("top", y);
  $('.circle__tone').css("left", 0);
  localStorage.hexMin = hex
  localStorage.coordYMin = y
  let gr = context.createLinearGradient(200,0,0,200)
  gr.addColorStop(1, hex)
  context.fillStyle = gr
  context.fillRect(0,0,200,200)
  gr = context.createLinearGradient(0,0,200,0)
  gr.addColorStop(0.025,'rgba(255, 255, 255, 1)')
  gr.addColorStop(1,'rgba(255, 255, 255, 0)')
  context.fillStyle = gr
  context.fillRect(0,0,200,200)
  gr = context.createLinearGradient(0,0,0,200)
  gr.addColorStop(0.0,'rgba(0, 0, 0, 0)')
  gr.addColorStop(0.95,'rgba(0, 0, 0, 1)')
  context.fillStyle = gr
  context.fillRect(0,0,200,200)
});


function findPos(obj) {
  let curleft = 0, curtop = 0;
  if (obj.offsetParent) {
      do {
          curleft += obj.offsetLeft;
          curtop += obj.offsetTop;
      } while (obj = obj.offsetParent);
      return { x: curleft, y: curtop };
  }
  return undefined;
}

function rgbToHex(r, g, b) {
  if (r > 255 || g > 255 || b > 255)
      throw "Invalid color component";
  return ((r << 16) | (g << 8) | b).toString(16);
}