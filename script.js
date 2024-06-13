document.addEventListener('DOMContentLoaded', function () {
  const toggleButtons = document.querySelectorAll('[id^="toggleButton"]');
  const toggleContents = document.querySelectorAll('[id^="toggleContent"]');

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
});
