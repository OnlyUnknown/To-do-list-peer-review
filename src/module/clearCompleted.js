const clearC = () => {
  let task = [];
  let counter = 1
  if (localStorage.getItem('used') === null) {
    task = [];
  } else {
    task = JSON.parse(localStorage.getItem('used'));
  }

  const clearlist = (taskc) => taskc.Completed === false;

  task = task.filter(clearlist);

  task.forEach(e => {
    e.index = counter
    counter++
  });

  

  localStorage.setItem('used', JSON.stringify(task));

  const flex = document.querySelector('.list');
  flex.innerHTML = `<div class="today">Today's To Do</div>
<input class="value" type="text" placeholder="Add to the list">`;

task.forEach(e => {
  flex.innerHTML += `<div class="flex-list"><input class="checker" type="checkbox"><div class="value-list"> ${e.discription} </div> <a class="right" href="#"><i class="fa-sharp fa-solid fa-ellipsis-vertical"></i></a><p class="index">${e.index}</p></div>`;
});

  
};

export default clearC;
