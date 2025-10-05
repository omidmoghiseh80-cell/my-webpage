// Attach header component dynamically and keep future hooks
(function () {
  // Mount header component if found
  const headerMount = document.getElementById('site-header');
  if (headerMount) {
    fetch('./components/header.html')
      .then((res) => res.text())
      .then((html) => {
        headerMount.innerHTML = html;
      })
      .catch(() => {
        // Silent fail: page still works without header component
      });
  }
})();