var body= document.querySelector('body')
var container= document.querySelector('.container')
var menu= document.querySelector('.menu')
var toggle=document.querySelector('.toggle')
var flag=0
toggle.addEventListener('click',function(){
  menu.classList.add('active')
  container.classList.add('active')
  flag=1
})

body.addEventListener('click',(e)=>{
  if(e.offsetX>200&&flag==1){
    menu.classList.remove('active')
    container.classList.remove('active')
    flag=0
  }
})