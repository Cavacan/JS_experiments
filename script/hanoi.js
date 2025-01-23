document.addEventListener("DOMContentLoaded", () => {
  const towers = document.querySelectorAll(".tower");
  const tower1 = document.getElementById("tower1");

  const disk = document.createElement("div");
  disk.classList.add("disk");
  tower1.appendChild(disk);

  let isDragging = false;
  let initialTower = null;

  disk.addEventListener("mousedown", () => {
    isDragging = true;
    initialTower = disk.parentElement;
    disk.style.transform = "translateY(-30px)";
    disk.style.position = "absolute"
    disk.style.zIndex = "1000";
  });

  const x_display = document.querySelector(".x_pos");
  const x_mouse = document.querySelector(".mouse_point");
  
  document.addEventListener("mousemove", (event)=>{
    if (isDragging){
      x_display.textContent = `x_pos:${event.pageX}px`
      x_mouse.textContent = `mouse_pos:${screenX}px`
      disk.style.x = `${event.pageX}px`;
      disk.style.y = `${event.pageY}px`;
    }
  })
  document.addEventListener("mouseup", (event) => {
    if (isDragging) {
      isDragging = false;
      disk.style.position = "absolute";
      disk.style.zIndex = "";

      let dropped = false;
      towers.forEach((tower) => {
        const rect = tower.getBoundingClientRect();
        if (
          event.clientX > rect.left  &&
          event.clientX < rect.right  &&
          event.clientY > rect.top  &&
          event.clientY < rect.bottom 
        ) {
          tower.appendChild(disk);
          dropped = true;
        } else {
          disk.style.transform = "translateY(0)";
        }
      });

      if (!dropped){
        initialTower.appendChild(disk);
      }
      
      disk.style.transform = "translateY(0)";
      disk.style.left = "";
      disk.style.top = "";
    };
  })
});
