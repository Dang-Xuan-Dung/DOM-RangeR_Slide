const $ = document.querySelector.bind(document);
const rangeBox = $(".range")
const rangeBar = $(".range-bar");
const rangeText = $(".range-text")
const body = $("body")


const changeSlider = (number) =>{
rangeBar.style.width = `${number}%`
rangeText.innerText = `${number}%`
body.style.backgroundColor = `rgba(0,0,0, ${number/100})`;
console.log(`rgba(0,0,0, ${number}/100)`);
}


rangeBox.addEventListener("mousemove", (e) => {
  const proces = e.pageX - rangeBox.offsetLeft;
  console.log(rangeBox.offsetLeft);

  let percent = (proces / rangeBox.offsetWidth) * 100;
  percent = Math.ceil(percent)
  changeSlider(percent)
})

changeSlider(54)