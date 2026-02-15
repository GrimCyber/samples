const grid = document.getElementById('portfolio-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('portfolio-modal');
const modalMedia = document.getElementById('modal-media');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalTags = document.getElementById('modal-tags');

let items = [];

function createCard(item) {
  const card = document.createElement('article');
  card.className = 'portfolio-card';
  card.dataset.category = item.category;
  card.setAttribute('tabindex', '0');

  const mediaHTML = item.type === 'video'
    ? `<video preload="metadata" muted playsinline controlsList="nodownload" loading="lazy"><source src="${item.thumbnail || item.src}" type="video/mp4" /></video>`
    : `<img src="${item.thumbnail || item.src}" alt="${item.title}" loading="lazy" />`;

  card.innerHTML = `
    ${mediaHTML}
    <div class="portfolio-body">
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    </div>
  `;

  const open = () => openModal(item);
  card.addEventListener('click', open);
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      open();
    }
  });
  return card;
}

function render(data) {
  grid.innerHTML = '';
  data.forEach((item) => grid.appendChild(createCard(item)));
}

function filterCards(filter) {
  document.querySelectorAll('.portfolio-card').forEach((card) => {
    const show = filter === 'all' || card.dataset.category === filter;
    card.classList.toggle('is-hidden', !show);
    card.style.display = show ? 'block' : 'none';
  });
}

function openModal(item) {
  modalMedia.innerHTML = '';
  modalTitle.textContent = item.title;
  modalDescription.textContent = item.description;
  modalTags.innerHTML = '';

  item.tags.forEach((tag) => {
    const li = document.createElement('li');
    li.textContent = tag;
    modalTags.appendChild(li);
  });

  if (item.type === 'video') {
    modalMedia.innerHTML = `<video controls autoplay playsinline><source src="${item.src}" type="video/mp4" /></video>`;
  } else {
    modalMedia.innerHTML = `<img src="${item.src}" alt="${item.title}" />`;
  }

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  modalMedia.innerHTML = '';
  document.body.style.overflow = '';
}

if (grid) {
  fetch('./data/portfolio.json')
    .then((response) => response.json())
    .then((data) => {
      items = data.items;
      render(items);
    })
    .catch(() => {
      grid.innerHTML = '<p>Unable to load portfolio items. Please verify <code>data/portfolio.json</code>.</p>';
    });

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      filterButtons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
      filterCards(button.dataset.filter);
    });
  });

  modal.addEventListener('click', (event) => {
    if (event.target.dataset.close) closeModal();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });
}
