// ---------- FALLBACK DATA ----------

const categories = [
  {
    name: 'Naturally Sourced',
    description: 'Carefully selected ingredients inspired by nature.',
    icon: 'assets/icons/magic-wand.svg',
  },
  {
    name: 'Gentle Formulas',
    description:
      'Thoughtfully formulated for a soft, comfortable everyday skincare experience.',
    icon: 'assets/icons/balloon.svg',
  },
  {
    name: 'Made with Care',
    description:
      'Every formula is created with attention to quality, texture and feel.',
    icon: 'assets/icons/people.svg',
  },
  {
    name: 'Skin-loving',
    description:
      'Simple, effective products designed to support your daily routine.',
    icon: 'assets/icons/coupon.svg',
  },
  {
    name: 'Consciously created',
    description:
      'A mindful approach to beauty, from formulation to the final product.',
    icon: 'assets/icons/gift.svg',
  },
];

const events = [
  {
    id: 1,
    title: 'Build Your Everyday Skincare Ritual',
    category: 'Special Event',
    date: '07.07.26. - 13.07.26.',
    startDate: '2026-07-07',
    image: 'assets/images/event-thumb.webp',
    description:
      'Discover naturally inspired essentials designed to become part of your everyday ritual.',
  },
  {
    id: 2,
    title: 'Understanding Your Skin Barrier',
    category: 'Workshop',
    date: '14.07.26. - 16.07.26.',
    startDate: '2026-07-14',
    image: 'assets/images/event-thumb.webp',
    description:
      'Discover naturally inspired essentials designed to become part of your everyday ritual.',
  },
  {
    id: 3,
    title: 'The Power of Plant-Based Ingredients',
    category: 'Online',
    date: '21.07.26. - 23.07.26.',
    startDate: '2026-07-21',
    image: 'assets/images/event-thumb.webp',
    description:
      'Discover naturally inspired essentials designed to become part of your everyday ritual.',
  },
  {
    id: 4,
    title: 'Build Your Everyday Skincare Ritual',
    category: 'Special Event',
    date: '28.07.26. - 03.08.26.',
    startDate: '2026-07-28',
    image: 'assets/images/event-thumb.webp',
    description:
      'Discover naturally inspired essentials designed to become part of your everyday ritual.',
  },
  {
    id: 5,
    title: 'Understanding Your Skin Barrier',
    category: 'Workshop',
    date: '04.08.26. - 06.08.26.',
    startDate: '2026-08-04',
    image: 'assets/images/event-thumb.webp',
    description:
      'Discover naturally inspired essentials designed to become part of your everyday ritual.',
  },
  {
    id: 6,
    title: 'The Power of Plant-Based Ingredients',
    category: 'Online',
    date: '11.08.26. - 13.08.26.',
    startDate: '2026-08-11',
    image: 'assets/images/event-thumb.webp',
    description:
      'Discover naturally inspired essentials designed to become part of your everyday ritual.',
  },
];

const articles = [
  {
    title: 'Why your skin barrier matters',
    description:
      'Simple ways to support stronger, healthier-looking skin every day.',
    image: 'assets/images/hero.webp',
  },
  {
    title: 'Why your skin barrier matters',
    description:
      'Simple ways to support stronger, healthier-looking skin every day.',
    image: 'assets/images/journal1.webp',
  },
  {
    title: 'Why your skin barrier matters',
    description:
      'Simple ways to support stronger, healthier-looking skin every day.',
    image: 'assets/images/event.webp',
  },
  {
    title: 'Why your skin barrier matters',
    description:
      'Simple ways to support stronger, healthier-looking skin every day.',
    image: 'assets/images/journal2.webp',
  },
  {
    title: 'Why your skin barrier matters',
    description:
      'Simple ways to support stronger, healthier-looking skin every day.',
    image: 'assets/images/hero.webp',
  },
  {
    title: 'Why your skin barrier matters',
    description:
      'Simple ways to support stronger, healthier-looking skin every day.',
    image: 'assets/images/journal1.webp',
  },
];

// ---------- HEADER ----------

const header = document.querySelector('header');
const newsDropdown = document.querySelector('.news-dropdown');
const newsBtn = document.querySelector('.news button');
const newsNavItem = document.querySelector('.news');

const languageDropdown = document.querySelector('.language-dropdown');
const languageBtn = document.querySelector('.language-btn');
const languageNavItem = document.querySelector('.language');
const languageCurrent = document.querySelector('.language-current');
const languageCheck = document.querySelector('.language-dropdown img');

const hamburgerBtn = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

const navOverlay = document.querySelector('.nav-overlay');

const setupDropdown = (btn, dropdown) => {
  btn.addEventListener('click', () => {
    const isOpen = dropdown.classList.toggle('show');
    btn.setAttribute('aria-expanded', isOpen);
  });
};

const closeDropdown = (btn, dropdown) => {
  dropdown.classList.remove('show');
  btn.setAttribute('aria-expanded', false);
};

window.addEventListener('click', (e) => {
  if (!newsNavItem.contains(e.target)) {
    closeDropdown(newsBtn, newsDropdown);
  }

  if (!languageNavItem.contains(e.target)) {
    closeDropdown(languageBtn, languageDropdown);
  }
});

window.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;

  if (newsDropdown.contains(document.activeElement)) newsBtn.focus();
  if (languageDropdown.contains(document.activeElement)) languageBtn.focus();

  closeDropdown(newsBtn, newsDropdown);
  closeDropdown(languageBtn, languageDropdown);

  if (navList.classList.contains('open')) {
    closeMenu();
    hamburgerBtn.focus();
  }
});

setupDropdown(newsBtn, newsDropdown);
setupDropdown(languageBtn, languageDropdown);

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 50);
});

// ---------- LANGUAGE ----------

languageDropdown.addEventListener('click', (e) => {
  const btn = e.target.closest('button');
  if (!btn) return;

  languageCurrent.textContent = btn.textContent.trim();
  btn.appendChild(languageCheck);

  closeDropdown(languageBtn, languageDropdown);

  localStorage.setItem('lang', btn.textContent.trim());
});

const savedLanguage = localStorage.getItem('lang');
if (savedLanguage) {
  const btn = [...languageDropdown.querySelectorAll('button')].find(
    (button) => button.textContent.trim() === savedLanguage,
  );
  if (btn) {
    languageCurrent.textContent = savedLanguage;
    btn.appendChild(languageCheck);
  }
}

// ---------- MOBILE NAV ----------

const closeMenu = () => {
  navList.classList.remove('open');
  hamburgerBtn.setAttribute('aria-expanded', false);
  closeDropdown(newsBtn, newsDropdown);
};

hamburgerBtn.addEventListener('click', () => {
  const isOpen = navList.classList.toggle('open');
  hamburgerBtn.setAttribute('aria-expanded', isOpen);
});

navList.addEventListener('click', (e) => {
  if (!e.target.closest('a')) return;

  closeMenu();
});

navOverlay.addEventListener('click', closeMenu);

const mobileBreakpoint = window.matchMedia('(max-width: 1150px)');

mobileBreakpoint.addEventListener('change', closeMenu);

// ---------- MODALS ----------

const setupModal = (modal) => {
  const closeBtn = modal.querySelector('.modal-close');
  closeBtn.addEventListener('click', () => modal.close());

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.close();
    }
  });
};

document.querySelectorAll('.modal').forEach(setupModal);

// ---------- SEARCH ----------

const searchBtn = document.querySelector('.search-btn');
const searchModal = document.querySelector('#search-modal');
const searchInput = document.querySelector('.search-input');
const searchResults = document.querySelector('.search-results');
const searchMessage = document.querySelector('.search-message');

searchBtn.addEventListener('click', () => {
  searchModal.showModal();
});

searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim().toLowerCase();

  if (!query) {
    searchResults.innerHTML = '';
    searchMessage.textContent = '';
    return;
  }

  const foundEvents = eventsData.filter((event) =>
    event.title.toLowerCase().includes(query),
  );

  const foundArticles = articlesData.filter((article) =>
    article.title.toLowerCase().includes(query),
  );

  if (foundEvents.length === 0 && foundArticles.length === 0) {
    searchMessage.textContent = `No results for "${searchInput.value.trim()}"`;
    searchResults.innerHTML = '';
    return;
  }

  searchMessage.textContent = '';

  const eventsHtml = foundEvents
    .map((event) => `<li><span>Event</span>${event.title}</li>`)
    .join('');

  const articlesHtml = foundArticles
    .map((article) => `<li><span>Journal</span>${article.title}</li>`)
    .join('');

  searchResults.innerHTML = eventsHtml + articlesHtml;
});

searchModal.addEventListener('close', () => {
  searchInput.value = '';
  searchResults.innerHTML = '';
  searchMessage.textContent = '';
});

// ---------- LOGIN ----------

const loginBtn = document.querySelector('.login-btn');
const loginModal = document.querySelector('#login-modal');
const loginForm = document.querySelector('.login-form');
const loginEmail = document.querySelector('#login-email');
const loginPassword = document.querySelector('#login-password');
const loginEmailError = document.querySelector('#login-email-error');
const loginPasswordError = document.querySelector('#login-password-error');

loginBtn.addEventListener('click', () => {
  loginModal.showModal();
});

loginModal.addEventListener('close', () => {
  loginForm.reset();
  loginEmailError.textContent = '';
  loginPasswordError.textContent = '';
  loginEmail.removeAttribute('aria-invalid');
  loginPassword.removeAttribute('aria-invalid');
});

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const { valueMissing, typeMismatch } = loginEmail.validity;

  let emailError = '';
  if (valueMissing) {
    emailError = 'Please enter your email address.';
  } else if (typeMismatch) {
    emailError = 'Please enter a valid email address.';
  }

  let passwordError = '';
  if (loginPassword.validity.valueMissing) {
    passwordError = 'Please enter your password.';
  }

  loginEmailError.textContent = emailError;
  loginEmail.setAttribute('aria-invalid', Boolean(emailError));

  loginPasswordError.textContent = passwordError;
  loginPassword.setAttribute('aria-invalid', Boolean(passwordError));

  if (emailError) {
    loginEmail.focus();
    return;
  }

  if (passwordError) {
    loginPassword.focus();
    return;
  }

  showToast('Logged in.');
  loginModal.close();
});

// ---------- DATA LOADING ----------

const loadData = async (url, fallback) => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to load ${url}`);
    return await response.json();
  } catch (error) {
    console.error(`Error loading ${url}:`, error);
    return fallback;
  }
};

// ---------- CATEGORIES ----------

const categoriesContainer = document.querySelector('.categories-list');

const renderCategories = (categories) => {
  if (categories.length === 0) {
    categoriesContainer.innerHTML = '<p>No categories available.</p>';
    return;
  }

  categoriesContainer.innerHTML = categories
    .map(
      (category) => `<div class="category">
        <span><img src="${category.icon}" alt="" /></span>
        <h3>${category.name}</h3>
        <p>${category.description}</p>
      </div>`,
    )
    .join('');
};

const loadCategories = async () => {
  categoriesContainer.innerHTML = '<p>Loading categories...</p>';
  const categoriesData = await loadData('data/categories.json', categories);
  renderCategories(categoriesData);
};

loadCategories();

// ---------- EVENTS ----------

const eventsContainer = document.querySelector('.events-list');
const eventsBtn = document.querySelector('.events-btn');
const eventsBtnText = document.querySelector('.events-btn span');
const categorySelect = document.querySelector('#events-category');
const sortSelect = document.querySelector('#events-sort');

let eventsData = [];
let showAll = false;

const loadEvents = async () => {
  eventsContainer.innerHTML = '<li>Loading events...</li>';
  eventsData = await loadData('data/events.json', events);
  renderEvents();
};

const renderEvents = () => {
  const selectedCategory = categorySelect.value;
  const selectedSort = sortSelect.value;

  const filteredEvents = eventsData
    .filter(
      (event) =>
        selectedCategory === 'all' || event.category === selectedCategory,
    )
    .sort((a, b) =>
      selectedSort === 'asc'
        ? new Date(a.startDate) - new Date(b.startDate)
        : new Date(b.startDate) - new Date(a.startDate),
    );

  eventsBtn.hidden = filteredEvents.length <= 4;

  if (filteredEvents.length === 0) {
    eventsContainer.innerHTML = '<li>No events available.</li>';
    return;
  }

  const visibleEvents = showAll ? filteredEvents : filteredEvents.slice(0, 4);

  eventsContainer.innerHTML = visibleEvents
    .map(
      (event) => `<li class="event">
        <img src="${event.image}" alt="" loading="lazy" />
        <div class="event-info">
          <div>
            <span class="event-tag">${event.category}</span>
            <span class="event-date">${event.date}</span>
            <a href="/events/${event.id}" class="event-more">
              See more
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M16.6583 9.98332H4.16667"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke="currentColor"
                />
                <path
                  d="M11.6558 4.98999L16.665 9.99999L11.6558 15.01"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke="currentColor"
                />
              </svg>
            </a>
          </div>
          <h3>${event.title}</h3>
          <p>${event.description}</p>
        </div>
      </li>`,
    )
    .join('');
};

loadEvents();

categorySelect.addEventListener('change', renderEvents);
sortSelect.addEventListener('change', renderEvents);

eventsBtn.addEventListener('click', () => {
  showAll = !showAll;
  const btnText = showAll ? 'View less' : 'View all';
  eventsBtnText.textContent = btnText;
  renderEvents();
});

// ---------- JOURNAL ----------

const journalGrid = document.querySelector('.journal-grid');

let articlesData = [];

const loadArticles = async () => {
  journalGrid.innerHTML = '<li>Loading articles...</li>';
  articlesData = await loadData('data/articles.json', articles);
  renderArticles();
};

const renderArticles = () => {
  if (articlesData.length === 0) {
    journalGrid.innerHTML = '<li>No articles available.</li>';
    return;
  }

  journalGrid.innerHTML = articlesData
    .slice(0, 4)
    .map(
      (article, index) => `<li class="journal-card">
        <img src="${article.image}" alt="" loading="lazy" />
        <div class="journal-card-content">
          <h3>
            <button type="button" class="journal-card-btn" data-index="${index}">
              ${article.title}
            </button>
          </h3>
          <p>${article.description}</p>
        </div>
        <svg
          class="journal-card-arrow"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M16.6583 9.98332H4.16667"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke="currentColor"
          />
          <path
            d="M11.6558 4.98999L16.665 9.99999L11.6558 15.01"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke="currentColor"
          />
        </svg>
      </li>`,
    )
    .join('');
};

loadArticles();

const journalModal = document.querySelector('#journal-modal');
const journalModalContent = journalModal.querySelector('.modal-content');
const journalBtn = document.querySelector('.journal-btn');

const openJournalModal = (html) => {
  journalModalContent.innerHTML = html;
  journalModal.showModal();
};

// Article details

journalGrid.addEventListener('click', (e) => {
  const btn = e.target.closest('.journal-card-btn');
  if (!btn) return;

  const article = articlesData[btn.dataset.index];

  openJournalModal(`
    <img src="${article.image}" alt="" />
    <h2 id="journal-modal-title">${article.title}</h2>
    <p>${article.description}</p>
  `);
});

// View all articles

journalBtn.addEventListener('click', () => {
  openJournalModal(`
    <h2 id="journal-modal-title">Journal</h2>
    <ul class="modal-list">
      ${articlesData
        .map(
          (article) => `<li>
            <img src="${article.image}" alt="" loading="lazy" />
            <div>
              <h3>${article.title}</h3>
              <p>${article.description}</p>
            </div>
          </li>`,
        )
        .join('')}
    </ul>
  `);
});

// ---------- NEWSLETTER ----------

const newsletterForm = document.querySelector('.newsletter-form');
const newsletterInput = document.querySelector('.newsletter-form input');
const newsletterBtn = document.querySelector('.newsletter-form button');
const newsletterMessage = document.querySelector('.newsletter-message');

const showNewsletterMessage = (text, type = '') => {
  newsletterMessage.textContent = text;
  newsletterMessage.classList.toggle('error', type === 'error');
  newsletterMessage.classList.toggle('success', type === 'success');
};

newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const { valueMissing, typeMismatch } = newsletterInput.validity;

  let errorText = '';
  if (valueMissing) {
    errorText = 'Please enter your email address.';
  } else if (typeMismatch) {
    errorText = 'Please enter a valid email address.';
  }

  if (errorText) {
    showNewsletterMessage(errorText, 'error');
    newsletterInput.setAttribute('aria-invalid', true);
    newsletterInput.focus();
    return;
  }

  newsletterInput.setAttribute('aria-invalid', false);
  showNewsletterMessage('');
  newsletterBtn.disabled = true;
  newsletterBtn.textContent = 'Sending...';

  setTimeout(() => {
    showNewsletterMessage('Thank you for subscribing!', 'success');
    newsletterForm.reset();

    newsletterBtn.disabled = false;
    newsletterBtn.textContent = 'Subscribe';
  }, 1500);
});

newsletterInput.addEventListener('input', () => {
  newsletterInput.removeAttribute('aria-invalid');
  showNewsletterMessage('');
});

// ---------- TOAST ----------

const toast = document.querySelector('.toast');
let toastTimeout;

const showToast = (message) => {
  toast.textContent = message;
  toast.classList.add('show');

  clearTimeout(toastTimeout);

  toastTimeout = setTimeout(() => toast.classList.remove('show'), 3000);
};

document.addEventListener('click', (e) => {
  const link = e.target.closest('a');
  if (!link) return;

  if (link.getAttribute('href').startsWith('#')) return;

  e.preventDefault();

  const name = link.textContent.trim() || link.getAttribute('aria-label');
  showToast(`${name} is not available in this demo.`);
});

// ---------- SCROLL ANIMATIONS ----------

const revealSections = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.2,
  },
);

revealSections.forEach((section) => {
  observer.observe(section);
});
