// Small progressive enhancements; the pages and contact links work without JS.
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const galleryImage = document.getElementById('gallery-image');
const galleryCaption = document.getElementById('gallery-caption');
const galleryButtons = [...document.querySelectorAll('.gallery-thumb')];
galleryButtons.forEach(button => button.addEventListener('click', () => {
  galleryImage.src = button.dataset.image;
  galleryImage.alt = button.dataset.alt;
  galleryCaption.textContent = button.dataset.caption;
  galleryButtons.forEach(item => {
    const selected = item === button;
    item.classList.toggle('is-active', selected);
    item.setAttribute('aria-pressed', String(selected));
  });
}));

const dialog = document.querySelector('.screenshot-dialog');
const enlarge = document.querySelector('.gallery-enlarge');
if (dialog && enlarge && typeof dialog.showModal === 'function') {
  enlarge.addEventListener('click', () => {
    const image = dialog.querySelector('img');
    image.src = galleryImage.src;
    image.alt = galleryImage.alt;
    dialog.querySelector('p').textContent = galleryCaption.textContent;
    dialog.showModal();
  });
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
}
