import Typed from 'typed.js';

const initTyped = () => {
  const element = document.querySelector('.typed-js');
  if (element) {
    new Typed('.typed-js', {
      strings: ['Drama', 'Classic', 'Comedy', 'Action', 'Romantic', 'Thriller', 'Horror', 'Adventure'],
      typeSpeed: 50,
      loop: true,
      loopCount: Infinity,
      showCursor: false
    });
  }
};

export { initTyped };

