# NFC Medico

Proyecto estatico para `NFC Medico` con dos experiencias separadas:

- `index.html`: landing publica que se abre al escanear el NFC.
- `setup.html`: portal de llenado y actualizacion del perfil con preview en vivo.

## Separacion recomendada

Mantener este producto separado del proyecto de ventas al mayoreo:

- Supabase dedicado: `nfc-medico-dev`, `nfc-medico-staging`, `nfc-medico-prod`
- Dominio o subdominio propio: `med.tudominio.com`
- Credenciales, tablas, logs y storage independientes
- Despliegues y monitoreo independientes

No mezclar este flujo medico con el entorno comercial principal ayuda con:

- mejor administracion
- privacidad
- soporte
- reportes
- escalabilidad

## Archivos principales

- [index.html](/C:/Users/erikd/Desktop/Erik/Ventas%20al%20Mayoreo/NFC%20Medico/index.html)
- [styles.css](/C:/Users/erikd/Desktop/Erik/Ventas%20al%20Mayoreo/NFC%20Medico/styles.css)
- [app.js](/C:/Users/erikd/Desktop/Erik/Ventas%20al%20Mayoreo/NFC%20Medico/app.js)
- [setup.html](/C:/Users/erikd/Desktop/Erik/Ventas%20al%20Mayoreo/NFC%20Medico/setup.html)
- [setup.css](/C:/Users/erikd/Desktop/Erik/Ventas%20al%20Mayoreo/NFC%20Medico/setup.css)
- [setup.js](/C:/Users/erikd/Desktop/Erik/Ventas%20al%20Mayoreo/NFC%20Medico/setup.js)
- [config.js](/C:/Users/erikd/Desktop/Erik/Ventas%20al%20Mayoreo/NFC%20Medico/config.js)
- [supabase/nfc_medico.sql](/C:/Users/erikd/Desktop/Erik/Ventas%20al%20Mayoreo/NFC%20Medico/supabase/nfc_medico.sql)

## Configuracion rapida

1. Crea un proyecto Supabase exclusivo para NFC Medico.
2. Ejecuta `supabase/nfc_medico.sql`.
3. Llena `config.js` con la URL y anon key de ese proyecto.
4. Publica la Edge Function de traduccion:
   - `supabase functions deploy translate-medical-copy`
   - `supabase secrets set OPENAI_API_KEY=tu_llave`
   - opcional: `supabase secrets set OPENAI_TRANSLATION_MODEL=gpt-5-mini`
5. Define `siteBaseUrl` con una de estas opciones:
   - produccion bonita: `https://med.tudominio.com/med/{slug}`
   - temporal en Vercel: `https://nfc-medico.vercel.app/med/{slug}`
6. Usa `setup.html` para crear perfiles.
7. Usa `index.html?slug=ABC123` para probar el landing publico localmente.

## Traduccion automatica

- El cliente llena la informacion medica una sola vez en su idioma principal.
- El selector del preview cambia entre `ES` y `EN`.
- Si el preview necesita el otro idioma, `setup.js` invoca `translate-medical-copy`.
- Al guardar, el perfil guarda ambas versiones (`*_es` y `*_en`) en Supabase.
- Si la Edge Function o la llave de OpenAI no estan configuradas, el guardado bilingue se bloquea y el portal muestra el aviso correspondiente.

## Flujo

1. El operador llena el perfil en `setup.html`.
2. El sistema genera el slug, traduce el segundo idioma y construye la URL publica.
3. El perfil se guarda en Supabase.
4. Esa URL se graba en el NFC.
5. El usuario escanea y `index.html` carga el perfil real desde Supabase.
