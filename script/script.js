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

async function takeName() {
  let inputNickname = document.querySelector("#nickname").value;
  let inputMessaggio = document.querySelector("#messaggio").value;
  let obj = { username: inputNickname, message: inputMessaggio };
  let stringify = JSON.stringify(obj);
  await fetch("http://194.60.87.41:3000/newmsg", {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: stringify,
  })
    .then((response) => response.json())
    .then((response) => console.log(JSON.stringify(response)));
}
