function addRow(no, name){
  const jsPoint = document.querySelector(".js_point");
  
  const newRow = document.createElement("tr");
  newRow.id = `${no}`;
  newRow.dataset.id = `${no}`;

  const newNo = document.createElement("td");
  newNo.textContent = no;
  newRow.appendChild(newNo);

  const newName = document.createElement("td");
  newName.textContent = name;
  newRow.appendChild(newName);

  jsPoint.appendChild(newRow);
}

addRow(1, "javascript");
addRow(2, "HTML");
addRow(3, "CSS");
