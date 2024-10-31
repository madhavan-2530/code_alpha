let currentImageIndex = 0;
const images = [
    'https://picsum.photos/800/600?1',
    'https://picsum.photos/800/600?2',
    'https://picsum.photos/800/600?3',
    'https://picsum.photos/800/600?4',
    'https://picsum.photos/800/600?5',
    'https://picsum.photos/800/600?6',
    'https://picsum.photos/800/600?7',
    'https://picsum.photos/800/600?8',
    'https://picsum.photos/800/600?8',
    'https://picsum.photos/800/600?9',
    'https://picsum.photos/800/600?10',
    'https://picsum.photos/800/600?11',
    'https://picsum.photos/800/600?12',
    'https://picsum.photos/800/600?13',
    'https://picsum.photos/800/600?14',
    'https://picsum.photos/800/600?15',
    'https://picsum.photos/800/600?16',
    'https://picsum.photos/800/600?17',
    'https://picsum.photos/800/600?18',
    'https://picsum.photos/800/600?19',
    'https://picsum.photos/800/600?20',

];


function openmodal(index) {
    currentImageIndex = index;
    document.getElementById('modal-image').src = images[currentImageIndex-1];
    document.getElementById('imageModal').style.display = "flex";
}
function closeModal() {
    document.getElementById('imageModal').style.display = "none";
}
function prevImage() {
    currentImageIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
    document.getElementById('modal-image').src = images[currentImageIndex];
}
function nextImage() {
    currentImageIndex = (currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1;
    document.getElementById('modal-image').src = images[currentImageIndex];
}
