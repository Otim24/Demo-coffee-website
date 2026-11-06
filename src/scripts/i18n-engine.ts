// Complete Dynamic Translation Engine for Demo Coffee Exporters Ltd.
import { translations, commonPhrases } from './translations';

export function getPreferredLanguage(): string {
  if (typeof window === 'undefined') return 'en';
  return localStorage.getItem('demo_preferred_language') || 'en';
}

export function applyLanguage(lang: string) {
  if (typeof window === 'undefined') return;
  if (!translations[lang]) lang = 'en';

  localStorage.setItem('demo_preferred_language', lang);
  document.documentElement.lang = lang;

  // 1. Update Current Language Indicator in Header
  const currentCode = document.getElementById('current-lang-code');
  if (currentCode) {
    currentCode.textContent = lang.toUpperCase();
  }

  // 2. Update Checkmarks in Dropdown
  const options = document.querySelectorAll('.lang-option');
  options.forEach((opt) => {
    const optLang = opt.getAttribute('data-lang');
    const check = opt.querySelector('.active-check');
    if (check) {
      if (optLang === lang) {
        check.classList.remove('hidden');
      } else {
        check.classList.add('hidden');
      }
    }
  });

  // 3. Translate all elements with [data-i18n]
  const i18nElements = document.querySelectorAll('[data-i18n]');
  i18nElements.forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (!key) return;

    // Cache original English text on first pass
    if (!el.hasAttribute('data-i18n-orig')) {
      el.setAttribute('data-i18n-orig', el.textContent || '');
    }

    if (lang === 'en') {
      const orig = el.getAttribute('data-i18n-orig');
      if (orig !== null) el.textContent = orig;
    } else {
      const translated = translations[lang]?.[key];
      if (translated) {
        el.textContent = translated;
      }
    }
  });

  // 4. Translate all input placeholders with [data-i18n-placeholder]
  const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
  placeholderElements.forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (!key) return;

    const input = el as HTMLInputElement | HTMLTextAreaElement;
    if (!input.hasAttribute('data-orig-placeholder')) {
      input.setAttribute('data-orig-placeholder', input.placeholder || '');
    }

    if (lang === 'en') {
      const orig = input.getAttribute('data-orig-placeholder');
      if (orig !== null) input.placeholder = orig;
    } else {
      const translated = translations[lang]?.[key];
      if (translated) {
        input.placeholder = translated;
      }
    }
  });

  // 5. Deep DOM Text Node TreeWalker for complete site-wide translation
  const phrases = commonPhrases[lang] || {};

  if (document.body) {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let currentNode: Node | null;

    while ((currentNode = walker.nextNode())) {
      const parent = currentNode.parentElement;
      if (!parent) continue;

      // Skip scripts, styles, and language dropdown menu itself
      if (
        parent.tagName === 'SCRIPT' ||
        parent.tagName === 'STYLE' ||
        parent.closest('#language-switcher-container')
      ) {
        continue;
      }

      // If parent has data-i18n, step 3 has already handled it
      if (parent.hasAttribute('data-i18n')) {
        continue;
      }

      const text = currentNode.nodeValue;
      if (!text || !text.trim()) continue;

      const anyNode = currentNode as any;
      if (typeof anyNode.__origText !== 'string') {
        anyNode.__origText = text;
      }

      const origText = anyNode.__origText;
      const trimmed = origText.trim();

      if (lang === 'en') {
        currentNode.nodeValue = origText;
      } else if (phrases[trimmed]) {
        // Substitute matching trimmed phrase while preserving surrounding spacing
        currentNode.nodeValue = origText.replace(trimmed, phrases[trimmed]);
      }
    }
  }

  // 6. Broadcast event for reactive components (such as hero typewriter)
  window.dispatchEvent(new CustomEvent('demo:languagechange', { detail: { lang } }));
}

export function setupI18n() {
  if (typeof window === 'undefined') return;

  const switcherBtn = document.getElementById('lang-menu-button');
  const dropdown = document.getElementById('lang-dropdown-menu');
  const chevron = document.getElementById('lang-chevron');

  if (switcherBtn && dropdown) {
    function openMenu() {
      dropdown?.classList.remove('hidden');
      switcherBtn?.setAttribute('aria-expanded', 'true');
      chevron?.classList.add('rotate-180');
    }

    function closeMenu() {
      dropdown?.classList.add('hidden');
      switcherBtn?.setAttribute('aria-expanded', 'false');
      chevron?.classList.remove('rotate-180');
    }

    function toggleMenu() {
      if (dropdown?.classList.contains('hidden')) {
        openMenu();
      } else {
        closeMenu();
      }
    }

    // Toggle button handler
    switcherBtn.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggleMenu();
    };

    // Close on click outside
    document.addEventListener('click', (e) => {
      const target = e.target as Node;
      if (!dropdown.contains(target) && !switcherBtn.contains(target)) {
        closeMenu();
      }
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });

    // Language option click handlers
    const options = dropdown.querySelectorAll('.lang-option');
    options.forEach((opt) => {
      opt.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const selectedLang = opt.getAttribute('data-lang') || 'en';
        applyLanguage(selectedLang);
        closeMenu();
      });
    });
  }

  // Apply current language on initial load
  const currentLang = getPreferredLanguage();
  applyLanguage(currentLang);
}

// Auto-run on page load and View Transitions
if (typeof window !== 'undefined') {
  setupI18n();
  document.addEventListener('astro:page-load', setupI18n);
}
