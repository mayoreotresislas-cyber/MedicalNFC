# NFC Medico

Proyecto estatico para `NFC Medico` con dos experiencias separadas:

- `index.html`: landing informativa y pagina publica que se abre al escanear el NFC.
- `setup.html`: formulario medico con preview en vivo y flujo familiar.

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
4. Vuelve a ejecutar `supabase/nfc_medico.sql` si ya habias creado la tabla antes.
   El archivo ahora agrega columnas `*_source` para guardar el idioma original del perfil.
5. Publica la Edge Function de traduccion:
   - `supabase functions deploy translate-medical-copy`
   - `supabase secrets set OPENAI_API_KEY=tu_llave`
   - opcional: `supabase secrets set OPENAI_TRANSLATION_MODEL=gpt-5-mini`
6. Publica la Edge Function de correo al administrador:
   - `supabase functions deploy notify-profile-created`
   - `supabase secrets set RESEND_API_KEY=tu_llave_resend`
   - `supabase secrets set MEDICAL_PROFILE_NOTIFY_TO=tu_correo@dominio.com`
   - opcional: `supabase secrets set MEDICAL_PROFILE_NOTIFY_FROM="NFC Medico <onboarding@resend.dev>"`
7. Define `siteBaseUrl` con una de estas opciones:
   - produccion bonita: `https://med.tudominio.com/med/{slug}`
   - temporal en Vercel: `https://medical-nfc.vercel.app/med/{slug}`
8. Usa `setup.html` para crear perfiles.
9. Usa `index.html?slug=ABC123` para probar el landing publico localmente.

## Traduccion automatica

- El cliente llena la informacion medica una sola vez en su idioma principal.
- El selector del preview cambia entre varios idiomas.
- Si el preview necesita otro idioma, `setup.js` invoca `translate-medical-copy`.
- Al guardar, el perfil guarda el texto original en `*_source` y tambien versiones `*_en` y `*_es`.
- El enlace final se envia por correo al administrador que graba los NFC.

## Flujo

1. El operador llena el perfil en `setup.html`.
2. El sistema genera el slug, construye la URL publica y prepara idiomas adicionales.
3. El perfil se guarda en Supabase.
4. El administrador recibe la URL por correo.
5. Esa URL se graba en el NFC.
6. El usuario escanea y `index.html` carga el perfil real desde Supabase.
