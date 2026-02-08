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

  // Fix old .html links to clean URLs
  document.querySelectorAll('a[href*="gtm.html"]').forEach(function(a){
    a.href = a.href.replace('gtm.html', 'gtm');
  });
  document.querySelectorAll('a[href*="positioning.html"]').forEach(function(a){
    a.href = a.href.replace('positioning.html', 'positioning');
  });
})();
