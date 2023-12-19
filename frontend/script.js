const loadEvent = async function(){
    // Selectors
    const mediaContainerElement = document.getElementById("media-container")
    const titleElement = document.getElementById("article-title")
    const explanationElement = document.getElementById("article-explanation")

    // Fetch the today's data
    const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    const responseJson = await response.json()
    console.log(responseJson)

    // Define the media content: image or video
    const mediaContent = imgOrIframe ()
    function imgOrIframe () {
        if (responseJson.media_type === "video") {
            return `<iframe src="${responseJson.url}">`
        }
        return `<img src="${responseJson.hdurl}">`
    }

    // Insert the media content, title and explanation
    mediaContainerElement.insertAdjacentHTML("beforeend", mediaContent)
    titleElement.insertAdjacentHTML("beforeend", responseJson.title)
    explanationElement.insertAdjacentHTML("beforeend", responseJson.explanation)
}

window.addEventListener("load", loadEvent)