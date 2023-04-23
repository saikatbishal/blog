document.addEventListener('DOMContentLoaded', () => {
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  
  // Function to enable dark mode
  const enableDarkMode = () => {
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkModeEnabled', 'true');
  };

  // Function to disable dark mode
  const disableDarkMode = () => {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkModeEnabled', 'false');
  };

  // Get the stored dark mode state from localStorage
  const storedDarkModeState = localStorage.getItem('darkModeEnabled');

  // Apply the stored dark mode state
  if (storedDarkModeState === 'true') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }

  darkModeToggle.addEventListener('click', () => {
    // Toggle the dark mode state based on the stored value
    if (storedDarkModeState === 'true') {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  });
});

  document.addEventListener('DOMContentLoaded', () => {
    // Dark mode toggle code (as previously provided)
  
    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
  
    mobileMenuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    // Dark mode toggle code (as previously provided)
  
    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
  
    mobileMenuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
      mobileMenuToggle.classList.toggle('open');
    });
  });
  
  