const images = ['cup1.jfif','cup2.jpg','cup3.jpg','cup4.jpg']

// console.log(images)

let index = 3
document.getElementById('image_slide').src = images[index]

const next = () => {
    index++
    if(index == images.length){
        index = 0
    }
    document.getElementById('image_slide').src = images[index]
    document.getElementById('nam').innerHTML = names[index]
}

setInterval(next, 3000)

const names = ['Classic Cup','Forest Cup','Golden Cup','Japanese Cup']
document.getElementById('nam').innerHTML = names[index]
