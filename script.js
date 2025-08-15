const parallaxBg = document.querySelector('.parallax-bg');

const backgrounds = [
    "linear-gradient(135deg, #ff7eb3, #ff758c, #ff9a8b, #fad0c4)",
    "linear-gradient(135deg, #6a11cb, #2575fc, #3d47ff)",
    "linear-gradient(135deg, #ff9966, #ff5e62, #ff7043)",
    "linear-gradient(135deg, #00b4db, #0083b0, #005c97)",
    "linear-gradient(135deg, #f7971e, #ff9800, #ef6c00)"
];

let currentBg = 0;

// Single-line W3Schools style
function changeBG() { 
    parallaxBg.style.background = backgrounds[currentBg = (currentBg + 1) % backgrounds.length]; 
}
