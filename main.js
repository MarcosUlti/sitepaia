function scrollToContent(contentId) {
    var element = document.getElementById(contentId);
    element.style.display = 'block';
    element.scrollIntoView({ behavior: 'smooth' });
  }