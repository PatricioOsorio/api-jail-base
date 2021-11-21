export default function showError() {
  const $error = document.querySelector('.error');

  $error.classList.remove('hidden');
  setTimeout(() => {
    $error.classList.add('hidden');
  }, 3000);
}
