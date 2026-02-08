// Nozomi shared site utilities
(function(){
  // Inject favicon
  var link = document.createElement('link');
  link.rel = 'icon';
  link.type = 'image/svg+xml';
  link.href = '/favicon.svg';
  document.head.appendChild(link);

  // Fix old .html links to clean URLs
  document.querySelectorAll('a[href*="gtm.html"]').forEach(function(a){
    a.href = a.href.replace('gtm.html', 'gtm');
  });
  document.querySelectorAll('a[href*="positioning.html"]').forEach(function(a){
    a.href = a.href.replace('positioning.html', 'positioning');
  });
})();
