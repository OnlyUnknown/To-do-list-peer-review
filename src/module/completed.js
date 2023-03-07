const check = (event) => {
  let task = [];
  if (localStorage.getItem('used') === null) {
    task = [];
  } else {
    task = JSON.parse(localStorage.getItem('used'));
  }
  const list = event.target.nextSibling;
  const input = event.target;
  if (input.classList.contains('checker')) {
    list.classList.toggle('checked');
  }

  const p = event.target.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML;

  task.forEach((e) => {
    if (p === String(e.index) && e.Completed === false) {
      e.Completed = true;
    } else if (p === String(e.index) && e.Completed === true) {
      e.Completed = false;
    }
  });

  localStorage.setItem('used', JSON.stringify(task));
};

export default check;