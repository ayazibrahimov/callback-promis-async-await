const imgsBox = document.querySelector('#imgsBox')
const zone1 = document.querySelector('#zone1')
const zone2 = document.querySelector('#zone2')


// console.log(imgsBox);


zone1.addEventListener('dragover', function(event){
     event.preventDefault()
})





imgsBox.addEventListener('dragstart', (event)=>{
  event.dataTransfer.setData('id', event.target.id)
})


// function dragStart(event){
//    event.dataTransfer.setData('id', event.target.id)
//    console.log(event);
// }


zone2.addEventListener('drop', (event)=>{
  let item = event.dataTransfer.getData('id')

  event.target.append(document.getElementById(item))
})


// function drop(event){
//   let item = event.dataTransfer.getData('id')

//   event.target.append(document.getElementById(item))
// }








// zone2.addEventListener('drop',function(event){
//   let item = event.dataTransfer.getData('id')
//   event.target.append(document.getElementById(item))
// })





