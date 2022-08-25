const renderData = (data) => {
  const container = document.querySelector('.score-display');
  container.innerHTML = '';
  data.forEach((item) => {
    container.innerHTML += ` 
    <div class="score-line flex border-radius">
    <span class="flex"><i class="bx bxs-user"></i>
      <p>${item.user}</p></span>
      <span>${item.score}</span>
    </div>`;
  });
};

export default renderData;
