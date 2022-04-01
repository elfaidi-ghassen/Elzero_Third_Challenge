let menu = document.getElementById("menu");
    let running = false;
    function startMenu() {
      if (running == false) {
        menu.style.visibility = "visible";
        menu.style.opacity = 1;
        menu.style.zIndex = 100;
        running = true;
      }
      else {
        menu.style.visibility = "hidden";
        menu.style.opacity = 0;
        menu.style.zIndex = -1;
        running = false;
      }     
    }