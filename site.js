// Nozomi shared site utilities
// Inject favicon
(function(){
  var link = document.createElement('link');
  link.rel = 'icon';
  link.type = 'image/svg+xml';
  link.href = '/favicon.svg';
  document.head.appendChild(link);
  // Also add apple touch icon fallback
  var apple = document.createElement('link');
  apple.rel = 'apple-touch-icon';
  apple.href = '/favicon.svg';
  document.head.appendChild(apple);
})();
