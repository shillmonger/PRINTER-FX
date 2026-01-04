'use client';

interface ScrollToOptions {
  behavior?: 'auto' | 'smooth';
  block?: 'start' | 'center' | 'end' | 'nearest';
  inline?: 'start' | 'center' | 'end' | 'nearest';
}

export function scrollToSection(sectionId: string, options: ScrollToOptions = {}) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      ...options,
    });
    // Update URL without causing a page reload
    window.history.pushState({}, '', `#${sectionId}`);
    return true;
  }
  return false;
}

export function handleNavigationWithScroll(
  pathname: string,
  targetPath: string,
  sectionId: string,
  router: any,
  closeMobileMenu?: () => void
) {
  // Close mobile menu if open
  if (closeMobileMenu) {
    closeMobileMenu();
  }

  // If we're already on the target page, just scroll
  if (pathname === targetPath) {
    scrollToSection(sectionId);
    return;
  }

  // If we're navigating to a different page, first navigate then scroll
  router.push(`${targetPath}#${sectionId}`);
}
