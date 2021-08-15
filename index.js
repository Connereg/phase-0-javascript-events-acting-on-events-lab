// Your code here
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  } 


document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left < 361) {
      dodger.style.left = `${left + 1}px`;
    }
      
  }

  document.addEventListener("keydown", function(o) {
    if (o.key === "ArrowRight") {
      moveDodgerRight();
    }
  });

  function moveDodgerUp() {
    const verticalNumbers = dodger.style.bottom.replace("px", "");
    const vertical = parseInt(verticalNumbers, 10);
    if (vertical < 380){
      dodger.style.bottom = `${vertical + 1}px`
    }
    
  }

 

  document.addEventListener("keydown", function(q) {
    if (q.key === "ArrowUp") {
      moveDodgerUp();
    }
  });

  function moveDodgerDown() {
    const verticalNumbers = dodger.style.bottom.replace("px", "");
    const vertical = parseInt(verticalNumbers, 10);
    if (vertical > 0){
       dodger.style.bottom = `${vertical - 1}px`
    }
  }

 

  document.addEventListener("keydown", function(r) {
    if (r.key === "ArrowDown") {
      moveDodgerDown();
    }
  });


