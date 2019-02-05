let nav = () => {
  document.getElementById('burger').addEventListener('click', () => {
    document.getElementById('nav').classList.toggle('is-active');
    document.getElementById('burger').classList.toggle('is-active');
  });
};

export default nav;
