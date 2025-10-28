document.getElementById("btn").addEventListener("click", () => {
  const msg = document.getElementById("message");
  msg.classList.toggle("hidden");
});
const emailLink = document.querySelector('.email a');

emailLink.addEventListener('click', (e) => {
  e.preventDefault();
  navigator.clipboard.writeText(emailLink.textContent);
  alert('تم نسخ البريد الإلكتروني 💌');
});
