let btn_light = document.querySelector(".btn_light")
let btn_dark = document.querySelector(".btn_dark")
let title_list = document.querySelector('.title_list')
let text = document.querySelector('.text')
let text1 = document.querySelector('.text1')

let body = document.querySelector('body')


btn_dark.addEventListener('click', () => {
    body.style.background = 'black'
    title_list.style.color = 'white'
    text.style.color = 'white'
    text1.style.color = 'white'
})

