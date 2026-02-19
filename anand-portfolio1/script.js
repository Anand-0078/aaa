// Get the background container
const bg = document.querySelector('.background');

// Listen to mouse movement
document.addEventListener('mousemove', (e) => {
  const x = (window.innerWidth / 2 - e.clientX) / 50;
  const y = (window.innerHeight / 2 - e.clientY) / 50;

  // Apply rotation to the background for 3D effect
  bg.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
});
