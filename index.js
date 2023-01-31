// const images = ['cup1.jfif','cup2.jpg','cup3.jpg','cup4.jpg']

// // console.log(images)

// let index = 3
// document.getElementById('image_slide').src = images[index]

// const next = () => {
//     index++
//     if(index == images.length){
//         index = 0
//     }
//     document.getElementById('image_slide').src = images[index]
//     document.getElementById('nam').innerHTML = names[index]
// }
// setInterval(next, 3000)

// const names = ['Classic Cup','Forest Cup','Golden Cup','Japanese Cup']
// document.getElementById('nam').innerHTML = names[index]

// -- -- Background of Index page
const bg = [ 'per1.jpg','pro3.jpg','pro2.jpg','background.jpg']
let i = 0

document.getElementById('back').src = bg[i]
const next = () => {
    i++
    if( i == bg.length ){
        i = 0
    }
    document.getElementById('back').src = bg[i]
}

setInterval(next, 3500)


//  -- -- ending Date
// setInterval( () => {
//     let  today = new Date()
//     let days = today.getDay()
//     let hh = today.getHours()
//     let mm = today.getMinutes()
//     let ss = today.getSeconds()
    
//     let time = `${days} Days ${hh} Hours ${mm} Min ${ss} Sec`
    
//     document.getElementById('show_time').innerHTML = time
// },1000)


// -- -- Count Down
setInterval(()=>{
    let last_month = new Date("Jan/31/2023 0:00:00")
    let sale_today = new Date()
    
    const diff = last_month - sale_today
    
    const day = Math.floor(diff/(1000*60*60*24))
    rem = diff%(1000*60*60*24)
    
    const hr = Math.floor(rem/(1000*60*60))
    rem = diff%(1000*60*60)
    
    const min = Math.floor(rem/(1000*60))
    rem = diff%(1000*60)
    
    const sec = Math.floor(rem/1000)
    
    document.getElementById('days').innerHTML = day
    document.getElementById('hr').innerHTML = hr
    document.getElementById('min').innerHTML = min.toString().padStart(2,0)
    document.getElementById('sec').innerHTML = sec.toString().padStart(2,0)
},1000)