async function showName() {
  let httpName = await fetch("http://194.60.87.41:3000/getmsg");
  let arrayName = await httpName.json();
  console.log(arrayName);
  let theBigWall = document.querySelector("#wallContainer");
  theBigWall.innerHTML = "";
  for (let i = 0; i < arrayName.length; i++) {
    let nome = arrayName[i];
    theBigWall.innerHTML += `<div><p>${nome.username}<br> ${nome.message}</p></div>`;
  }
}

window.onload = () => {
  showName();
};
