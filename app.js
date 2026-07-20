document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.copy-button').forEach((button) => {
    const live = document.createElement('span');
    live.className = 'sr-only';
    live.setAttribute('aria-live', 'polite');
    live.setAttribute('aria-atomic', 'true');
    button.closest('.code-block')?.append(live);

    button.addEventListener('click', async () => {
      const code = button.closest('.code-block')?.querySelector('code')?.innerText;
      if (!code) return;
      try {
        await navigator.clipboard.writeText(code);
        button.textContent = 'Copiado';
        live.textContent = 'Comando copiado al portapapeles';
      } catch {
        button.textContent = 'Seleccioná el texto';
      }
      setTimeout(() => { button.textContent = 'Copiar'; }, 1600);
    });
  });
});
