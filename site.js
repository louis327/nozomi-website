// Nozomi shared site utilities
(function(){
  // Inject favicon (PNG)
  var link = document.createElement('link');
  link.rel = 'icon';
  link.type = 'image/png';
  link.href = '/favicon.png';
  document.head.appendChild(link);

  // Also set as apple-touch-icon
  var apple = document.createElement('link');
  apple.rel = 'apple-touch-icon';
  apple.href = '/favicon.png';
  document.head.appendChild(apple);

  // Global light mode text fix — apply to ALL pages
  var globalStyle = document.createElement('style');
  globalStyle.textContent = '[data-theme="light"]{--text-secondary:rgba(0,0,0,0.8)!important;--text-tertiary:rgba(0,0,0,0.5)!important}[data-theme="light"] .prose p{color:rgba(0,0,0,0.85)!important}[data-theme="light"] .prose p.highlight{color:#000!important}[data-theme="light"] .prose p.dim{color:rgba(0,0,0,0.5)!important}';
  document.head.appendChild(globalStyle);

  // Inject sales page enhancements CSS on GTM and Positioning pages
  var path = window.location.pathname;
  if (path.indexOf('/gtm') !== -1 || path.indexOf('/positioning') !== -1) {
    var css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = '/sales-enhancements.css';
    if (document.head.firstChild) {
      document.head.insertBefore(css, document.head.firstChild);
    } else {
      document.head.appendChild(css);
    }
  }

  // Fix old .html links to clean URLs
  document.querySelectorAll('a[href*="gtm.html"]').forEach(function(a){
    a.href = a.href.replace('gtm.html', 'gtm');
  });
  document.querySelectorAll('a[href*="positioning.html"]').forEach(function(a){
    a.href = a.href.replace('positioning.html', 'positioning');
  });
})();
