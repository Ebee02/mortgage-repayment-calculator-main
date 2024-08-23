const mortgageAmount = document.getElementById("mortgage-amount");
const euroSvgEl = document.getElementById("euro");
const iconSpan = mortgageAmount.previousElementSibling;
const mortgageTerm = document.getElementById("mortgage-term");
const mortgageTermBtn = document.getElementById("mortgage-term-btn");
const interestRate = document.getElementById("interest-rate");

// Add event listeners for focus and blur events on the input field
mortgageAmount.addEventListener("focus", function () {
  iconSpan.style.backgroundColor = "#d7da2f";
  iconSpan.style.borderTop = "1px solid #d9e6ec";
  iconSpan.style.borderLeft = "1px solid #d9e6ec";
  iconSpan.style.borderBottom = "1px solid #d9e6ec";
  iconSpan.style.color = "#fff";
  euroSvgEl.style.color = "#122f3f";
});

// Revert to the original color or any other color
mortgageAmount.addEventListener("blur", function () {
  iconSpan.style.backgroundColor = "#d9e6ec";
  iconSpan.style.borderTop = "1px solid #4e6e7e";
  iconSpan.style.borderLeft = "1px solid #4e6e7e";
  iconSpan.style.borderBottom = "1px solid #4e6e7e";
  euroSvgEl.style.color = "#4e6e7e";
});

mortgageTerm.addEventListener("focus", function () {
  mortgageTermBtn.style.backgroundColor = "#d7da2f";
  mortgageTermBtn.style.borderTop = "1px solid #d7da2f";
  mortgageTermBtn.style.borderRight = "1px solid #d7da2f";
  mortgageTermBtn.style.borderBottom = "4px solid #d7da2f";
  mortgageTermBtn.style.color = "#122f3f";
});

mortgageTerm.addEventListener("blur", function () {
  mortgageTermBtn.style.backgroundColor = "#d9e6ec";
  mortgageTermBtn.style.borderTop = "1px solid #4e6e7e";
  mortgageTermBtn.style.borderRight = "1px solid #4e6e7e";
  mortgageTermBtn.style.borderBottom = "1px solid #4e6e7e";
  mortgageTermBtn.style.color = "#4e6e7e";
});
