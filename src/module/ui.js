let footerDate = () => {
  let d = new Date();
  document.querySelector(
    '#footer-text'
  ).innerHTML = `©${d.getFullYear()} chayapatr a.`;
  console.log(`${d.getFullYear()}`);
};

export default footerDate;
