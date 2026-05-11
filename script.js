// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;
const body = document.body;

// Load theme from localStorage
function loadTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    body.classList.remove('dark-theme');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }
}

// Toggle theme
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  
  if (body.classList.contains('dark-theme')) {
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    localStorage.setItem('theme', 'dark');
  } else {
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    localStorage.setItem('theme', 'light');
  }
});

// Load theme on page load
loadTheme();

// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close mobile menu when link is clicked
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// Active nav link based on scroll
window.addEventListener('scroll', () => {
  let current = '';
  
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
});

// Form submission
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector('textarea').value;
    
    // Simple validation
    if (name && email && message) {
      // Show success message
      alert('Terima kasih! Pesan Anda telah dikirim.');
      contactForm.reset();
    } else {
      alert('Mohon isi semua field.');
    }
  });
}

// Smooth scroll for CTA buttons
const ctaButtons = document.querySelectorAll('.cta-button');
ctaButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    if (button.getAttribute('href') && button.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      const targetId = button.getAttribute('href').slice(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe elements with animation classes
document.querySelectorAll('[class*="fade"], [class*="slide"], .skill-item').forEach(el => {
  observer.observe(el);
});

// Dynamically update social links
const socialLinks = document.querySelectorAll('.social-icon');
// Note: Update these URLs when you have your actual social media links
const socialUrls = {
  github: '#', // Update with your GitHub URL
  instagram: '#', // Update with your Instagram URL
  linkedin: '#', // Update with your LinkedIn URL
  youtube: '#', // Update with your YouTube URL
  tiktok: '#' // Update with your TikTok URL
};

socialLinks.forEach((link, index) => {
  const faIcon = link.querySelector('i');
  if (faIcon.classList.contains('fa-github')) {
    link.href = socialUrls.github;
  } else if (faIcon.classList.contains('fa-instagram')) {
    link.href = socialUrls.instagram;
  } else if (faIcon.classList.contains('fa-linkedin')) {
    link.href = socialUrls.linkedin;
  } else if (faIcon.classList.contains('fa-youtube')) {
    link.href = socialUrls.youtube;
  } else if (faIcon.classList.contains('fa-tiktok')) {
    link.href = socialUrls.tiktok;
  }
});

// Animate skill bars on scroll
const skillBars = document.querySelectorAll('.skill-progress');
const skillsSection = document.getElementById('skills');

const skillsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
          bar.style.width = width;
        }, 100);
      });
      skillsObserver.unobserve(skillsSection);
    }
  });
}, { threshold: 0.5 });

if (skillsSection) {
  skillsObserver.observe(skillsSection);
}

console.log('Portfolio loaded successfully! 🎉');