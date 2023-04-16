/**
 In your Javascript file add the functionality which will allow you to drag the box and drop
  it into the target. Check out the Course Notes named DOM animations.
 */

  let  box = document.getElementById("box");
  let  target = document.getElementById("target");
  
  box.addEventListener("dragstart", dragStart);
  target.addEventListener("dragover", dragOver);
  target.addEventListener("drop", drop);
  
  function dragStart(event) {
      event.dataTransfer.setData("text/plain", event.target.id);
  }
  
  function dragOver(event) {
      event.preventDefault();
  }
  
  function drop(event) {
      event.preventDefault();
      let data = event.dataTransfer.getData("text");
      let draggedElement = document.getElementById(data);
      event.target.appendChild(draggedElement);
  }
  