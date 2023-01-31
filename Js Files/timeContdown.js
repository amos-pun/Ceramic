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