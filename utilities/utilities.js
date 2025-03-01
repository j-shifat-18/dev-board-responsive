// do all functionalities by id and title
function completedBtnByIdAndTitle(id,title){
    // make button disabled
    makeButtonDisabledById(id);

    // change the task assigned and completed number
    let taskAssigned = convertInnerTextById("task-assigned");
    taskAssigned--;
    document.getElementById("task-assigned").innerText = taskAssigned;
    let taskCompleted = convertInnerTextById("task-completed");
    taskCompleted++;
    document.getElementById("task-completed").innerText = taskCompleted;

    // make activity history
    makeActivityHistory(title);

    // alert
    alert("Board updated successfully!");
    if(taskAssigned === 0) alert("Congrates!!You have completed all the current task");
}


// convert Inner Text By Id
function convertInnerTextById(id) {
  const text = document.getElementById(id).innerText;
  const convertedText = parseInt(text);
  return convertedText;
}

// make button disabled
function makeButtonDisabledById(id) {
  document.getElementById(id).disabled = true;
}

// make activity log history
function makeActivityHistory(title) {
  title = document.getElementById(title).innerText;
  const container = document.getElementById("history-cards-container");
  const div = document.createElement("div");
  div.classList.add("rounded-lg", "primary-color", "p-2");

  const date = new Date();
  const time = date.toLocaleTimeString();

  div.innerHTML = `
         <p>You have Complete The Task <span class="font-bold">${title}</span> at ${time}</p>
    `;

  container.prepend(div);
}
