const { animate, splitText, stagger } = anime;

animate('#clip-img', {
  rotate: '360deg',
  duration: 90000,
  easing: 'linear',
  loop: true
});

// =====================================================================================================
// NAVBAR LOGO ANIMATION
// =====================================================================================================

const navLogo = document.querySelector('#navLogo');
const { chars } = splitText('#navLogo', { words: false, chars: true });

let isAnimating = false;

navLogo.addEventListener('mouseenter', () => {

    if(isAnimating) return;
    isAnimating = true;

    animate(chars, {
        y: [
            { to: '-2.75rem', ease: 'outExpo', duration: 600 },
            { to: 0, ease: 'outBounce', duration: 800, delay: 100 }
        ],
        rotate: {
            from: '-1turn',
            delay: 0
        },
        delay: stagger(50),
        ease: 'inOutCirc',

        onComplete: () =>{
            isAnimating = false;
        }
    });
});