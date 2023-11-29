function toggleImageSize(image) {
    if (image.classList.contains('fullscreen')) {
      // If the image is already fullscreen, revert to normal size
      image.classList.remove('fullscreen');
    } else {
      // If the image is not fullscreen, make it fullscreen
      image.classList.add('fullscreen');
    }
  
    // Reset the size of the other images
    const images = document.querySelectorAll('.resizable-image');
    images.forEach((img) => {
      if (img !== image) {
        img.classList.remove('fullscreen');
      }
    });
  }
  