document.querySelectorAll('.copy-button').forEach((button) => {
  button.addEventListener('click', async () => {
    const code = button.parentElement.querySelector('code').innerText;
    try { await navigator.clipboard.writeText(code); button.textContent = 'Copiado'; }
    catch { button.textContent = 'Seleccioná el texto'; }
    setTimeout(() => { button.textContent = 'Copiar'; }, 1600);
  });
});
