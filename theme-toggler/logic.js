let btn = document.getElementById('dark');

let mn = document.getElementById('main');

let isDark = false;


btn.addEventListener('click' ,function() {
     if(isDark) {
          mn.style.backgroundColor = 'limegreen'
          isDark = false;
     } else {
          mn.style.backgroundColor = 'gray'
          isDark = true;
     }
})