// Initialize Lucide icons
if (window.lucide) {
  lucide.createIcons();
}

// --- Theme Management ---
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Persistence check
if (localStorage.getItem('theme') === 'light') {
  htmlElement.classList.remove('dark');
} else {
  htmlElement.classList.add('dark');
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isDark = htmlElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}

// --- API Live Data Integration ---
const apiContainer = document.getElementById('api-content');
const refreshBtn = document.getElementById('refresh-api');

async function fetchEthioTime() {
  if (!apiContainer) return;

  try {
    apiContainer.innerHTML = `
      <div class="animate-pulse space-y-6">
        <div class="h-16 bg-slate-100 dark:bg-slate-800 rounded-2xl w-3/4"></div>
        <div class="h-10 bg-slate-100 dark:bg-slate-800 rounded-2xl w-1/2"></div>
      </div>
    `;

    const [dateRes, timeRes] = await Promise.all([
      fetch('https://api.ethioall.com/date/api').then(r => r.json()),
      fetch('https://api.ethioall.com/time/api').then(r => r.json())
    ]);

    const hours = timeRes.ethiopian_time.hour;
    const minutes = timeRes.ethiopian_time.minute.toString().padStart(2, '0');
    const period = timeRes.ethiopian_time.period_amharic;

    apiContainer.innerHTML = `
      <div class="flex flex-col gap-2">
        <h3 class="text-5xl md:text-7xl font-black font-ethiopic text-yellow-500">
          ${dateRes.month_amharic} ${dateRes.date}
        </h3>
        <p class="text-2xl md:text-3xl font-ethiopic text-slate-500 font-bold">
          ${dateRes.day_amharic}, ${dateRes.year}
        </p>
      </div>
      <div class="flex items-center gap-3 px-6 py-3 rounded-2xl bg-red-500 text-white font-black text-2xl font-ethiopic w-fit shadow-lg">
        <i data-lucide="clock" class="w-6 h-6"></i>
        ${hours}:${minutes} ${period}
      </div>
    `;

    if (window.lucide) lucide.createIcons();

  } catch (error) {
    console.error('API Error:', error);
    apiContainer.innerHTML = `
      <div class="p-8 rounded-2xl bg-red-500/10 border border-red-500/20 text-center">
        <h4 class="font-bold text-red-500 mb-2">API Connection Failed</h4>
        <p class="text-sm text-slate-500">Could not fetch live data.</p>
        <button onclick="window.location.reload()" class="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg text-xs font-bold">Retry</button>
      </div>
    `;
  }
}

if (refreshBtn) {
  refreshBtn.addEventListener('click', fetchEthioTime);
}

// Initial Fetch
fetchEthioTime();

// --- FAQ Accordion ---
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
  const btn = item.querySelector('button');
  if (btn) {
    btn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isActive) item.classList.add('active');
    });
  }
});

// --- Scroll Reveal ---
const reveals = document.querySelectorAll('.reveal');
function reveal() {
  reveals.forEach(r => {
    const windowHeight = window.innerHeight;
    const revealTop = r.getBoundingClientRect().top;
    const revealPoint = 150;
    if (revealTop < windowHeight - revealPoint) {
      r.classList.add('active');
    }
  });
}
window.addEventListener('scroll', reveal);
reveal(); // Run once on load
