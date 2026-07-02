// ================================
// LOADING SCREEN
// ================================

window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loadingScreen');
    
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 1500);
});

// ================================
// FLOATING PARTICLES
// ================================

function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random size between 2px and 6px
        const size = Math.random() * 4 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random horizontal position
        particle.style.left = `${Math.random() * 100}%`;
        
        // Random animation duration between 10s and 30s
        const duration = Math.random() * 20 + 10;
        particle.style.animationDuration = `${duration}s`;
        
        // Random delay
        const delay = Math.random() * 5;
        particle.style.animationDelay = `${delay}s`;
        
        particlesContainer.appendChild(particle);
    }
}

createParticles();

// ================================
// BACKGROUND MUSIC
// ================================

const bgMusic = document.getElementById('bgMusic');
const musicOverlay = document.getElementById('musicOverlay');
const musicStartBtn = document.getElementById('musicStartBtn');
const musicControl = document.getElementById('musicControl');
const playIcon = musicControl.querySelector('.play-icon');
const pauseIcon = musicControl.querySelector('.pause-icon');

let musicPlaying = false;

// Try to autoplay
bgMusic.play().then(() => {
    // Autoplay succeeded
    musicPlaying = true;
    musicOverlay.classList.add('hidden');
    updateMusicIcon();
}).catch(() => {
    // Autoplay blocked - show overlay
    musicOverlay.classList.remove('hidden');
});

// Music start button click
musicStartBtn.addEventListener('click', () => {
    bgMusic.play();
    musicPlaying = true;
    musicOverlay.classList.add('hidden');
    updateMusicIcon();
});

// Music control button click
musicControl.addEventListener('click', () => {
    if (musicPlaying) {
        bgMusic.pause();
        musicPlaying = false;
    } else {
        bgMusic.play();
        musicPlaying = true;
    }
    updateMusicIcon();
});

// Update music control icon
function updateMusicIcon() {
    if (musicPlaying) {
        playIcon.classList.add('hidden');
        pauseIcon.classList.remove('hidden');
    } else {
        playIcon.classList.remove('hidden');
        pauseIcon.classList.add('hidden');
    }
}

// ================================
// VIDEO PLAYER
// ================================

const mediaVideo = document.getElementById('mediaVideo');
const playOverlay = document.getElementById('playOverlay');
const playButton = document.getElementById('playButton');

// Check if video element exists
if (mediaVideo && playOverlay && playButton) {
    // Play button click
    playButton.addEventListener('click', () => {
        mediaVideo.play();
        playOverlay.classList.add('hidden');
    });

    // Show overlay when video is paused
    mediaVideo.addEventListener('pause', () => {
        if (mediaVideo.currentTime < mediaVideo.duration) {
            playOverlay.classList.remove('hidden');
        }
    });

    // Hide overlay when video is playing
    mediaVideo.addEventListener('play', () => {
        playOverlay.classList.add('hidden');
    });

    // Show overlay when video ends
    mediaVideo.addEventListener('ended', () => {
        playOverlay.classList.remove('hidden');
    });
}

// ================================
// SCROLL PROGRESS BAR
// ================================

window.addEventListener('scroll', () => {
    const scrollProgress = document.getElementById('scrollProgress');
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
});

// ================================
// RIPPLE CLICK EFFECT
// ================================

const rippleContainer = document.getElementById('rippleContainer');

document.addEventListener('click', (e) => {
    const ripple = document.createElement('div');
    ripple.classList.add('ripple');
    
    ripple.style.left = e.clientX + 'px';
    ripple.style.top = e.clientY + 'px';
    
    rippleContainer.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
});

// ================================
// SCROLL ANIMATIONS
// ================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all note cards
const noteCards = document.querySelectorAll('.note-card');
noteCards.forEach(card => {
    observer.observe(card);
});

// Observe media section
const mediaSection = document.getElementById('mediaSection');
if (mediaSection) {
    observer.observe(mediaSection);
}

// ================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ================================
// PROFILE PICTURE HOVER EFFECT
// ================================

const profilePicture = document.querySelector('.profile-picture');

if (profilePicture) {
    profilePicture.addEventListener('mouseenter', () => {
        profilePicture.style.transform = 'scale(1.05)';
        profilePicture.style.transition = 'transform 0.3s ease';
    });
    
    profilePicture.addEventListener('mouseleave', () => {
        profilePicture.style.transform = 'scale(1)';
    });
}

// ================================
// PREVENT RIGHT CLICK ON IMAGES (OPTIONAL)
// ================================

/*
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });
});
*/

// ================================
// CONSOLE MESSAGE
// ================================

console.log('%c Powered by PSYCHO ', 'background: linear-gradient(90deg, #f093fb 0%, #f5576c 100%); color: white; font-size: 20px; padding: 10px; font-weight: bold;');