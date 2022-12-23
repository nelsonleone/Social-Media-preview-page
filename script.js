const toggle =  document.querySelector('label')
const themeMode = document.querySelector('.theme-mode')
window.onload = document.body.classList.add('light-theme')
const body = document.body;

toggle.addEventListener('click',() =>  {
   if(body.classList.contains('light-theme')){
      toggle.style.setProperty('--toggle-position1','57%')
      body.classList.remove('light-theme')
      body.classList.add('dark-theme')
   }else{
      toggle.style.setProperty('--toggle-position1','6%')
      body.classList.remove('dark-theme')
      body.classList.add('light-theme')
   }
})