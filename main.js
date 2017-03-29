window.onload = ()=> {
  var previews = document.querySelectorAll('#previews li')
  for(preview of previews) {
    console.log(preview)
    preview.addEventListener('click', open)
    preview.addEventListener('mouseover', previewPic)
    preview.addEventListener('mouseout', previewPic)
  }
}

var getId = (event) => event.target.getAttribute("data-id")

function previewPic(event) {
  var id = getId(event)
  var elem = event.target
  console.log(id, elem)
  //add flashy background
  switch(parseInt(id.slice(1))) {
    case 1:
      elem.classList.toggle('one')
      break
    case 2:
      elem.classList.toggle('two')
      break
    case 3:
      elem.classList.toggle('three')
      break
    case 4:
      elem.classList.toggle('four')
      break
    default:
      break
  }
  // switch(id)targeted.style.background
}

function open(event) {
  var id = getId(event)
  //reset classlist for all
  resetexcept(id)
  //scroll to top
  if(document.body.scrollTop > 0) {
    document.body.scrollTop = 0
  }
  //load page
  document.getElementById(id).innerHTML='<object type="text/html" data="'+id+'.html" ></object>'
  document.getElementById(id).classList.toggle('open')
  event.target.classList.toggle('close')
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
