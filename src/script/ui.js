let footerDate = () => {
  let d = new Date();
  document.querySelector(
    '#footer-text'
  ).innerHTML = `©${d.getFullYear()} chayapatr a. punnasit c. pruttiporn i. phusit k.`;
  console.log(`${d.getFullYear()}`);
};

export default footerDate;
