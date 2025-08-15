const parallaxBg = document.querySelector('.parallax-bg');
document.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX / window.innerWidth - 0.5) * 20;
    const moveY = (e.clientY / window.innerHeight - 0.5) * 20;
    parallaxBg.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

const backgrounds = [
    "linear-gradient(135deg, #ff7eb3, #ff6a88, #ff8a8a, #fbbbbb)",
    "linear-gradient(135deg, #6a11cb, #3d47ff, #1e88e5)",
    "linear-gradient(135deg, #ff9966, #ff5e62, #ff7043)",
    "linear-gradient(135deg, #00b4db, #0083b0, #005c97)",
    "linear-gradient(135deg, #f7971e, #ff9800, #ef6c00)"
];

let currentBg = 0;
function changeBackground() {
    currentBg = (currentBg + 1) % backgrounds.length;
    parallaxBg.style.background = backgrounds[currentBg];
}
