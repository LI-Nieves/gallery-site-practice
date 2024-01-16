const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const fileNames = ["pic1","pic2","pic3","pic4","pic5"];

/* Declaring the alternative text for each image file */
const altText = ["Close-up of human eye","Rock","Flowers","Heiroglyphics","Butterfly"];

/* Looping through images */
for (let i=0; i < fileNames.length; i++) {
    const image = fileNames[i];
    const newImage = document.createElement('img');
    // newImage.setAttribute('src', `images/${image}.jpg`);
    newImage.setAttribute('src', `${image}.jpg`);
    newImage.setAttribute('alt', altText[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click", () => {
        displayedImage.setAttribute("src",newImage.getAttribute("src"));
        displayedImage.setAttribute("alt",newImage.getAttribute("alt"));
    });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", () => {
    if (btn.getAttribute("class") === "dark") {
        btn.setAttribute("class","light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
    } else {
        btn.setAttribute("class","dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
    }
})
