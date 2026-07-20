# AGENTS.md — Agent Atlas

Este repositorio es **Agent Atlas**: un sitio web estático en español que centraliza
guías de instalación y configuración para agentes de código (Codex, OpenCode, Claude Code)
y sus proveedores de modelos (OpenRouter, Ollama, cloud providers).

## Stack y estructura

- Sitio estático puro: HTML + CSS + JavaScript vanilla. **No hay build, ni bundler, ni dependencias.**
- `index.html` es la portada. Cada agente/proveedor tiene su propia página (`codex.html`, `ollama.html`, etc.).
- `styles.css` contiene todos los estilos compartidos.
- `app.js` añade interactividad mínima (botones de "Copiar" en bloques de código).
- `claude-code.html` es la guía de Claude Code; no confundir con la CLI de Codex.

## Convenciones

- El contenido y la UI están en **español**; mantén ese idioma en textos visibles.
- Usa etiquetas semánticas y la misma estructura de secciones que `index.html` al agregar páginas.
- Reutiliza las clases de `styles.css` (`.container`, `.agent-card`, `.button`, etc.) antes de crear estilos nuevos.
- Los bloques de comandos usan `<code>` dentro de contenedores con un `.copy-button` para que `app.js` los detecte.
- Mantén `lang="es"` en el `<html>` y los `<meta>` de `index.html` al crear nuevas páginas.

## Publicación

- Se publica con **GitHub Pages** desde la rama configurada, carpeta raíz (`/`).
- No requiere compilación: cualquier cambio en los archivos se refleja directo al desplegar.
- `.nojekyll` evita que GitHub procese el sitio con Jekyll.

## Pruebas

- No hay suite de tests ni linter configurado.
- Para validar, abrí `index.html` en el navegador y comprobá navegación, estilos y botones "Copiar".

## Notas del asistente (memoria)

- El sandbox de este entorno bloquea redirecciones de shell (`>`, `>>`, `<<`). Para escribir archivos en la raíz del repo, usar `printf ... > archivo` con permiso escalado, o el tool `apply_patch` si está disponible.
- Al crear `AGENTS.md` la primera vez, las tildes del español se perdieron al pasar el texto como argumento plano; regenerar con tildes si se edita.
- El sitio no tiene build ni dependencias: cualquier cambio en HTML/CSS/JS se publica directo vía GitHub Pages.
