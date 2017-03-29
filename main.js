window.onload = ()=> {
  var previews = document.querySelectorAll('#previews li')
  for(preview of previews) {
    console.log(preview)
    preview.addEventListener('click', open)
  }
}

function open(event) {
  var targeted = event.target
  //parse the data-id
  var id = targeted.getAttribute("data-id")
  //reset classlist for all
  resetexcept(id)
  //scroll to top
  if(document.body.scrollTop > 0) {
    document.body.scrollTop = 0
  }
  //load page
  document.getElementById(id).innerHTML='<object type="text/html" data="'+id+'.html" ></object>'
  
  document.getElementById(id).classList.toggle('open')
  targeted.classList.toggle('close')
  document.getElementById('container').classList.toggle('reverse-order')
}

function resetexcept(id) {
  var previews = document.querySelectorAll('#previews li')
  for(preview of previews) {
    if(preview.getAttribute("data-id")!==id){
      var elemid = preview.getAttribute("data-id")
      preview.classList.remove('close')
      document.getElementById(elemid).classList.remove('open')
      document.getElementById('container').classList.remove('reverse-order')
    }
  }
}
