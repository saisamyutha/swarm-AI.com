document.getElementById('searchBtn').addEventListener('click', function(event) {
  event.preventDefault(); // Prevents form submission and URL change

  const searchTerm = document.getElementById('searchInput').value.trim();
  const content = document.getElementById('content');
  const originalHTML = content.innerHTML.replace(/<\/?mark>/g, '');

  if (searchTerm === '') {
    content.innerHTML = originalHTML;
    return;
  }

  const safeTerm = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(safeTerm, 'gi');
  content.innerHTML = originalHTML.replace(regex, match => `<mark>${match}</mark>`);
});
