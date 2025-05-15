document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('themeToggle');
  
  // Check for saved theme preference or prefer-color-scheme
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  const currentTheme = localStorage.getItem('theme');
  
  if (currentTheme === 'dark') {
    document.body.classList.add('dark-theme');
    themeToggle.checked = true;
  } else if (currentTheme === 'light') {
    document.body.classList.remove('dark-theme');
    themeToggle.checked = false;
  } else if (prefersDarkScheme.matches) {
    document.body.classList.add('dark-theme');
    themeToggle.checked = true;
  }
  
  // Listen for toggle changes
  themeToggle.addEventListener('change', function() {
    if (this.checked) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  });
}); 