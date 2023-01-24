const images = ['cup1.jfif','cup2.jpg','cup3.jpg','cup4.jpg',]

// console.log(images)

let index = 3
document.getElementById('image_slide').src = images[index]

const next = () => {
    index++
    if(index == images.length){
        index = 0
    }
    document.getElementById('image_slide').src = images[index]
}

setInterval(next, 4000)