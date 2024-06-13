document.addEventListener('DOMContentLoaded', function () {
  const toggleButtons = document.querySelectorAll('[id^="toggleButton"]');
  const toggleContents = document.querySelectorAll('[id^="toggleContent"]');
  const mainImage = document.querySelector('.range-container img');

  const oneSideImages = [
    'https://imzo.uz/uploads/configurator/single/image_1_1.svg',
    'https://imzo.uz/uploads/configurator/single/image_1_2.svg',
    'https://imzo.uz/uploads/configurator/single/image_1_2.svg',
    'https://imzo.uz/uploads/configurator/single/image_1_3.svg',
    'https://imzo.uz/uploads/configurator/single/image_1_3.svg'
  ];

  toggleButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      toggleContents.forEach((content, contentIndex) => {
        if (index === contentIndex) {
          content.classList.toggle('hidden');
        } else {
          content.classList.add('hidden');
        }
      });
    });
  });

  // Handle image clicks inside toggleContent1
  document.getElementById('toggleContent1').addEventListener('click', function(event) {
    if (event.target.tagName === 'IMG') {
      const imageId = event.target.id;
      switch (imageId) {
        case 'image1':
          mainImage.src = oneSideImages[0];
          break;
        case 'image2':
          mainImage.src = oneSideImages[1];
          break;
        case 'image3':
          mainImage.src = oneSideImages[2];
          break;
        case 'image4':
          mainImage.src = oneSideImages[3];
          break;
        case 'image5':
          mainImage.src = oneSideImages[4];
          break;
        default:
          break;
      }
    }
  });
});
