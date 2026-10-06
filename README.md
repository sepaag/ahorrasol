# Ahorrasol

Web estática en Astro 7 para contenido en español sobre energía solar y ahorro energético.

## Datos del proyecto
- Nombre: Ahorrasol
- Autor: sepaag
- Contacto: sergiopalling@gmail.com
- Dominio: pendiente de elegir

## Primeros pasos

```bash
npm install
npm run dev
```

Para producción:

```bash
npm run build
npm run preview
```

## Dominio y GitHub Pages

Cuando compres el dominio:
1. Sustituye `TU-DOMINIO-PENDIENTE.es` en `astro.config.mjs` por la URL real.
2. Cambia el contenido de `public/CNAME` por el dominio real.
3. En GitHub, entra en Settings → Pages y selecciona GitHub Actions.
4. Configura los DNS del dominio según las instrucciones actuales de GitHub Pages.
5. Activa HTTPS cuando GitHub lo permita.

## Contenido

Hay 30 artículos en `src/content/articulos/`. Solo `bajar-potencia-contratada.md` tiene `draft: false`; los otros 29 son borradores y contienen únicamente sus H2.

Para publicar un borrador, redacta primero el contenido, revisa fuentes y cambia `draft: true` a `draft: false`.

## AdSense

`AdSlot` está desactivado y `public/ads.txt` contiene únicamente un comentario. No activar publicidad hasta tener aprobación, código real y consentimiento correctamente configurado.

## Legales

Aviso legal, privacidad y cookies son plantillas. Deben revisarse y completarse con datos reales antes de publicar.
