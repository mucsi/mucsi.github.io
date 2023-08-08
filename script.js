let photos = [{
    photo: 'images/Gallery/1.png',
    title: 'Dice Fantasy',
    description: 'People on colorful rocks'
}, {
    photo: 'images/Gallery/2.png',
    title: 'Dice Fantasy 2',
    description: 'Hiker on a giant die'
}, {
    photo: 'images/Gallery/3.png',
    title: 'Dice Fantasy 3',
    description: 'Dice and people fall from the mountain'
}, {
    photo: 'images/Gallery/4.png',
    title: 'Dice Fantasy 4',
    description: 'Dice people walking on a mountain'
}, {
    photo: 'images/Gallery/5.png',
    title: 'The photographer',
    description: 'A blue ox is taking photos'
}
];
let currentImage = 0;
refresh();

function leftArrow() {
    if (currentImage < 1) {
        currentImage = 5;
    }
    currentImage = currentImage - 1;
    refresh();
}

function rightArrow() {
    if (currentImage > 3) {
        currentImage = -1;
    }
    currentImage = currentImage + 1;
    refresh();
}

function refresh() {
    document.getElementById("mainImage").src = photos[currentImage].photo;
    document.getElementById("photo-title").textContent = photos[currentImage].title;
    document.getElementById("photo-description").textContent = photos[currentImage].description;
}

function show(parameter1) {
    currentImage = parameter1 - 1;
    refresh();
}

loadThumbnails();

function loadThumbnails() {
    for (let i = 1; i <= 5; i++) {
        let imagePath = "images/Gallery/" + i + ".png";
        let scriptParameter = "show(" + i + ")";
        let imageId = "image" + i;
        var z = document.createElement("DIV");
        z.setAttribute("class", "thumbnailContainer");
        z.setAttribute("id", imageId);
        document.getElementById("footer").appendChild(z);

        var x = document.createElement("IMG");
        x.setAttribute("src", imagePath);
        x.setAttribute("class", "thumbnail");
        
        x.setAttribute("onclick", scriptParameter);
        document.getElementById(imageId).appendChild(x);

        var y = document.createElement("h2");
        y.textContent = photos[i-1].title;
        y.setAttribute("class", "thumbnailText");
        document.getElementById(imageId).appendChild(y);
    }
}

