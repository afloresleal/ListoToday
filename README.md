# Listo Today Website

Sitio web estático de **Listo** (landing page y páginas legales) en dos idiomas:

- Inglés: `index.html` y `privacy.html`
- Español: `index-es.html` y `privacidad.html`

El proyecto no usa framework ni build step. Todo corre con HTML, CSS y JS plano.

## Estructura principal

- `index.html`: landing principal en inglés.
- `index-es.html`: landing principal en español.
- `styles.css`: estilos globales del sitio.
- `script.js`: interacciones de la versión clásica/legal pages.
- `privacy.html`: política de privacidad en inglés.
- `privacidad.html`: política de privacidad en español.
- `redesign.html`, `redesign-es.html`, `redesign.css`: versiones/rediseños alternos.
- `*.png`, `*.svg`: assets de marca, screenshots e íconos.

## Correr localmente

Desde la raíz del proyecto:

```bash
python3 -m http.server 8080
```

Luego abre:

- [http://localhost:8080/index.html](http://localhost:8080/index.html)
- [http://localhost:8080/index-es.html](http://localhost:8080/index-es.html)

## Dependencias externas

- Google Fonts (`Host Grotesk`)
- GSAP + ScrollTrigger (vía CDN)
- Google Analytics (`gtag`, propiedad `G-M6CXMMXWD1`)

## Checklist rápido antes de publicar

- Verificar navegación entre idiomas (`EN/ES`) en header y footer.
- Verificar links de App Store:
  - `https://apps.apple.com/us/app/listo-today/id6756390475`
- Confirmar links legales:
  - EN -> `privacy.html`
  - ES -> `privacidad.html`
- Revisar que imágenes (`listo_home.png`, logos e íconos) carguen correctamente.
- Probar en móvil y desktop.

## Notas

- `script.js` contiene lógica de la versión clásica.  
  La landing actual (`index*.html`) también incluye animaciones GSAP embebidas inline.
- Si cambias copy o estructura, actualiza **ambos idiomas** para mantener consistencia.
