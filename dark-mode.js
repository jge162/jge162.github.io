const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

function toggleDarkMode(event) {
  if (event.matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
}

darkModeMediaQuery.addEventListener('change', toggleDarkMode);
toggleDarkMode(darkModeMediaQuery);
