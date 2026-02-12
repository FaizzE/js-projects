const toggleCheckbox = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference or system preference
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme) {
     body.setAttribute('data-theme', savedTheme);
     if (savedTheme === 'dark') {
          toggleCheckbox.checked = true;
     }
} else if (systemPrefersDark) {
     body.setAttribute('data-theme', 'dark');
     toggleCheckbox.checked = true;
}

// Listen for toggle changes
toggleCheckbox.addEventListener('change', function () {
     if (this.checked) {
          body.setAttribute('data-theme', 'dark');
          localStorage.setItem('theme', 'dark');
     } else {
          body.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
     }
});