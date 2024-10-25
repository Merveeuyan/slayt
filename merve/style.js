let currentImageIndex = 1;

document.getElementById('previousButton').addEventListener("click", function() {
    
    currentImageIndex = (currentImageIndex > 1) ? currentImageIndex - 1 : 10;
    updateImage(); 
});

document.getElementById('nextButton').addEventListener('click', function() {
    
    currentImageIndex = (currentImageIndex < 10) ? currentImageIndex + 1 : 10;
    updateImage(); 
});


function updateImage() {
    const url = `https://picsum.photos/800/400?random=${currentImageIndex}`; 
    fetch(url) 
        .then(response => {
            if (!response.ok) { 
                throw new Error('Resim yüklenemedi');
            }
            return response.url;
        })
        .then(imageURL => {
           
            document.getElementById('galleryImage').src = imageURL;
        })
        .catch(error => {
           
            document.getElementById('galleryImage').alt = 'Görsel yüklenemedi';
            console.error('Hata:', error);
        });
};