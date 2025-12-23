// Initialize Lucide icons
lucide.createIcons();

// --- Theme Management ---
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Persistence check
if (localStorage.getItem('theme') === 'light') {
  htmlElement.classList.remove('dark');
} else {
  htmlElement.classList.add('dark');
}

themeToggle.addEventListener('click', () => {
  const isDark = htmlElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// --- API Live Data Integration ---
const apiContainer = document.getElementById('api-content');
const refreshBtn = document.getElementById('refresh-api');

async function fetchEthioTime() {
  try {
    // Show Loading State
    apiContainer.innerHTML = `
      <div class="animate-pulse space-y-6">
        <div class="h-16 bg-slate-100 dark:bg-slate-800 rounded-2xl w-3/4"></div>
        <div class="h-10 bg-slate-100 dark:bg-slate-800 rounded-2xl w-1/2"></div>
        <div class="h-8 bg-slate-100 dark:bg-slate-800 rounded-2xl w-1/3"></div>
      </div>
    `;

    const [dateRes, timeRes] = await Promise.all([
      fetch('https://api.ethioall.com/date/api').then(r => r.json()),
      fetch('https://api.ethioall.com/time/api').then(r => r.json())
    ]);

    // Format Time String
    const hours = timeRes.ethiopian_time.hour;
    const minutes = timeRes.ethiopian_time.minute.toString().padStart(2, '0');
    const period = timeRes.ethiopian_time.period_amharic;

    apiContainer.innerHTML = `
      <div class="flex flex-col gap-2">
        <h3 class="text-5xl md:text-7xl font-black font-ethiopic text-yellow-500 drop-shadow-sm">
          ${dateRes.month_amharic} ${dateRes.date}
        </h3>
        <p class="text-2xl md:text-3xl font-ethiopic text-slate-500 font-bold">
          ${dateRes.day_amharic}, ${dateRes.year}
        </p>
      </div>
      
      <div class="flex items-center gap-6">
        <div class="flex items-center gap-3 px-6 py-3 rounded-2xl bg-red-500 text-white font-black text-2xl font-ethiopic shadow-lg shadow-red-500/20">
          <i data-lucide="clock" class="w-6 h-6"></i>
          ${hours}:${minutes} ${period}
        </div>
        <div class="hidden sm:block text-slate-400 text-xs font-bold uppercase tracking-widest leading-tight">
          Current Ethiopian <br> Standard Time
        </div>
      </div>

      <div class="flex flex-wrap gap-2 pt-4">
        <span class="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-[10px] font-black uppercase text-slate-500 border border-slate-200 dark:border-slate-700">Month: ${dateRes.month_english}</span>
        <span class="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-[10px] font-black uppercase text-slate-500 border border-slate-200 dark:border-slate-700">Leap Year: Pagume 5</span>
      </div>
    `;

    // Re-initialize icons for dynamic content
    lucide.createIcons();

  } catch (error) {
    console.error('API Fetch Error:', error);
    apiContainer.innerHTML = `
      <div class="p-8 rounded-2xl bg-red-500/10 border border-red-500/20 text-center">
        <i data-lucide="alert-circle" class="w-10 h-10 text-red-500 mx-auto mb-4"></i>
        <h4 class="font-bold text-red-500 mb-2">API Connection Failed</h4>
        <p class="text-sm text-slate-500">We couldn't reach the servers. Please check your internet connection and try again.</p>
        <button onclick="window.location.reload()" class="mt-6 px-6 py-2 bg-red-500 text-white rounded-xl font-bold text-xs">Retry Now</button>
      </div>
    `;
    lucide.createIcons();
  }
}

refreshBtn.addEventListener('click', fetchEthioTime);
fetchEthioTime(); // Initial load

// --- FAQ Accordion Logic ---
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const btn = item.querySelector('button');
  btn.addEventListener('click', () => {
    // Check if current is already active
    const isActive = item.classList.contains('active');
    
    // Close all
    faqItems.forEach(i => i.classList.remove('active'));
    
    // Toggle current if it wasn't active
    if (!isActive) {
      item.classList.add('active');
    }
  });
});

// --- Smooth Scrolling for anchor links ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// --- Interaction Observer for Scroll Reveal ---
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('opacity-100', 'translate-y-0');
      entry.target.classList.remove('opacity-0', 'translate-y-10');
      revealObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
  section.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
  revealObserver.observe(section);
});
