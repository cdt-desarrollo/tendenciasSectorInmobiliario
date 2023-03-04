function getValues() {
  
  var ele = document.getElementsByTagName("input");

  for (i = 0; i < ele.length; i++) {
    if ((ele[i].type = "radio")) {
      if (ele[i].checked)
        console.log(ele[i].value)
    }
  }
}

function escribirCiudad(){
  Swal.fire(
    {
      title: 'Escribe de donde te visitaron',
      html: '<input id="swal-input1" class="swal2-input" placeholder="Desde donde te visitaron"></input>',
      preConfirm: () => 
      {
        ciudad = document.getElementById("swal-input1").value
        document.getElementById("insertCity").innerHTML = ""
        document.getElementById("otros1").value= ciudad
        document.getElementById("insertCity").innerHTML += 
        `<h6><mark>${ciudad}</mark></h6>`
      }
    }
  )
}

function escribirUso(){
  Swal.fire(
    {
      title: 'Escribe el uso que le van a dar al espacio vendido',
      html: '<input id="swal-input1" class="swal2-input" placeholder="Escribe el uso del espacio"></input>',
      preConfirm: () => 
      {
        uso = document.getElementById("swal-input1").value
        document.getElementById("insertUse").innerHTML = ""
        document.getElementById("otros2").value= uso
        document.getElementById("insertUse").innerHTML += 
        `<h6><mark>${uso}</mark></h6>`
      }
    }
  )
}
