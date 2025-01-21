document.addEventListener("DOMContentLoaded", () => {
  const inputA = document.querySelector("#inputA input");
  const inputB = document.querySelector("#inputB input");
  const rate_value = 3;

  inputA.addEventListener("change", () => {
    const aValue = parseFloat(inputA.value) || 0;
    inputB.value = aValue * rate_value;
  });

  inputB.addEventListener("change", () => {
    const bValue = parseFloat(inputB.value) || 0;
    inputA.value = Math.round(bValue / rate_value);
  });
});