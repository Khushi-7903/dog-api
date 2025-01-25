const img = document.querySelector("img")
const api = "https://dog.ceo/api/breeds/image/random";
fetch(api).then(res => res.json())
.then(data => {

    const dogimg = data.message;
    console.log(dogimg);
    
    img.src = dogimg;
})