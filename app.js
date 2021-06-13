function cek(e) {
 e.preventDefault();
 let demam = document.querySelector("#demam").value;
 let pusing = document.querySelector("#pusing").value;
 let tenggorokan = document.querySelector("#tenggorokan").value;
 let lelah = document.querySelector("#lelah").value;
 let bau = document.querySelector("#bau").value;

 let answers = [demam,
  pusing,
  tenggorokan,
  lelah,
  bau];

 var ya = [];
 answers.forEach(a=> {
  if (a == "Ya") {
   ya.push(a);
  }
 });
 if (ya.length > 3) {
  alert("anda sangat beresiko terkena covid! segera hubungi dokter terdekat!");
 } else if (ya.length == 3) {
  alert("maka ........");
 } else {
  alert("maka.....");
 }
 console.log(a);
}

let cekButton = document.querySelector("#cekButton");
cekButton.addEventListener('click', cek);
