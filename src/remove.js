const remove = (event) => {
  let counter = 0;
  let counter2 = 0;
  let task = [];

  if (localStorage.getItem('used') === null) {
    task = [];
  } else {
    task = JSON.parse(localStorage.getItem('used'));
  }

  if (event.target.classList.contains('fa-trash')) {
    const inde = document.querySelectorAll('.index');
    event.target.parentElement.parentElement.remove();

    task.forEach((e) => {
      if (event.target.parentElement.nextSibling.innerHTML === String(e.index)) {
        task.splice(counter, 1);
      }
      if (counter < task.length) {
        task[counter].index = counter + 1;
      }
      counter += 1;
    });

    inde.forEach((e) => {
      e.innerHTML = counter2 + 1;
      counter2 += 1;
    });
  }
  localStorage.setItem('used', JSON.stringify(task));
};

export default remove;
