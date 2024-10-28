let currentImageIndex = 0;
const images = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const overlay = document.getElementById('overlay');




function closeLightbox() {
    lightbox.style.display = 'none';
    document.body.classList.remove('blur');
    overlay.style.display = 'none';
}


// Add captions for each image
const captions = [
    "Caption for Image 1",
    "Caption for Image 2",
    "Caption for Image 3",
    "Caption for Image 4"
];

images.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentImageIndex = index;
        openLightbox(img.src, captions[index]);
    });
});

function openLightbox(src, caption) {
    lightbox.style.display = 'flex';
    lightboxImg.src = src;
    document.body.classList.add('blur');
    overlay.style.display = 'block'; // Show the overlay
}

function changeImage(direction) {
    currentImageIndex += direction;

    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1; // Loop to the last image
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0; // Loop to the first image
    }

    lightboxImg.src = images[currentImageIndex].src; // Update lightbox image
    
}
