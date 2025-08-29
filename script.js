// Tabs toggling for Portfolio
document.querySelectorAll('.tab-btn').forEach(button => {
  button.addEventListener('click', () => {
    const tab = button.dataset.tab;
    // Toggle active button
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    // Toggle tab content
    document.querySelectorAll('.tab-content').forEach(content => {
      content.classList.remove('active');
      if (content.id === tab) content.classList.add('active');
    });
  });
});

// Animate skill bars on page load
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.skill-bar-fill').forEach(bar => {
    const percent = bar.getAttribute('data-percent');
    setTimeout(() => {
      bar.style.width = percent + '%';
    }, 400);
  });


// Simple contact form handler (can be expanded for backend integration)
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    form.reset();
  });
}
});