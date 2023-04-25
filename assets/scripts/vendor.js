

// console.log('basla bitir');

// let arr = []


// const getAllDatas = (name,password,callback)=>{
//     setTimeout(()=>{
//         callback({name:name,pass:password})
//     },2000)
// }


// const grasbDatas=(alfa,betta,callback)=>{

//     setTimeout(()=>{
//        callback([alfa,betta])
//     },1000)

// }



// const arrLoop = (data,callback) =>{
//   setTimeout(()=>{
//     callback(data[0])
//   },4000)
// }


// getAllDatas('Ayaz',123456,(datas)=>{
  
//     console.log(datas);

//     const {name,pass} = datas

//     // console.log(name);
//     // console.log(pass);
//     grasbDatas(name,pass,(arr)=>{
//         console.log(arr);


//         arrLoop(arr,(dat)=>{
//             console.log(dat + ' ' +'Ibrahimov');
//         })


//     })





// })




// console.log('salam');





const request = new XMLHttpRequest()

request.open('GET', 'https://restcountries.com/v3.1/name/azerbaijan')
request.send()



request.addEventListener('load',function(){
    const data = this.response

    const newData = JSON.parse(data)

    console.log(newData[0].capital[0]);
})

















////