const loadEvent = async function(){

    //Fetch the today's data
    const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    const responeJson = await response.json()
    console.log(responeJson)

}

window.addEventListener("load", loadEvent)