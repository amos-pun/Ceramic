// -- -- Background of Index page
const bg = [ 'per1.jpg','pro1.jpg','pro2.jpg','background.jpg']
let i = 3

document.getElementById('back').src = bg[i]
const next = () => {
    i++
    if( i == bg.length ){
        i = 0
    }
    document.getElementById('back').src = bg[i]
}

setInterval(next, 3500)




