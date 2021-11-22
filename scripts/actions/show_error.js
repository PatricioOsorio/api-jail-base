export default function showError() {
  const $error = document.querySelector('.error');

  // Muestra el error
  $error.classList.remove('hidden');
  setTimeout(() => {
    $error.classList.add('hidden');
  }, 3000); // 3000 milisegundos
}
