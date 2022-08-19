const dog = document.getElementById("dog");
const cat = document.getElementById("cat");


const makerequest = async () => {
    console.log("button clicked");
    try {
        const dogimg = await axios.get("https://dog.ceo/api/breeds/image/random")
        dog.setAttribute('src', dogimg.data.message)
        const catimg = await axios.get("https://api.thecatapi.com/v1/images/search")
        cat.setAttribute('src', catimg.data[0].url)
        console.log(catimg);
    } catch (error) {
        console.log(error)
    }
}

document.getElementById('btn').addEventListener('click', makerequest);
