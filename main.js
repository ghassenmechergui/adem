function add() {
  if (localStorage.getItem("total") == null) {
    localStorage.setItem("total", "");
  }
  let myarray = localStorage.getItem("total").split(",");
  if (myarray[0] == null) {
    myarray.splice(0, 1);
  }

  n = "";
  for (e in myarray) {
    if (myarray[e] != "") {
      n += `
         <div class="content" >
               <p title='${e}'>${myarray[e]}</p>
               <div class="icon">
                <div onclick='delet(${e})' ><i class="fa-solid fa-trash"></i></div>
                <div onclick='correct(${e})' class="red" ><i class="fa-solid fa-circle-xmark"></i></div>
                <div onclick="modifier(${e})" data-bs-toggle="modal" data-bs-target="#modal-modifier"><i class="fa-solid fa-pen"></i></div>
              </div>
            </div>
     `;
      $(".body").html(n);
    }
  }
}
add();

function mynew() {
  let message = $(".message").val();
  let myarray = [localStorage.getItem("total")];

  myarray.push(message);
  localStorage.setItem("total", myarray);
  add();
}

function delet(e) {
  add();

  let myarray = localStorage.getItem("total").split(",");

  let element = document.querySelector(`[title="${e}"]`).innerHTML;
  myarray = myarray.filter((el) => el != element);

  localStorage.setItem("total", myarray);
  add();
}

function modifier(e) {
  let element = document.querySelector(`[title="${e}"]`).innerHTML;
  document.querySelector(".messagemodifier").value = element;
  return e;
}

function modit() {
  console.log(modifier(e));

   let messagemodifier = $('.messagemodifier').val()
   let myarray = localStorage.getItem('total').split(',')
   n = myarray.indexOf(modifier(e))
   console.log(n)
   console.log(messagemodifier)
   myarray[n] = messagemodifier
   localStorage.setItem('total',myarray)
   add()
}

coot.style.backgroundColor = localStorage.getItem("color")

function correct(e) {
  let n = e-1
  let coot = document.querySelectorAll(".content")[n]

  if(coot.style.backgroundColor == "green"){
    localStorage.setItem("color","#b7b8b8")
  }else{
    localStorage.setItem("color","blue")
  }
  coot.style.backgroundColor = localStorage.getItem("color")
}







