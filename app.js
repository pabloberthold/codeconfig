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

  // --- Free models from OpenRouter ---

  const list = document.getElementById('free-models-list');
  if (!list) return;

  fetch('https://openrouter.ai/api/v1/models')
    .then(r => { if (!r.ok) throw new Error(r.status); return r.json(); })
    .then(data => {
      const free = data.data.filter(m =>
        parseFloat(m.pricing.prompt) === 0 &&
        parseFloat(m.pricing.completion) === 0
      );

      if (free.length === 0) {
        list.innerHTML = '<p class="free-loading">No hay modelos gratuitos en este momento.</p>';
        return;
      }

      list.innerHTML = free
        .sort((a, b) => a.id.localeCompare(b.id))
        .map(m => {
          const parts = m.id.split('/');
          const provider = parts.length > 1 ? parts[0] : '';
          const name = parts.length > 1 ? parts.slice(1).join('/') : m.id;
          return `<span class="free-model-chip"><span class="chip-provider">${provider}</span>${name}</span>`;
        })
        .join('');
    })
    .catch(() => {
      list.innerHTML = '<p class="free-loading">No se pudo cargar la lista. <a href="https://openrouter.ai/models" target="_blank" rel="noreferrer">Ver catálogo ↗</a></p>';
    });
});
