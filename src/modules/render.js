const renderData = (data) => {
  const container = document.querySelector('.score-display');
  container.innerHTML = '';
  data.forEach((item) => {
    container.innerHTML += ` 
    <div class="score-line flex">
      <h3>${item.user}</h3>
      <span>${item.score}</span>
    </div>`;
  });
};

export default renderData;