const setupTranslations = {
  en: {
    brandTagline: "Medical form",
    publicLandingLink: "What is this?",
    interfaceLanguage: "Interface language",
    heroKicker: "Medical form",
    heroTitle: "Fill the medical form for one person.",
    heroText:
      "Add the emergency information once, review the live preview, accept the agreements, and generate the secure link that will be used for the NFC profile.",
    heroPoint1: "Clear step-by-step flow",
    heroPoint2: "Multilingual preview",
    heroPoint3: "Fast family workflow",
    heroCardLabel: "What you will do",
    heroCard1: "Fill the health profile for one person.",
    heroCard2: "Review the emergency preview before saving.",
    heroCard3: "The secure profile link can be sent to the NFC administrator and to the profile owner.",
    step1: "1. Identity",
    step2: "2. Medical details",
    step3: "3. Contacts",
    step4: "4. Finish",
    identityKicker: "Identity",
    identityTitle: "Person details",
    medicalKicker: "Medical details",
    medicalTitle: "Write the medical information once",
    contactsKicker: "Contacts",
    contactsTitle: "Family or caregiver contacts",
    publishKicker: "Finish",
    publishTitle: "Generate the profile link",
    fieldFullName: "Full name",
    fieldFirstName: "First name",
    fieldLastName: "Last name",
    fieldGender: "Gender",
    fieldBirthDate: "Birthday",
    fieldSlug: "Profile ID",
    fieldProfileLanguage: "Preferred language",
    fieldBloodType: "Blood type",
    fieldAge: "Age",
    fieldClientEmail: "Email",
    fieldClientPhone: "Mobile phone",
    fieldWeight: "Weight",
    fieldHeight: "Height",
    fieldOrganDonor: "Organ donor",
    fieldInsurance: "Insurance",
    fieldDoctor: "Doctor",
    fieldClinic: "Clinic",
    fieldCountry: "Country",
    fieldState: "State / Region",
    fieldCity: "City",
    fieldPostalCode: "ZIP / Postal code",
    fieldConditions: "Conditions",
    fieldAllergies: "Medical allergies",
    fieldFoodAllergies: "Food allergies",
    fieldMedications: "Medications and doses",
    fieldDevices: "Medical devices",
    fieldNotes: "Important notes",
    contact1Title: "Emergency contact 1",
    contact2Title: "Emergency contact 2",
    fieldContactName: "Name",
    fieldCountryCode: "Country code",
    fieldContactPhone: "Phone",
    fieldRecordUrl: "Generated profile link",
    generatedUrlLabel:
      "When you generate the profile, the secure link is sent to the NFC administrator and, if an email was provided, also to the profile owner.",
    updatePolicyTitle: "Future profile changes",
    updatePolicyText:
      "If you need this profile reopened later for remote changes, that service has an additional cost. The online profile can be updated remotely, but the physical NFC information is only changed when the administrator has the chip in hand.",
    saveProfile: "Generate profile",
    saveFamily: "Generate another family member",
    previewKicker: "Live preview",
    previewTitle: "How the NFC page will look",
    previewLanguage: "Preview language",
    criticalBadge: "Emergency",
    detailBadge: "Details",
    screenOne: "Screen 1",
    screenTwo: "Screen 2",
    emergencyTitle: "Emergency Medical Info",
    additionalTitle: "Additional Medical Information",
    labelName: "Name",
    labelConditions: "Condition(s)",
    labelAllergies: "Medical Allergies",
    labelFoodAllergies: "Food Allergies",
    labelMedications: "Medications / Doses",
    labelBloodType: "Blood Type",
    labelGender: "Gender",
    labelBirthDate: "Birthday",
    labelAge: "Age",
    labelWeight: "Weight",
    labelHeight: "Height",
    labelOrganDonor: "Organ donor",
    labelDoctor: "Doctor",
    labelClinic: "Clinic",
    labelInsurance: "Insurance",
    labelCountry: "Country",
    labelState: "State / Region",
    labelCity: "City",
    labelPostalCode: "ZIP / Postal code",
    importantNotes: "Important Notes",
    organDonorPlaceholder: "Select an option",
    organDonorYes: "Yes",
    organDonorNo: "No",
    genderPlaceholder: "Select an option",
    genderMale: "Male",
    genderFemale: "Female",
    genderNonBinary: "Non-binary",
    genderPreferNot: "Prefer not to say",
    savingTitle: "Generating profile...",
    savingText: "Please wait while we store the profile and prepare the secure link notifications.",
    successKicker: "Saved",
    successTitle: "Profile generated successfully",
    successText: "The profile was generated correctly and the secure link is ready to copy, email, or record on the NFC.",
    errorKicker: "Error",
    errorTitle: "We could not generate the profile",
    errorText: "The profile could not be saved. Review the technical message below and try again.",
    validationPopupText: "Please complete the required information before generating the profile.",
    termsPopupText: "Review the legal links and accept the agreements before generating the profile.",
    closeError: "Close",
    closeSuccess: "Done",
    statusReadyTitle: "Ready to generate",
    statusReadyMessage: "Complete the form, review the multilingual preview, and generate the profile link.",
    statusConfigTitle: "Supabase setup missing",
    statusConfigMessage: "Add the dedicated MyMedicalNFC.com Supabase URL and anon key in config.js.",
    statusValidationTitle: "Missing required fields",
    statusValidationMessage: "Add at least the person's first and last name before generating the profile.",
    statusTermsTitle: "Legal acceptance required",
    statusTermsMessage: "The profile owner must accept the legal terms, privacy consent, and emergency disclaimer before generating the link.",
    statusSavingTitle: "Generation in progress",
    statusSavingMessage: "Generating the secure link and language versions.",
    statusSavedTitle: "Profile generated",
    statusSavedMessage: "The medical profile and secure link were created successfully.",
    statusSaveErrorTitle: "Could not save the profile",
    statusSaveErrorMessage: "Supabase returned an error while saving: {details}",
    statusTranslateMissingTitle: "Translation function missing",
    statusTranslateMissingMessage: "Deploy the translate-medical-copy Edge Function before using multilingual preview.",
    statusTranslateErrorTitle: "Automatic translation failed",
    statusTranslateErrorMessage: "We could not generate the selected language right now.",
    statusEmailWarningTitle: "Profile generated, email warning",
    statusEmailWarningMessage: "The profile was generated, but one or more email notifications could not be sent.",
    statusLoadedTitle: "Profile loaded",
    statusLoadedMessage: "Existing data for {slug} is now in the form.",
    statusLoadErrorTitle: "Could not load the profile",
    statusLoadErrorMessage: "We could not find {slug}. You can still create a new profile.",
    activationGateKicker: "Private access",
    activationGateTitle: "Open your private activation link",
    activationGateText:
      "Use the private link sent for this profile. If you only have the token code, paste it below to open the medical form.",
    activationTokenLabel: "Activation link or token",
    openActivationButton: "Open private form",
    activationAwaitTitle: "Private link required",
    activationAwaitMessage: "Open this page using the private activation link sent for this profile.",
    activationLoadedTitle: "Private form ready",
    activationLoadedMessage: "This private profile is now ready to complete.",
    activationUsedTitle: "Profile already submitted",
    activationUsedMessage: "This activation link was already used. If you need changes later, ask the administrator to reopen the profile.",
    activationInvalidTitle: "Activation unavailable",
    activationInvalidMessage: "We could not validate this private activation link.",
    previewTranslating: "Translating automatically...",
    bloodPlaceholder: "Select blood type",
    agreementsTitle: "Before generating the profile",
    agreementsAccept: "I accept the service terms, privacy consent, and emergency disclaimer.",
    entryComposerPlaceholder: "Type one item and press Enter",
    entryComposerHint: "Choose a suggestion or add your own. Each item is saved on its own line.",
    entryComposerAdd: "Add",
    entryComposerEmpty: "No items added yet.",
    legalTermsLink: "View service terms",
    legalPrivacyLink: "View privacy & consent",
    legalDisclaimerLink: "View emergency disclaimer",
    legalTermsTitle: "Service terms",
    legalPrivacyTitle: "Privacy & consent",
    legalDisclaimerTitle: "Emergency disclaimer"
  },
  es: {
    brandTagline: "Formulario medico",
    publicLandingLink: "Que es esto?",
    interfaceLanguage: "Idioma de la interfaz",
    heroKicker: "Formulario medico",
    heroTitle: "Llena el formulario medico para una persona.",
    heroText:
      "Agrega la informacion de emergencia una sola vez, revisa el preview en vivo, acepta los acuerdos y genera el enlace seguro que se usara para el perfil NFC.",
    heroPoint1: "Flujo claro paso a paso",
    heroPoint2: "Preview multilenguaje",
    heroPoint3: "Flujo agil para familias",
    heroCardLabel: "Lo que vas a hacer",
    heroCard1: "Llena el perfil de salud de una persona.",
    heroCard2: "Revisa el preview de emergencia antes de guardar.",
    heroCard3: "El enlace seguro del perfil puede enviarse al administrador del NFC y tambien al titular del perfil.",
    step1: "1. Identidad",
    step2: "2. Informacion medica",
    step3: "3. Contactos",
    step4: "4. Finalizar",
    identityKicker: "Identidad",
    identityTitle: "Datos de la persona",
    medicalKicker: "Informacion medica",
    medicalTitle: "Escribe la informacion medica una sola vez",
    contactsKicker: "Contactos",
    contactsTitle: "Contactos de familia o cuidadores",
    publishKicker: "Finalizar",
    publishTitle: "Generar el enlace del perfil",
    fieldFullName: "Nombre completo",
    fieldFirstName: "Nombre",
    fieldLastName: "Apellido",
    fieldGender: "Genero",
    fieldBirthDate: "Fecha de nacimiento",
    fieldSlug: "ID del perfil",
    fieldProfileLanguage: "Idioma preferido",
    fieldBloodType: "Tipo de sangre",
    fieldAge: "Edad",
    fieldClientEmail: "Correo electronico",
    fieldClientPhone: "Telefono movil",
    fieldWeight: "Peso",
    fieldHeight: "Estatura",
    fieldOrganDonor: "Donador de organos",
    fieldInsurance: "Seguro",
    fieldDoctor: "Medico",
    fieldClinic: "Clinica",
    fieldCountry: "Pais",
    fieldState: "Estado / Region",
    fieldCity: "Ciudad",
    fieldPostalCode: "ZIP / Codigo postal",
    fieldConditions: "Condiciones",
    fieldAllergies: "Alergias medicas",
    fieldFoodAllergies: "Alergias alimentarias",
    fieldMedications: "Medicamentos y dosis",
    fieldDevices: "Dispositivos medicos",
    fieldNotes: "Notas importantes",
    contact1Title: "Contacto de emergencia 1",
    contact2Title: "Contacto de emergencia 2",
    fieldContactName: "Nombre",
    fieldCountryCode: "Codigo de pais",
    fieldContactPhone: "Telefono",
    fieldRecordUrl: "Enlace generado del perfil",
    generatedUrlLabel:
      "Cuando generas el perfil, el enlace seguro se envia al administrador que programa los NFC y, si agregaste correo, tambien al titular del perfil.",
    updatePolicyTitle: "Cambios futuros del perfil",
    updatePolicyText:
      "Si mas adelante necesitas reabrir este perfil para hacer cambios a distancia, ese servicio tiene un costo adicional. El perfil en linea se puede actualizar remotamente, pero la informacion fisica del NFC solo cambia cuando el administrador tiene el chip en la mano.",
    saveProfile: "Generar perfil",
    saveFamily: "Generar otro familiar",
    previewKicker: "Preview en vivo",
    previewTitle: "Asi se vera la pagina del NFC",
    previewLanguage: "Idioma del preview",
    criticalBadge: "Emergencia",
    detailBadge: "Detalle",
    screenOne: "Pantalla 1",
    screenTwo: "Pantalla 2",
    emergencyTitle: "Informacion Medica de Emergencia",
    additionalTitle: "Informacion Medica Adicional",
    labelName: "Nombre",
    labelConditions: "Condiciones",
    labelAllergies: "Alergias medicas",
    labelFoodAllergies: "Alergias alimentarias",
    labelMedications: "Medicamentos y dosis",
    labelBloodType: "Tipo de sangre",
    labelGender: "Genero",
    labelBirthDate: "Fecha de nacimiento",
    labelAge: "Edad",
    labelWeight: "Peso",
    labelHeight: "Estatura",
    labelOrganDonor: "Donador de organos",
    labelDoctor: "Medico",
    labelClinic: "Clinica",
    labelInsurance: "Seguro",
    labelCountry: "Pais",
    labelState: "Estado / Region",
    labelCity: "Ciudad",
    labelPostalCode: "ZIP / Codigo postal",
    importantNotes: "Notas importantes",
    organDonorPlaceholder: "Selecciona una opcion",
    organDonorYes: "Si",
    organDonorNo: "No",
    genderPlaceholder: "Selecciona una opcion",
    genderMale: "Hombre",
    genderFemale: "Mujer",
    genderNonBinary: "No binario",
    genderPreferNot: "Prefiero no decirlo",
    savingTitle: "Generando perfil...",
    savingText: "Espera un momento mientras guardamos el perfil y preparamos los avisos del enlace seguro.",
    successKicker: "Guardado",
    successTitle: "Perfil generado con exito",
    successText: "El perfil se genero correctamente y el enlace seguro ya esta listo para copiar, enviar o grabar en el NFC.",
    errorKicker: "Error",
    errorTitle: "No pudimos generar el perfil",
    errorText: "No se pudo guardar el perfil. Revisa el mensaje tecnico de abajo e intenta de nuevo.",
    validationPopupText: "Completa la informacion obligatoria antes de generar el perfil.",
    termsPopupText: "Revisa los enlaces legales y acepta los acuerdos antes de generar el perfil.",
    closeError: "Cerrar",
    closeSuccess: "Listo",
    statusReadyTitle: "Listo para generar",
    statusReadyMessage: "Completa el formulario, revisa el preview multilenguaje y genera el enlace del perfil.",
    statusConfigTitle: "Falta configurar Supabase",
    statusConfigMessage: "Agrega en config.js la URL y la anon key del proyecto de MyMedicalNFC.com.",
    statusValidationTitle: "Faltan campos obligatorios",
    statusValidationMessage: "Agrega por lo menos el nombre y apellido antes de generar el perfil.",
    statusTermsTitle: "Hace falta la aceptacion legal",
    statusTermsMessage:
      "La persona debe aceptar los terminos del servicio, el consentimiento de privacidad y el disclaimer de emergencia antes de generar el enlace.",
    statusSavingTitle: "Generacion en proceso",
    statusSavingMessage: "Estamos generando el enlace seguro y las versiones de idioma.",
    statusSavedTitle: "Perfil generado",
    statusSavedMessage: "El perfil medico y el enlace seguro se crearon correctamente.",
    statusSaveErrorTitle: "No se pudo guardar el perfil",
    statusSaveErrorMessage: "Supabase devolvio un error al guardar: {details}",
    statusTranslateMissingTitle: "Falta la funcion de traduccion",
    statusTranslateMissingMessage: "Publica la Edge Function translate-medical-copy antes de usar preview multilenguaje.",
    statusTranslateErrorTitle: "Fallo la traduccion automatica",
    statusTranslateErrorMessage: "No pudimos generar el idioma seleccionado en este momento.",
    statusEmailWarningTitle: "Perfil generado, aviso de correo",
    statusEmailWarningMessage: "El perfil se genero, pero no se pudieron enviar uno o mas correos de notificacion.",
    statusLoadedTitle: "Perfil cargado",
    statusLoadedMessage: "Los datos existentes de {slug} ya estan en el formulario.",
    statusLoadErrorTitle: "No se pudo cargar el perfil",
    statusLoadErrorMessage: "No encontramos {slug}. Aun puedes crear un perfil nuevo.",
    activationGateKicker: "Acceso privado",
    activationGateTitle: "Abre tu enlace privado de activacion",
    activationGateText:
      "Usa el enlace privado que fue enviado para este perfil. Si solo tienes el token, pegalo abajo para abrir el formulario medico.",
    activationTokenLabel: "Enlace o token de activacion",
    openActivationButton: "Abrir formulario privado",
    activationAwaitTitle: "Hace falta el enlace privado",
    activationAwaitMessage: "Abre esta pagina usando el enlace privado de activacion enviado para este perfil.",
    activationLoadedTitle: "Formulario privado listo",
    activationLoadedMessage: "Este perfil privado ya esta listo para completarse.",
    activationUsedTitle: "Perfil ya enviado",
    activationUsedMessage: "Este enlace de activacion ya fue usado. Si necesitas cambios despues, pide al administrador que reabra el perfil.",
    activationInvalidTitle: "Activacion no disponible",
    activationInvalidMessage: "No pudimos validar este enlace privado de activacion.",
    previewTranslating: "Traduciendo automaticamente...",
    bloodPlaceholder: "Selecciona el tipo de sangre",
    agreementsTitle: "Antes de generar el perfil",
    agreementsAccept: "Acepto los terminos del servicio, el consentimiento de privacidad y el disclaimer de emergencia.",
    entryComposerPlaceholder: "Escribe un elemento y presiona Enter",
    entryComposerHint: "Selecciona una sugerencia o agrega la tuya. Cada elemento se guarda en su propio renglon.",
    entryComposerAdd: "Agregar",
    entryComposerEmpty: "Aun no hay elementos agregados.",
    legalTermsLink: "Ver terminos del servicio",
    legalPrivacyLink: "Ver privacidad y consentimiento",
    legalDisclaimerLink: "Ver disclaimer de emergencia",
    legalTermsTitle: "Terminos del servicio",
    legalPrivacyTitle: "Privacidad y consentimiento",
    legalDisclaimerTitle: "Disclaimer de emergencia"
  }
};

const languageOptions = {
  en: { code: "EN", label: "English", flag: "🇺🇸" },
  es: { code: "ES", label: "Español", flag: "🇪🇸" },
  fr: { code: "FR", label: "Français", flag: "🇫🇷" },
  pt: { code: "PT", label: "Português", flag: "🇵🇹" },
  de: { code: "DE", label: "Deutsch", flag: "🇩🇪" },
  it: { code: "IT", label: "Italiano", flag: "🇮🇹" },
  ja: { code: "JA", label: "Japanese", flag: "🇯🇵" },
  ko: { code: "KO", label: "Korean", flag: "🇰🇷" },
  zh: { code: "ZH", label: "Chinese", flag: "🇨🇳" }
};

const legalCopy = {
  en: {
    kicker: "Legal",
    termsTitle: "Service terms",
    privacyTitle: "Privacy & consent",
    disclaimerTitle: "Emergency disclaimer",
    termsHtml: `
      <p><strong>MyMedicalNFC.com</strong> provides a digital medical profile service linked to an NFC tag. The secure profile link may be generated before the NFC is physically recorded.</p>
      <p>The owner of the profile is responsible for providing accurate information and reviewing it before the NFC is programmed. Future remote reopening or editing requests may carry an additional service fee.</p>
      <p>The physical NFC content does not change until the tag is returned to the administrator for reprogramming. Business address: 2200 Patton Dr. Reno, Nevada 89512 USA.</p>
    `,
    privacyHtml: `
      <p>By submitting this form, the owner authorizes the storage of medical profile information for emergency display and NFC management purposes.</p>
      <p>The profile may contain sensitive medical details, emergency contacts, and optional links to complete records. Access should be shared only with trusted responders, caregivers, and the designated administrator.</p>
      <p>The administrator may receive the profile link, activation notices, and later requests for updates in order to manage the NFC service.</p>
    `,
    disclaimerHtml: `
      <p>This profile is informational only and does not replace emergency services, professional diagnosis, or clinical treatment.</p>
      <p>In case of emergency, call local emergency services immediately. Medical decisions must be made by qualified professionals using the full circumstances of the emergency.</p>
      <p>The information shown is provided by the profile owner or authorized caregiver. MyMedicalNFC.com is not responsible for incomplete, outdated, or inaccurate medical data submitted by the owner.</p>
    `
  },
  es: {
    kicker: "Legal",
    termsTitle: "Terminos del servicio",
    privacyTitle: "Privacidad y consentimiento",
    disclaimerTitle: "Disclaimer de emergencia",
    termsHtml: `
      <p><strong>MyMedicalNFC.com</strong> ofrece un servicio de perfil medico digital vinculado a una etiqueta NFC. El enlace seguro del perfil puede generarse antes de grabar fisicamente el chip NFC.</p>
      <p>El propietario del perfil es responsable de proporcionar informacion correcta y revisarla antes de que el NFC sea programado. Las solicitudes futuras de reapertura o edicion remota pueden tener un costo adicional.</p>
      <p>La informacion fisica del NFC no cambia hasta que la etiqueta vuelve a manos del administrador para reprogramarla. Direccion del negocio: 2200 Patton Dr. Reno, Nevada 89512 USA.</p>
    `,
    privacyHtml: `
      <p>Al enviar este formulario, el titular autoriza el almacenamiento de la informacion del perfil medico para visualizacion de emergencia y administracion del servicio NFC.</p>
      <p>El perfil puede contener datos medicos sensibles, contactos de emergencia y enlaces opcionales a expedientes completos. Debe compartirse solo con rescatistas, cuidadores y el administrador designado.</p>
      <p>El administrador puede recibir el enlace del perfil, avisos de activacion y futuras solicitudes de cambio para poder gestionar el servicio NFC.</p>
    `,
    disclaimerHtml: `
      <p>Este perfil es solo informativo y no sustituye a los servicios de emergencia, el diagnostico profesional ni el tratamiento clinico.</p>
      <p>En caso de emergencia, llama de inmediato a los servicios medicos locales. Las decisiones medicas deben ser tomadas por profesionales calificados con base en toda la situacion clinica.</p>
      <p>La informacion mostrada es proporcionada por el propietario del perfil o su cuidador autorizado. MyMedicalNFC.com no es responsable por informacion incompleta, desactualizada o incorrecta enviada por el usuario.</p>
    `
  }
};

const languageVisuals = {
  en: { label: "English", flagClass: "flag-us" },
  es: { label: "Espanol", flagClass: "flag-es" },
  fr: { label: "Francais", flagClass: "flag-fr" },
  pt: { label: "Portugues", flagClass: "flag-pt" },
  de: { label: "Deutsch", flagClass: "flag-de" },
  it: { label: "Italiano", flagClass: "flag-it" },
  ja: { label: "Japanese", flagClass: "flag-ja" },
  ko: { label: "Korean", flagClass: "flag-ko" },
  zh: { label: "Chinese", flagClass: "flag-zh" }
};

const staticUiLanguages = new Set(["en", "es"]);

const countryCodes = [
  { value: "+1", label: "+1 USA / Canada" },
  { value: "+34", label: "+34 Espana" },
  { value: "+52", label: "+52 Mexico" },
  { value: "+81", label: "+81 Japan" },
  { value: "+82", label: "+82 South Korea" },
  { value: "+86", label: "+86 China" },
  { value: "+49", label: "+49 Germany" },
  { value: "+33", label: "+33 France" },
  { value: "+39", label: "+39 Italy" },
  { value: "+351", label: "+351 Portugal" },
  { value: "+54", label: "+54 Argentina" },
  { value: "+56", label: "+56 Chile" },
  { value: "+57", label: "+57 Colombia" },
  { value: "+58", label: "+58 Venezuela" },
  { value: "+51", label: "+51 Peru" },
  { value: "+593", label: "+593 Ecuador" },
  { value: "+507", label: "+507 Panama" },
  { value: "+506", label: "+506 Costa Rica" },
  { value: "+503", label: "+503 El Salvador" },
  { value: "+502", label: "+502 Guatemala" },
  { value: "+504", label: "+504 Honduras" },
  { value: "+505", label: "+505 Nicaragua" }
];

const insuranceOptions = [
  "Aetna",
  "Alignment Health",
  "Ambetter",
  "Anthem",
  "Blue Cross Blue Shield",
  "Cambia",
  "Centene",
  "Cigna",
  "CVS Health / Aetna",
  "Health Net",
  "Health Plan of Nevada",
  "Hometown Health",
  "Humana",
  "Kaiser Permanente",
  "Medicaid",
  "Medicare",
  "Molina Healthcare",
  "Oscar Health",
  "Prominence Health Plan",
  "SelectHealth",
  "Self-pay / No insurance",
  "TRICARE",
  "UnitedHealthcare",
  "VA Community Care",
  "Other"
];

const locationCatalog = {
  "United States": {
    states: {
      Nevada: ["Reno", "Sparks", "Las Vegas", "Henderson", "Carson City", "Fernley", "Elko"],
      California: ["Los Angeles", "San Diego", "San Jose", "San Francisco", "Sacramento", "Fresno"],
      Texas: ["Houston", "Dallas", "Austin", "San Antonio", "Fort Worth", "El Paso"],
      Florida: ["Miami", "Orlando", "Tampa", "Jacksonville", "Fort Lauderdale", "Naples"],
      Arizona: ["Phoenix", "Tucson", "Mesa", "Scottsdale", "Chandler", "Glendale"],
      "New York": ["New York City", "Buffalo", "Rochester", "Albany", "Syracuse", "Yonkers"]
    }
  },
  Mexico: {
    states: {
      "Baja California": ["Tijuana", "Mexicali", "Ensenada", "Rosarito"],
      "Ciudad de Mexico": ["Benito Juarez", "Coyoacan", "Iztapalapa", "Miguel Hidalgo"],
      Jalisco: ["Guadalajara", "Zapopan", "Tlaquepaque", "Tonalá"],
      "Nuevo Leon": ["Monterrey", "San Nicolas", "Guadalupe", "Apodaca"],
      Sonora: ["Hermosillo", "Nogales", "Ciudad Obregon", "San Luis Rio Colorado"]
    }
  },
  Canada: {
    states: {
      Ontario: ["Toronto", "Ottawa", "Mississauga", "Hamilton", "London"],
      Quebec: ["Montreal", "Quebec City", "Laval", "Gatineau"],
      Alberta: ["Calgary", "Edmonton", "Red Deer", "Lethbridge"],
      "British Columbia": ["Vancouver", "Victoria", "Surrey", "Burnaby"]
    }
  },
  Spain: {
    states: {
      Madrid: ["Madrid", "Alcobendas", "Getafe", "Leganes"],
      Catalonia: ["Barcelona", "Girona", "Tarragona", "Lleida"],
      Andalusia: ["Seville", "Malaga", "Granada", "Cordoba"],
      Valencia: ["Valencia", "Alicante", "Castellon", "Elche"]
    }
  },
  Japan: {
    states: {
      Tokyo: ["Shinjuku", "Shibuya", "Minato", "Setagaya"],
      Osaka: ["Osaka", "Sakai", "Higashiosaka", "Toyonaka"],
      Kanagawa: ["Yokohama", "Kawasaki", "Sagamihara", "Yokosuka"]
    }
  },
  "South Korea": {
    states: {
      Seoul: ["Gangnam", "Jongno", "Songpa", "Mapo"],
      Gyeonggi: ["Suwon", "Seongnam", "Yongin", "Bucheon"],
      Busan: ["Haeundae", "Suyeong", "Dongnae", "Busanjin"]
    }
  },
  China: {
    states: {
      Beijing: ["Chaoyang", "Haidian", "Dongcheng", "Xicheng"],
      Shanghai: ["Pudong", "Minhang", "Jingan", "Huangpu"],
      Guangdong: ["Guangzhou", "Shenzhen", "Dongguan", "Foshan"]
    }
  },
  France: {
    states: {
      "Ile-de-France": ["Paris", "Boulogne-Billancourt", "Versailles", "Saint-Denis"],
      Provence: ["Marseille", "Nice", "Toulon", "Aix-en-Provence"]
    }
  },
  Germany: {
    states: {
      Bavaria: ["Munich", "Nuremberg", "Augsburg", "Regensburg"],
      Berlin: ["Berlin"],
      Hesse: ["Frankfurt", "Wiesbaden", "Darmstadt", "Kassel"]
    }
  },
  Italy: {
    states: {
      Lazio: ["Rome", "Latina", "Frosinone", "Viterbo"],
      Lombardy: ["Milan", "Bergamo", "Brescia", "Monza"],
      Tuscany: ["Florence", "Pisa", "Siena", "Livorno"]
    }
  },
  Portugal: {
    states: {
      Lisbon: ["Lisbon", "Sintra", "Cascais", "Amadora"],
      Porto: ["Porto", "Gaia", "Matosinhos", "Maia"]
    }
  }
};

const medicalFieldKeys = ["conditions", "allergies", "food_allergies", "medications", "devices", "notes"];
const multiEntryFields = ["conditions", "allergies", "food_allergies", "medications", "devices"];
const multiEntrySuggestions = {
  conditions: {
    en: [
      "Type 1 Diabetes",
      "Type 2 Diabetes",
      "Epilepsy",
      "Asthma",
      "Hypertension",
      "Heart disease",
      "Coronary artery disease",
      "Arrhythmia",
      "Heart failure",
      "COPD",
      "Chronic kidney disease",
      "Hypothyroidism",
      "Hyperthyroidism",
      "Autism",
      "Dementia",
      "Alzheimer's disease",
      "Stroke history",
      "Anxiety disorder",
      "Depression",
      "Bleeding disorder"
    ],
    es: [
      "Diabetes tipo 1",
      "Diabetes tipo 2",
      "Epilepsia",
      "Asma",
      "Hipertension",
      "Cardiopatia",
      "Enfermedad coronaria",
      "Arritmia",
      "Insuficiencia cardiaca",
      "EPOC",
      "Enfermedad renal cronica",
      "Hipotiroidismo",
      "Hipertiroidismo",
      "Autismo",
      "Demencia",
      "Alzheimer",
      "Antecedente de derrame cerebral",
      "Trastorno de ansiedad",
      "Depresion",
      "Trastorno de coagulacion"
    ]
  },
  allergies: {
    en: [
      "Penicillin",
      "Sulfa drugs",
      "Latex",
      "Aspirin",
      "Ibuprofen",
      "Contrast dye",
      "Codeine",
      "Morphine",
      "Cephalosporins",
      "Amoxicillin",
      "Acetaminophen",
      "Heparin",
      "Adhesive tape",
      "Iodine",
      "Chlorhexidine"
    ],
    es: [
      "Penicilina",
      "Sulfas",
      "Latex",
      "Aspirina",
      "Ibuprofeno",
      "Medio de contraste",
      "Codeina",
      "Morfina",
      "Cefalosporinas",
      "Amoxicilina",
      "Acetaminofen",
      "Heparina",
      "Cinta adhesiva",
      "Yodo",
      "Clorhexidina"
    ]
  },
  food_allergies: {
    en: ["Peanuts", "Shellfish", "Dairy", "Eggs", "Soy", "Tree nuts", "Wheat", "Fish", "Sesame", "Strawberries"],
    es: ["Cacahuates", "Mariscos", "Lacteos", "Huevos", "Soya", "Nueces", "Trigo", "Pescado", "Sesamo", "Fresas"]
  },
  medications: {
    en: [
      "Insulin glargine 12 units nightly",
      "Metformin 500 mg twice daily",
      "EpiPen 0.3 mg as needed",
      "Levothyroxine 50 mcg daily",
      "Lisinopril 10 mg daily",
      "Losartan 50 mg daily",
      "Amlodipine 5 mg daily",
      "Albuterol inhaler 2 puffs as needed",
      "Levetiracetam 500 mg twice daily",
      "Warfarin 5 mg daily",
      "Apixaban 5 mg twice daily",
      "Clopidogrel 75 mg daily",
      "Atorvastatin 20 mg nightly",
      "Sertraline 50 mg daily",
      "Omeprazole 20 mg daily"
    ],
    es: [
      "Insulina glargina 12 unidades por la noche",
      "Metformina 500 mg dos veces al dia",
      "EpiPen 0.3 mg segun sea necesario",
      "Levotiroxina 50 mcg al dia",
      "Lisinopril 10 mg al dia",
      "Losartan 50 mg al dia",
      "Amlodipino 5 mg al dia",
      "Inhalador de albuterol 2 disparos segun sea necesario",
      "Levetiracetam 500 mg dos veces al dia",
      "Warfarina 5 mg al dia",
      "Apixaban 5 mg dos veces al dia",
      "Clopidogrel 75 mg al dia",
      "Atorvastatina 20 mg por la noche",
      "Sertralina 50 mg al dia",
      "Omeprazol 20 mg al dia"
    ]
  },
  devices: {
    en: [
      "Insulin pump",
      "Pacemaker",
      "CPAP machine",
      "Hearing aid",
      "Wheelchair",
      "Glucose monitor",
      "Oxygen concentrator",
      "Defibrillator implant",
      "Port-a-cath",
      "Gastrostomy tube",
      "Colostomy bag",
      "Walker",
      "Prosthetic limb"
    ],
    es: [
      "Bomba de insulina",
      "Marcapasos",
      "Maquina CPAP",
      "Aparato auditivo",
      "Silla de ruedas",
      "Monitor de glucosa",
      "Concentrador de oxigeno",
      "Desfibrilador implantado",
      "Port-a-cath",
      "Sonda de gastrostomia",
      "Bolsa de colostomia",
      "Andadera",
      "Protesis"
    ]
  }
};
const config = window.NFC_MEDICO_CONFIG || {};
const root = document.documentElement;
const pageMode = document.body.dataset.pageMode || "setup";
const form = document.querySelector("#profile-form");
const textNodes = document.querySelectorAll("[data-i18n]");
const previewCopyNodes = document.querySelectorAll("[data-preview-copy]");
const previewNoteNodes = document.querySelectorAll("[data-preview-note]");
const generatedUrlNodes = document.querySelectorAll("[data-generated-url-inline]");
const statusBanner = document.querySelector("[data-form-status]");
const statusTitle = document.querySelector("[data-form-status-title]");
const statusMessage = document.querySelector("[data-form-status-message]");
const savingOverlay = document.querySelector("[data-saving-overlay]");
const successModal = document.querySelector("[data-success-modal]");
const successUrlNode = document.querySelector("[data-success-url]");
const errorModal = document.querySelector("[data-error-modal]");
const errorTitleNode = document.querySelector("[data-error-title]");
const errorTextNode = document.querySelector("[data-error-text]");
const errorDetailNode = document.querySelector("[data-error-detail]");
const legalModal = document.querySelector("[data-legal-modal]");
const legalTitleNode = document.querySelector("[data-legal-title]");
const legalKickerNode = document.querySelector("[data-legal-kicker]");
const legalContentNode = document.querySelector("[data-legal-content]");
const interfaceSelect = document.querySelector("[data-lang-select]");
const helperFields = document.querySelectorAll("[data-clear-helper]");
const countryCodeSelects = document.querySelectorAll("[data-country-code]");
const insuranceSelect = document.querySelector("[data-insurance-select]");
const countrySelect = document.querySelector("[data-country-select]");
const stateSelect = document.querySelector("[data-state-select]");
const citySelect = document.querySelector("[data-city-select]");
const activationGate = document.querySelector("[data-activation-gate]");
const activationBuilder = document.querySelector("[data-activation-builder]");
const tokenEntryForm = document.querySelector("[data-token-entry-form]");
const tokenInput = document.querySelector("[data-token-input]");
const multiEntrySources = document.querySelectorAll("[data-entry-source]");

const state = {
  uiLang: detectInitialLanguage(),
  previewLang: "en",
  client: null,
  uiCopyCache: {
    en: setupTranslations.en,
    es: setupTranslations.es
  },
  uiCopyPending: {},
  slugTouched: false,
  slugSeed: createSlugSeed(),
  statusTimer: null,
  lastSavedUrl: "",
  pendingMode: "save",
  activation: {
    token: "",
    tokenStatus: "",
    profileLoaded: false
  },
  translation: {
    sourceLanguage: "en",
    signature: "",
    results: {},
    pendingKey: "",
    pendingPromise: null,
    debounceTimer: null
  },
  multiEntryControllers: {}
};

let statusPopup = null;

const SETUP_COPY_CACHE_VERSION = "2026-04-13";
const SETUP_COPY_CACHE_PREFIX = `nfc-medico-setup-ui:${SETUP_COPY_CACHE_VERSION}`;

function detectInitialLanguage() {
  const requested = new URLSearchParams(window.location.search).get("lang");
  if (requested && languageOptions[requested]) {
    return requested;
  }

  const browserCode = navigator.language?.slice(0, 2).toLowerCase();
  return languageOptions[browserCode] ? browserCode : "en";
}

function readCachedSetupCopy(lang) {
  try {
    const raw = window.localStorage.getItem(`${SETUP_COPY_CACHE_PREFIX}:${cleanText(lang)}`);
    return raw ? JSON.parse(raw) : null;
  } catch (_error) {
    return null;
  }
}

function writeCachedSetupCopy(lang, value) {
  try {
    window.localStorage.setItem(`${SETUP_COPY_CACHE_PREFIX}:${cleanText(lang)}`, JSON.stringify(value));
  } catch (_error) {
    // Ignore storage errors.
  }
}

function isActivationMode() {
  return pageMode === "activate" || Boolean(getRequestedActivationToken());
}

function extractActivationToken(value, allowPlain = true) {
  const cleaned = cleanText(value);
  if (!cleaned) {
    return "";
  }

  try {
    const parsed = new URL(cleaned);
    const fromPath = parsed.pathname.split("/").filter(Boolean).pop();
    if (fromPath?.startsWith("nfcm_")) {
      return fromPath;
    }
    const fromQuery = cleanText(parsed.searchParams.get("token"));
    if (fromQuery) {
      return fromQuery;
    }
  } catch (error) {
    // Ignore and fall back to plain token parsing.
  }

  const match = cleaned.match(/nfcm_[a-z0-9]+/i);
  if (match) {
    return match[0];
  }

  return allowPlain ? cleaned : "";
}

function getRequestedActivationToken() {
  const url = new URL(window.location.href);
  const fromQuery = extractActivationToken(url.searchParams.get("token"), false);
  if (fromQuery) {
    return fromQuery;
  }

  const fromPath = extractActivationToken(url.pathname.split("/").filter(Boolean).pop(), false);
  return fromPath;
}

function buildLanguageMarkup(value) {
  const option = languageOptions[value] || languageOptions.en;
  const visual = languageVisuals[value] || languageVisuals.en;
  return `
    <span class="flag-select-swatch ${visual.flagClass}" aria-hidden="true"></span>
    <span class="flag-select-code">${option.code}</span>
    <span class="flag-select-label">${visual.label}</span>
  `;
}

function syncFlagSelect(select) {
  const wrapper = select?.nextElementSibling;
  if (!wrapper?.classList.contains("flag-select")) {
    return;
  }

  const valueNode = wrapper.querySelector("[data-flag-select-value]");
  const optionButtons = wrapper.querySelectorAll("[data-flag-option]");
  valueNode.innerHTML = buildLanguageMarkup(select.value);
  optionButtons.forEach((button) => {
    const active = button.dataset.value === select.value;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function closeFlagSelectMenus() {
  document.querySelectorAll(".flag-select.is-open").forEach((wrapper) => {
    wrapper.classList.remove("is-open");
    const menu = wrapper.querySelector("[data-flag-select-menu]");
    const trigger = wrapper.querySelector("[data-flag-select-trigger]");
    if (menu) {
      menu.hidden = true;
    }
    if (trigger) {
      trigger.setAttribute("aria-expanded", "false");
    }
  });
}

function initFlagSelects() {
  document.querySelectorAll("select[data-flag-menu]").forEach((select) => {
    Array.from(select.options).forEach((option) => {
      const value = option.value;
      const language = languageOptions[value];
      const visual = languageVisuals[value] || languageVisuals.en;
      if (language) {
        option.textContent = `${language.code} - ${visual.label}`;
      }
    });

    const wrapper = document.createElement("div");
    wrapper.className = "flag-select";

    const trigger = document.createElement("button");
    trigger.type = "button";
    trigger.className = "flag-select-trigger";
    trigger.setAttribute("data-flag-select-trigger", "");
    trigger.setAttribute("aria-haspopup", "true");
    trigger.setAttribute("aria-expanded", "false");
    trigger.innerHTML = `
      <span class="flag-select-value" data-flag-select-value></span>
      <span class="flag-select-caret">▾</span>
    `;

    const menu = document.createElement("div");
    menu.className = "flag-select-menu";
    menu.setAttribute("data-flag-select-menu", "");
    menu.hidden = true;

    Object.entries(languageOptions).forEach(([value]) => {
      const optionButton = document.createElement("button");
      optionButton.type = "button";
      optionButton.className = "flag-select-option";
      optionButton.dataset.flagOption = "";
      optionButton.dataset.value = value;
      optionButton.innerHTML = buildLanguageMarkup(value);
      optionButton.addEventListener("click", () => {
        select.value = value;
        syncFlagSelect(select);
        closeFlagSelectMenus();
        select.dispatchEvent(new Event("change", { bubbles: true }));
      });
      menu.appendChild(optionButton);
    });

    trigger.addEventListener("click", () => {
      const isOpen = wrapper.classList.contains("is-open");
      closeFlagSelectMenus();
      if (!isOpen) {
        wrapper.classList.add("is-open");
        menu.hidden = false;
        trigger.setAttribute("aria-expanded", "true");
      }
    });

    wrapper.appendChild(trigger);
    wrapper.appendChild(menu);
    select.insertAdjacentElement("afterend", wrapper);
    syncFlagSelect(select);
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".flag-select")) {
      closeFlagSelectMenus();
    }
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeFlagSelectMenus();
      closeSuccessModal();
    }
  });
}

function normalizeUiLanguage(lang) {
  const code = cleanText(lang).slice(0, 2).toLowerCase();
  return languageOptions[code] ? code : "en";
}

function normalizeProfileLanguage(lang) {
  const code = cleanText(lang).slice(0, 2).toLowerCase();
  return languageOptions[code] ? code : "en";
}

function getSetupCopy(lang = state.uiLang) {
  const normalized = normalizeUiLanguage(lang);
  if (staticUiLanguages.has(normalized)) {
    return setupTranslations[normalized] || setupTranslations.en;
  }

  return state.uiCopyCache[normalized] || setupTranslations.en;
}

function cleanText(value) {
  return value === null || value === undefined ? "" : String(value).trim();
}

function buildFullName(firstName, lastName, fallback = "") {
  const composed = [cleanText(firstName), cleanText(lastName)].filter(Boolean).join(" ");
  return composed || cleanText(fallback);
}

function splitFullName(fullName = "") {
  const normalized = cleanText(fullName);
  if (!normalized) {
    return { firstName: "", lastName: "" };
  }

  const parts = normalized.split(" ").filter(Boolean);
  return {
    firstName: parts.shift() || "",
    lastName: parts.join(" ")
  };
}

function formatMeasurement(value, unit) {
  const normalizedValue = cleanText(value);
  const normalizedUnit = cleanText(unit);
  if (!normalizedValue) {
    return "";
  }
  return normalizedUnit ? `${normalizedValue} ${normalizedUnit}` : normalizedValue;
}

function parseMeasurement(value, fallbackUnit) {
  const normalized = cleanText(value);
  const match = normalized.match(/^([\d.]+)\s*([a-zA-Z'"]+)?$/);
  if (!match) {
    return { value: normalized, unit: fallbackUnit };
  }

  return {
    value: cleanText(match[1]),
    unit: cleanText(match[2] || fallbackUnit).toLowerCase()
  };
}

function formatBirthDate(value) {
  const normalized = cleanText(value);
  if (!normalized) {
    return "-";
  }

  try {
    return new Date(`${normalized}T00:00:00`).toLocaleDateString(root.lang || "en", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  } catch (error) {
    return normalized;
  }
}

function createSlugSeed() {
  return Math.random().toString(36).slice(2, 8);
}

function slugify(value) {
  return cleanText(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function buildAutoSlug(value) {
  const base = slugify(value);
  if (!base) {
    return "";
  }

  return `${base}-${state.slugSeed}`;
}

function formatString(template, values = {}) {
  return String(template || "").replace(/\{(\w+)\}/g, (_, key) => values[key] ?? "");
}

function hasSupabaseConfig() {
  return Boolean(config.supabaseUrl && config.supabaseAnonKey && window.supabase?.createClient);
}

function getClient() {
  if (!state.client) {
    state.client = window.supabase.createClient(config.supabaseUrl, config.supabaseAnonKey);
  }
  return state.client;
}

function populateCountryCodes() {
  countryCodeSelects.forEach((select) => {
    select.innerHTML = countryCodes
      .map((option) => `<option value="${option.value}" title="${option.label}">${option.value}</option>`)
      .join("");
    select.value = "+1";
  });
}

function populateInsuranceOptions() {
  if (!insuranceSelect) {
    return;
  }

  insuranceSelect.innerHTML = [`<option value="">${getSetupCopy(state.uiLang).fieldInsurance || "Insurance"}</option>`]
    .concat(insuranceOptions.map((option) => `<option value="${option}">${option}</option>`))
    .join("");
}

function populateLocationCountries() {
  if (!countrySelect) {
    return;
  }

  const copy = getSetupCopy(state.uiLang);
  const countries = Object.keys(locationCatalog).sort((a, b) => a.localeCompare(b));
  countrySelect.innerHTML = [`<option value="">${copy.fieldCountry || "Country"}</option>`]
    .concat(countries.map((country) => `<option value="${country}">${country}</option>`))
    .join("");
}

function populateStates(country, selectedState = "") {
  if (!stateSelect) {
    return;
  }
  const copy = getSetupCopy(state.uiLang);
  const states = country && locationCatalog[country]?.states ? Object.keys(locationCatalog[country].states) : [];
  stateSelect.innerHTML = [`<option value="">${copy.fieldState || "State / Region"}</option>`]
    .concat(states.map((stateName) => `<option value="${stateName}">${stateName}</option>`))
    .join("");
  stateSelect.value = states.includes(selectedState) ? selectedState : "";
}

function populateCities(country, stateName, selectedCity = "") {
  if (!citySelect) {
    return;
  }
  const copy = getSetupCopy(state.uiLang);
  const cities = country && stateName && locationCatalog[country]?.states?.[stateName] ? locationCatalog[country].states[stateName] : [];
  citySelect.innerHTML = [`<option value="">${copy.fieldCity || "City"}</option>`]
    .concat(cities.map((cityName) => `<option value="${cityName}">${cityName}</option>`))
    .join("");
  citySelect.value = cities.includes(selectedCity) ? selectedCity : "";
}

function syncLocationSelects({ country, stateRegion, city } = {}) {
  if (!countrySelect || !stateSelect || !citySelect) {
    return;
  }

  if (country) {
    countrySelect.value = Object.prototype.hasOwnProperty.call(locationCatalog, country) ? country : "";
  }
  populateStates(countrySelect.value, stateRegion);
  populateCities(countrySelect.value, stateSelect.value, city);
}

function setupHelperPlaceholders() {
  helperFields.forEach((field) => {
    field.dataset.helperPlaceholder = field.getAttribute("placeholder") || "";
    field.addEventListener("focus", () => {
      field.setAttribute("placeholder", "");
    });
    field.addEventListener("blur", () => {
      if (!cleanText(field.value)) {
        field.setAttribute("placeholder", field.dataset.helperPlaceholder || "");
      }
    });
  });
}

function clearDraftFields(preserveContacts = false) {
  const contacts = preserveContacts ? getFamilyTemplate() : null;

  form.reset();
  state.slugSeed = createSlugSeed();
  helperFields.forEach((field) => {
    field.value = "";
    field.setAttribute("placeholder", field.dataset.helperPlaceholder || field.getAttribute("placeholder") || "");
  });

  form.elements.full_record_url.value = "";
  form.elements.full_name.value = "";
  form.elements.public_slug.value = "";
  form.elements.family_group.value = "";
  form.elements.blood_type.value = "";
  form.elements.default_language.value = normalizeProfileLanguage(state.uiLang || "en");
  form.elements.gender.value = "";
  form.elements.weight_unit.value = "kg";
  form.elements.height_unit.value = "cm";
  form.elements.terms_accepted.checked = false;
  syncFlagSelect(form.elements.default_language);
  countryCodeSelects.forEach((select) => {
    select.value = "+1";
  });
  if (form.elements.client_phone) {
    form.elements.client_phone.value = "";
  }
  if (form.elements.client_email) {
    form.elements.client_email.value = "";
  }
  if (insuranceSelect) {
    insuranceSelect.value = "";
  }
  syncLocationSelects({ country: "", stateRegion: "", city: "" });

  if (contacts) {
    applyFamilyTemplate(contacts);
  }

  state.slugTouched = false;
  syncAllMultiEntrySources();
}

function setBloodPlaceholder(copy = getSetupCopy()) {
  const select = form.elements.blood_type;
  if (select?.options?.length) {
    select.options[0].textContent = copy.bloodPlaceholder || setupTranslations.en.bloodPlaceholder;
  }
}

function setOrganDonorOptions(copy = getSetupCopy()) {
  const select = form.elements.organ_donor;
  if (!select?.options?.length) {
    return;
  }

  select.options[0].textContent = copy.organDonorPlaceholder || setupTranslations.en.organDonorPlaceholder;
  if (select.options[1]) {
    select.options[1].textContent = copy.organDonorYes || setupTranslations.en.organDonorYes;
  }
  if (select.options[2]) {
    select.options[2].textContent = copy.organDonorNo || setupTranslations.en.organDonorNo;
  }
}

function setGenderOptions(copy = getSetupCopy()) {
  const select = form.elements.gender;
  if (!select?.options?.length) {
    return;
  }

  select.options[0].textContent = copy.genderPlaceholder || setupTranslations.en.genderPlaceholder;
  if (select.options[1]) {
    select.options[1].textContent = copy.genderMale || setupTranslations.en.genderMale;
  }
  if (select.options[2]) {
    select.options[2].textContent = copy.genderFemale || setupTranslations.en.genderFemale;
  }
  if (select.options[3]) {
    select.options[3].textContent = copy.genderNonBinary || setupTranslations.en.genderNonBinary;
  }
  if (select.options[4]) {
    select.options[4].textContent = copy.genderPreferNot || setupTranslations.en.genderPreferNot;
  }
}

function formatGenderValue(value, copy = getSetupCopy()) {
  const normalized = cleanText(value);
  return (
    {
      male: copy.genderMale || setupTranslations.en.genderMale,
      female: copy.genderFemale || setupTranslations.en.genderFemale,
      non_binary: copy.genderNonBinary || setupTranslations.en.genderNonBinary,
      prefer_not_to_say: copy.genderPreferNot || setupTranslations.en.genderPreferNot
    }[normalized] || "-"
  );
}

function formatOrganDonorValue(value, copy = getSetupCopy()) {
  if (value === true || value === "true") {
    return copy.organDonorYes || setupTranslations.en.organDonorYes;
  }
  if (value === false || value === "false") {
    return copy.organDonorNo || setupTranslations.en.organDonorNo;
  }
  return "-";
}

function digitsOnly(value) {
  return cleanText(value).replace(/\D/g, "");
}

function formatLocalPhone(value) {
  const digits = digitsOnly(value);
  if (!digits) {
    return "";
  }
  if (digits.length <= 3) {
    return digits;
  }
  if (digits.length <= 6) {
    return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  }
  if (digits.length <= 10) {
    return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
  }
  return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6, 10)} ${digits.slice(10)}`;
}

function buildPhone(code, local) {
  const prefix = cleanText(code || "+1");
  const number = formatLocalPhone(local);
  return number ? `${prefix} ${number}`.trim() : "";
}

function parsePhone(phone) {
  const normalized = cleanText(phone);
  if (!normalized) {
    return { countryCode: "+1", localNumber: "" };
  }

  const compact = normalized.replace(/[().\s-]+/g, "");
  const match = [...countryCodes]
    .sort((left, right) => right.value.length - left.value.length)
    .find((option) => compact.startsWith(option.value.replace("+", "")) || normalized.startsWith(option.value));

  if (!match) {
    return { countryCode: "+1", localNumber: formatLocalPhone(normalized) };
  }

  return {
    countryCode: match.value,
    localNumber: formatLocalPhone(compact.slice(match.value.replace("+", "").length))
  };
}

function normalizePhoneDisplay(phone) {
  const parsed = parsePhone(phone);
  return buildPhone(parsed.countryCode, parsed.localNumber);
}

function formatPhoneInput(value) {
  const normalized = cleanText(value);
  if (!normalized) {
    return "";
  }
  if (normalized.startsWith("+")) {
    return normalizePhoneDisplay(normalized);
  }
  return `+1 ${formatLocalPhone(normalized)}`.trim();
}

function getSuggestionLanguage() {
  return normalizeProfileLanguage(form?.elements?.default_language?.value || "en") === "es" ? "es" : "en";
}

function parseMultiEntryValue(value) {
  return String(value ?? "")
    .split(/\r?\n+/)
    .map((item) => item.replace(/^[-*]\s*/, "").trim())
    .filter(Boolean);
}

function syncMultiEntryTextarea(controller, triggerInput = true) {
  controller.textarea.value = controller.items.join("\n");
  if (triggerInput) {
    controller.textarea.dispatchEvent(new Event("input", { bubbles: true }));
  }
}

function renderMultiEntryList(controller) {
  const copy = getSetupCopy(state.uiLang);
  controller.list.innerHTML = "";

  if (!controller.items.length) {
    const empty = document.createElement("p");
    empty.className = "entry-empty";
    empty.textContent = copy.entryComposerEmpty || setupTranslations.en.entryComposerEmpty;
    controller.list.appendChild(empty);
    syncMultiEntryTextarea(controller);
    return;
  }

  controller.items.forEach((item, index) => {
    const row = document.createElement("div");
    row.className = "entry-item";
    row.innerHTML = `
      <span>${item}</span>
      <button type="button" data-remove-index="${index}">x</button>
    `;
    row.querySelector("button").addEventListener("click", () => {
      controller.items.splice(index, 1);
      renderMultiEntryList(controller);
    });
    controller.list.appendChild(row);
  });

  syncMultiEntryTextarea(controller);
}

function renderMultiEntrySuggestions(controller) {
  const locale = getSuggestionLanguage();
  const suggestions = multiEntrySuggestions[controller.name]?.[locale] || multiEntrySuggestions[controller.name]?.en || [];
  controller.datalist.innerHTML = suggestions.map((item) => `<option value="${item}"></option>`).join("");
  controller.quick.innerHTML = "";

  suggestions.slice(0, 4).forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "entry-suggestion";
    button.textContent = item;
    button.addEventListener("click", () => {
      if (!controller.items.includes(item)) {
        controller.items.push(item);
        renderMultiEntryList(controller);
      }
      controller.input.value = "";
      controller.input.focus();
    });
    controller.quick.appendChild(button);
  });
}

function addMultiEntryItem(controller, value) {
  const item = cleanText(value);
  if (!item) {
    return;
  }
  if (!controller.items.includes(item)) {
    controller.items.push(item);
    renderMultiEntryList(controller);
  }
  controller.input.value = "";
}

function refreshMultiEntryComponents() {
  Object.values(state.multiEntryControllers).forEach((controller) => {
    const copy = getSetupCopy(state.uiLang);
    controller.input.placeholder = copy.entryComposerPlaceholder || setupTranslations.en.entryComposerPlaceholder;
    controller.addButton.textContent = copy.entryComposerAdd || setupTranslations.en.entryComposerAdd;
    controller.hint.textContent = copy.entryComposerHint || setupTranslations.en.entryComposerHint;
    renderMultiEntrySuggestions(controller);
    renderMultiEntryList(controller);
  });
}

function syncAllMultiEntrySources() {
  Object.values(state.multiEntryControllers).forEach((controller) => {
    controller.items = parseMultiEntryValue(controller.textarea.value);
    renderMultiEntryList(controller);
  });
}

function initMultiEntryFields() {
  multiEntrySources.forEach((textarea) => {
    const name = cleanText(textarea.name);
    if (!multiEntryFields.includes(name) || state.multiEntryControllers[name]) {
      return;
    }

    const wrapper = document.createElement("div");
    wrapper.className = "entry-builder";

    const composer = document.createElement("div");
    composer.className = "entry-composer";

    const input = document.createElement("input");
    input.type = "text";
    input.className = "entry-input";

    const datalist = document.createElement("datalist");
    datalist.id = `${name}-suggestions`;
    input.setAttribute("list", datalist.id);

    const addButton = document.createElement("button");
    addButton.type = "button";
    addButton.className = "button button-secondary entry-add-button";

    composer.appendChild(input);
    composer.appendChild(addButton);

    const quick = document.createElement("div");
    quick.className = "entry-suggestions";

    const hint = document.createElement("p");
    hint.className = "entry-hint";

    const list = document.createElement("div");
    list.className = "entry-list";

    wrapper.appendChild(composer);
    wrapper.appendChild(datalist);
    wrapper.appendChild(quick);
    wrapper.appendChild(hint);
    wrapper.appendChild(list);

    textarea.hidden = true;
    textarea.classList.add("entry-source");
    textarea.insertAdjacentElement("afterend", wrapper);

    const controller = {
      name,
      textarea,
      wrapper,
      input,
      datalist,
      quick,
      hint,
      list,
      addButton,
      items: parseMultiEntryValue(textarea.value)
    };

    addButton.addEventListener("click", () => addMultiEntryItem(controller, input.value));
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        addMultiEntryItem(controller, input.value);
      }
    });

    state.multiEntryControllers[name] = controller;
  });

  refreshMultiEntryComponents();
}

function getFamilyTemplate() {
  const raw = window.localStorage.getItem("nfc-medico-family-template");
  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw);
  } catch (error) {
    console.warn("Family template parse failed", error);
    return null;
  }
}

function saveFamilyTemplate(raw) {
  const template = {
    family_group: raw.family_group || raw.public_slug,
    default_language: raw.default_language,
    insurance: raw.insurance,
    doctor: raw.doctor,
    clinic: raw.clinic,
    emergency_contact_1_name: raw.emergency_contact_1_name,
    emergency_contact_1_country_code: raw.emergency_contact_1_country_code,
    emergency_contact_1_phone_local: raw.emergency_contact_1_phone_local,
    emergency_contact_2_name: raw.emergency_contact_2_name,
    emergency_contact_2_country_code: raw.emergency_contact_2_country_code,
    emergency_contact_2_phone_local: raw.emergency_contact_2_phone_local
  };

  window.localStorage.setItem("nfc-medico-family-template", JSON.stringify(template));
}

function applyFamilyTemplate(template) {
  Object.entries(template).forEach(([key, value]) => {
    if (form.elements[key]) {
      form.elements[key].value = value || "";
    }
  });
  ["emergency_contact_1_phone_local", "emergency_contact_2_phone_local"].forEach((name) => {
    if (form.elements[name]) {
      form.elements[name].value = formatLocalPhone(form.elements[name].value);
    }
  });
}

function splitNotes(value) {
  return cleanText(value)
    .split(/\r?\n+/)
    .map((line) => line.replace(/^[-*]\s*/, "").trim())
    .filter(Boolean);
}

function getFormState() {
  const firstName = cleanText(form.elements.first_name.value);
  const lastName = cleanText(form.elements.last_name.value);
  const fullName = buildFullName(firstName, lastName, form.elements.full_name.value);
  return {
    first_name: firstName,
    last_name: lastName,
    full_name: fullName,
    family_group: cleanText(form.elements.family_group.value),
    public_slug: slugify(form.elements.public_slug.value),
    default_language: normalizeProfileLanguage(form.elements.default_language.value),
    gender: cleanText(form.elements.gender.value),
    birth_date: cleanText(form.elements.birth_date.value),
    blood_type: cleanText(form.elements.blood_type.value),
    age: cleanText(form.elements.age.value),
    weight: formatMeasurement(form.elements.weight_value.value, form.elements.weight_unit.value),
    weight_value: cleanText(form.elements.weight_value.value),
    weight_unit: cleanText(form.elements.weight_unit.value || "kg"),
    height: formatMeasurement(form.elements.height_value.value, form.elements.height_unit.value),
    height_value: cleanText(form.elements.height_value.value),
    height_unit: cleanText(form.elements.height_unit.value || "cm"),
    organ_donor: cleanText(form.elements.organ_donor.value),
    client_email: cleanText(form.elements.client_email.value),
    client_phone: formatPhoneInput(form.elements.client_phone.value),
    insurance: cleanText(form.elements.insurance.value),
    doctor: cleanText(form.elements.doctor.value),
    clinic: cleanText(form.elements.clinic.value),
    country: cleanText(form.elements.country.value),
    state_region: cleanText(form.elements.state_region.value),
    city: cleanText(form.elements.city.value),
    postal_code: cleanText(form.elements.postal_code.value),
    conditions: cleanText(form.elements.conditions.value),
    allergies: cleanText(form.elements.allergies.value),
    food_allergies: cleanText(form.elements.food_allergies.value),
    medications: cleanText(form.elements.medications.value),
    devices: cleanText(form.elements.devices.value),
    notes: cleanText(form.elements.notes.value),
    emergency_contact_1_name: cleanText(form.elements.emergency_contact_1_name.value),
    emergency_contact_1_country_code: cleanText(form.elements.emergency_contact_1_country_code.value || "+1"),
    emergency_contact_1_phone_local: cleanText(form.elements.emergency_contact_1_phone_local.value),
    emergency_contact_2_name: cleanText(form.elements.emergency_contact_2_name.value),
    emergency_contact_2_country_code: cleanText(form.elements.emergency_contact_2_country_code.value || "+1"),
    emergency_contact_2_phone_local: cleanText(form.elements.emergency_contact_2_phone_local.value),
    full_record_url: cleanText(form.elements.full_record_url.value),
    terms_accepted: Boolean(form.elements.terms_accepted.checked)
  };
}

function sourceFieldsFromRecord(record) {
  const sourceLanguage = normalizeProfileLanguage(record.default_language || "en");
  return {
    conditions: cleanText(record.conditions_source || record[`conditions_${sourceLanguage}`] || record.conditions_en || record.conditions_es),
    allergies: cleanText(record.allergies_source || record[`allergies_${sourceLanguage}`] || record.allergies_en || record.allergies_es),
    food_allergies: cleanText(
      record.food_allergies_source ||
        record[`food_allergies_${sourceLanguage}`] ||
        record.food_allergies_en ||
        record.food_allergies_es
    ),
    medications: cleanText(record.medications_source || record[`medications_${sourceLanguage}`] || record.medications_en || record.medications_es),
    devices: cleanText(record.devices_source || record[`devices_${sourceLanguage}`] || record.devices_en || record.devices_es),
    notes: cleanText(record.notes_source || record[`notes_${sourceLanguage}`] || record.notes_en || record.notes_es)
  };
}

function buildSourceSignature(language, fields) {
  return JSON.stringify({ language, ...fields });
}

function syncSource(raw) {
  const sourceLanguage = normalizeProfileLanguage(raw.default_language);
  const sourceFields = {
    conditions: cleanText(raw.conditions),
    allergies: cleanText(raw.allergies),
    food_allergies: cleanText(raw.food_allergies),
    medications: cleanText(raw.medications),
    devices: cleanText(raw.devices),
    notes: cleanText(raw.notes)
  };
  const signature = buildSourceSignature(sourceLanguage, sourceFields);

  if (signature === state.translation.signature) {
    return { sourceLanguage, sourceFields };
  }

  state.translation.sourceLanguage = sourceLanguage;
  state.translation.signature = signature;
  state.translation.results = { [sourceLanguage]: sourceFields };
  state.translation.pendingKey = "";
  state.translation.pendingPromise = null;

  return { sourceLanguage, sourceFields };
}

function createLoadingFields() {
  const label = getSetupCopy(state.uiLang).previewTranslating || setupTranslations.en.previewTranslating;
  return {
    conditions: label,
    allergies: label,
    food_allergies: label,
    medications: label,
    devices: label,
    notes: label
  };
}

function buildDisplayUrl(slug) {
  const safeSlug = slugify(slug) || "new-profile";
  const configured = cleanText(config.siteBaseUrl);
  return configured.includes("{slug}") ? configured.replace("{slug}", safeSlug) : `${window.location.origin}/med/${safeSlug}`;
}

function buildActivationUrl(token) {
  const safeToken = cleanText(token);
  const configured = cleanText(config.activationBaseUrl);
  return configured.includes("{token}") ? configured.replace("{token}", safeToken) : `${window.location.origin}/activate/${safeToken}`;
}

function syncActivationUrl(token) {
  const url = new URL(window.location.href);
  if (token) {
    url.searchParams.set("token", token);
  } else {
    url.searchParams.delete("token");
  }
  window.history.replaceState({}, "", url);
}

function toggleActivationLayout(hasToken) {
  if (!isActivationMode()) {
    return;
  }

  if (activationGate) {
    activationGate.hidden = Boolean(hasToken);
  }

  if (activationBuilder) {
    activationBuilder.hidden = !hasToken;
  }
}

function ensureStatusPopup() {
  if (statusPopup) {
    return statusPopup;
  }

  statusPopup = document.createElement("div");
  statusPopup.className = "status-popup";
  statusPopup.hidden = true;
  statusPopup.setAttribute("role", "status");
  statusPopup.setAttribute("aria-live", "polite");
  statusPopup.innerHTML = "<strong></strong><p></p>";
  document.body.appendChild(statusPopup);
  return statusPopup;
}

function hideStatusPopup() {
  window.clearTimeout(state.statusTimer);
  if (statusPopup) {
    statusPopup.hidden = true;
  }
  if (statusBanner) {
    statusBanner.hidden = true;
  }
}

function extractErrorDetails(error) {
  if (!error) {
    return "Unknown error";
  }

  const parts = [
    cleanText(error.message),
    cleanText(error.details),
    cleanText(error.hint),
    cleanText(error.code)
  ].filter(Boolean);

  return parts[0] || "Unknown error";
}

function showStatus(type, titleKey, messageKey, values = {}) {
  const copy = getSetupCopy(state.uiLang);
  const popup = ensureStatusPopup();
  const title = formatString(copy[titleKey] || setupTranslations.en[titleKey] || "", values);
  const message = formatString(copy[messageKey] || setupTranslations.en[messageKey] || "", values);

  popup.dataset.state = type;
  popup.querySelector("strong").textContent = title;
  popup.querySelector("p").textContent = message;
  popup.hidden = false;

  if (statusBanner) {
    statusBanner.hidden = true;
  }
  if (statusTitle) {
    statusTitle.textContent = title;
  }
  if (statusMessage) {
    statusMessage.textContent = message;
  }

  window.clearTimeout(state.statusTimer);
  if (type !== "loading") {
    state.statusTimer = window.setTimeout(() => {
      popup.hidden = true;
    }, 4200);
  }
}

function flashStatus(type, titleKey, messageKey, values = {}) {
  showStatus(type, titleKey, messageKey, values);
}

async function invokeFunction(functionName, body) {
  const response = await fetch(`${config.supabaseUrl}/functions/v1/${functionName}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: config.supabaseAnonKey,
      Authorization: `Bearer ${config.supabaseAnonKey}`
    },
    body: JSON.stringify(body)
  });

  const payload = await response.json().catch(() => null);
  if (!response.ok) {
    const error = new Error(payload?.error || payload?.message || "Function request failed");
    error.details = payload?.details || "";
    error.status = response.status;
    throw error;
  }

  return payload;
}

function applyInterfaceCopy(copy) {
  textNodes.forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = copy[key] || setupTranslations.en[key] || "";
  });
  setBloodPlaceholder(copy);
  setOrganDonorOptions(copy);
  setGenderOptions(copy);
  refreshMultiEntryComponents();
}

async function ensureSetupCopy(lang) {
  const normalized = normalizeUiLanguage(lang);
  if (staticUiLanguages.has(normalized)) {
    return setupTranslations[normalized] || setupTranslations.en;
  }

  if (state.uiCopyCache[normalized]) {
    return state.uiCopyCache[normalized];
  }

  const storedCopy = readCachedSetupCopy(normalized);
  if (storedCopy) {
    state.uiCopyCache[normalized] = storedCopy;
    return storedCopy;
  }

  if (state.uiCopyPending[normalized]) {
    return state.uiCopyPending[normalized];
  }

  if (!config.translationFunctionName || !hasSupabaseConfig()) {
    state.uiCopyCache[normalized] = setupTranslations.en;
    return state.uiCopyCache[normalized];
  }

  const sourceFields = Object.fromEntries(
    Object.entries(setupTranslations.en).map(([key, value]) => [key, cleanText(value)])
  );

  const request = invokeFunction(config.translationFunctionName, {
    sourceLanguage: "en",
    targetLanguage: normalized,
    fields: sourceFields
  })
    .then((payload) => {
      const translated = {
        ...setupTranslations.en,
        ...(payload?.fields || {})
      };
      state.uiCopyCache[normalized] = translated;
      writeCachedSetupCopy(normalized, translated);
      delete state.uiCopyPending[normalized];
      return translated;
    })
    .catch((error) => {
      console.warn(`Setup interface translation failed for ${normalized}`, error);
      delete state.uiCopyPending[normalized];
      state.uiCopyCache[normalized] = setupTranslations.en;
      return state.uiCopyCache[normalized];
    });

  state.uiCopyPending[normalized] = request;
  return request;
}

async function translateFields(sourceLanguage, targetLanguage, fields) {
  const normalizedTarget = normalizeProfileLanguage(targetLanguage);
  if (normalizedTarget === sourceLanguage) {
    return fields;
  }

  if (!config.translationFunctionName || !hasSupabaseConfig()) {
    const error = new Error("Translation function missing");
    error.status = 404;
    throw error;
  }

  const cacheKey = `${state.translation.signature}:${normalizedTarget}`;
  if (state.translation.results[normalizedTarget]) {
    return state.translation.results[normalizedTarget];
  }

  if (state.translation.pendingKey === cacheKey && state.translation.pendingPromise) {
    return state.translation.pendingPromise;
  }

  const promise = invokeFunction(config.translationFunctionName, {
    sourceLanguage,
    targetLanguage: normalizedTarget,
    fields
  })
    .then((payload) => {
      const translated = payload?.fields || fields;
      state.translation.results[normalizedTarget] = translated;
      state.translation.pendingKey = "";
      state.translation.pendingPromise = null;
      return translated;
    })
    .catch((error) => {
      state.translation.pendingKey = "";
      state.translation.pendingPromise = null;
      throw error;
    });

  state.translation.pendingKey = cacheKey;
  state.translation.pendingPromise = promise;
  return promise;
}

async function translateFieldsForSave(sourceLanguage, targetLanguage, fields) {
  if (normalizeProfileLanguage(targetLanguage) === sourceLanguage) {
    return { fields, degraded: false };
  }

  try {
    const translated = await translateFields(sourceLanguage, targetLanguage, fields);
    return { fields: translated, degraded: false };
  } catch (error) {
    console.warn(`Translation fallback used for ${targetLanguage}`, error);
    return { fields, degraded: true };
  }
}

async function notifyAdmin(profileName, slug, profileUrl, clientEmail = "", profileLanguage = "en") {
  if (!config.notificationFunctionName || !hasSupabaseConfig()) {
    return false;
  }

  try {
    await invokeFunction(config.notificationFunctionName, {
      profileName,
      slug,
      profileUrl,
      clientEmail,
      profileLanguage
    });
    return true;
  } catch (error) {
    console.warn("Notification failed", error);
    return false;
  }
}

async function loadActivationProfile(token) {
  if (!config.activationFunctionName || !hasSupabaseConfig()) {
    throw new Error("Activation function is not configured");
  }

  const result = await invokeFunction(config.activationFunctionName, {
    action: "load",
    token
  });

  state.activation.token = token;
  state.activation.tokenStatus = cleanText(result?.tokenStatus);
  state.activation.profileLoaded = Boolean(result?.profile);

  return result;
}

async function submitActivationProfile(token, payload) {
  if (!config.activationFunctionName || !hasSupabaseConfig()) {
    throw new Error("Activation function is not configured");
  }

  return invokeFunction(config.activationFunctionName, {
    action: "activate",
    token,
    payload
  });
}

function buildPayload(raw, sourceFields, englishFields, spanishFields) {
  const now = new Date().toISOString();
  return {
    public_slug: raw.public_slug,
    default_language: raw.default_language,
    full_name: raw.full_name,
    first_name: raw.first_name || null,
    last_name: raw.last_name || null,
    family_group: raw.family_group || raw.public_slug || null,
    workflow_status: "ready_to_program",
    gender: raw.gender || null,
    birth_date: raw.birth_date || null,
    blood_type: raw.blood_type || null,
    age: raw.age || null,
    weight: raw.weight || null,
    height: raw.height || null,
    organ_donor: raw.organ_donor === "true" ? true : raw.organ_donor === "false" ? false : null,
    client_email: raw.client_email || null,
    client_phone: raw.client_phone || null,
    insurance: raw.insurance || null,
    doctor: raw.doctor || null,
    clinic: raw.clinic || null,
    country: raw.country || null,
    state_region: raw.state_region || null,
    city: raw.city || null,
    postal_code: raw.postal_code || null,
    conditions_source: sourceFields.conditions,
    allergies_source: sourceFields.allergies,
    food_allergies_source: sourceFields.food_allergies,
    medications_source: sourceFields.medications,
    devices_source: sourceFields.devices,
    notes_source: sourceFields.notes,
    conditions_en: englishFields.conditions,
    allergies_en: englishFields.allergies,
    food_allergies_en: englishFields.food_allergies,
    medications_en: englishFields.medications,
    devices_en: englishFields.devices,
    notes_en: englishFields.notes,
    conditions_es: spanishFields.conditions,
    allergies_es: spanishFields.allergies,
    food_allergies_es: spanishFields.food_allergies,
    medications_es: spanishFields.medications,
    devices_es: spanishFields.devices,
    notes_es: spanishFields.notes,
    emergency_contact_1_name: raw.emergency_contact_1_name || null,
    emergency_contact_1_phone: buildPhone(raw.emergency_contact_1_country_code, raw.emergency_contact_1_phone_local) || null,
    emergency_contact_2_name: raw.emergency_contact_2_name || null,
    emergency_contact_2_phone: buildPhone(raw.emergency_contact_2_country_code, raw.emergency_contact_2_phone_local) || null,
    full_record_url: raw.full_record_url || null,
    terms_accepted_at: now,
    terms_version: "2026-04-09",
    activation_started_at: now,
    activated_at: now,
    is_public: true
  };
}

async function prepareProfilePayload(raw) {
  const { sourceLanguage, sourceFields } = syncSource(raw);
  const englishResult = await translateFieldsForSave(sourceLanguage, "en", sourceFields);
  const spanishResult = await translateFieldsForSave(sourceLanguage, "es", sourceFields);

  return {
    payload: buildPayload(raw, sourceFields, englishResult.fields, spanishResult.fields),
    translationDegraded: englishResult.degraded || spanishResult.degraded
  };
}

function populateForm(values) {
  Object.entries(values).forEach(([key, value]) => {
    if (form.elements[key]) {
      if (form.elements[key].type === "checkbox") {
        form.elements[key].checked = Boolean(value);
      } else {
        form.elements[key].value = value || "";
      }
      if (form.elements[key].matches?.("select[data-flag-menu]")) {
        syncFlagSelect(form.elements[key]);
      }
    }
  });

  ["emergency_contact_1_phone_local", "emergency_contact_2_phone_local"].forEach((name) => {
    if (form.elements[name]) {
      form.elements[name].value = formatLocalPhone(form.elements[name].value);
    }
  });
  syncAllMultiEntrySources();
}

function setInterfaceLanguage(lang) {
  const normalized = normalizeUiLanguage(lang);
  state.uiLang = normalized;
  root.lang = state.uiLang;
  applyInterfaceCopy(getSetupCopy(state.uiLang));
  interfaceSelect.value = state.uiLang;
  syncFlagSelect(interfaceSelect);
  const currentCountry = countrySelect?.value || "";
  const currentState = stateSelect?.value || "";
  const currentCity = citySelect?.value || "";
  const currentInsurance = insuranceSelect?.value || "";
  populateInsuranceOptions();
  if (insuranceSelect) {
    insuranceSelect.value = currentInsurance;
  }
  populateLocationCountries();
  syncLocationSelects({ country: currentCountry, stateRegion: currentState, city: currentCity });

  ensureSetupCopy(normalized).then((copy) => {
    if (state.uiLang !== normalized) {
      return;
    }

    applyInterfaceCopy(copy);
    const selectedInsurance = insuranceSelect?.value || "";
    const selectedCountry = countrySelect?.value || "";
    const selectedState = stateSelect?.value || "";
    const selectedCity = citySelect?.value || "";
    populateInsuranceOptions();
    if (insuranceSelect) {
      insuranceSelect.value = selectedInsurance;
    }
    populateLocationCountries();
    syncLocationSelects({ country: selectedCountry, stateRegion: selectedState, city: selectedCity });
    renderPreview();
  });
}

async function renderPreview() {
  const raw = getFormState();
  const { sourceLanguage, sourceFields } = syncSource(raw);
  const targetLanguage = normalizeProfileLanguage(form.elements.default_language.value || "en");
  let previewFields = sourceFields;

  if (targetLanguage !== sourceLanguage) {
    previewFields = state.translation.results[targetLanguage] || createLoadingFields();
    if (!state.translation.results[targetLanguage]) {
      translateFields(sourceLanguage, targetLanguage, sourceFields)
        .then(() => renderPreview())
        .catch(() => {
          state.translation.results[targetLanguage] = sourceFields;
          showStatus("warning", "statusTranslateErrorTitle", "statusTranslateErrorMessage");
          renderPreview();
        });
    }
  }

  const copy = getSetupCopy(targetLanguage);
  previewCopyNodes.forEach((node) => {
    const key = node.dataset.previewCopy;
    node.textContent = copy[key] || setupTranslations.en[key] || "";
  });

  if (!staticUiLanguages.has(targetLanguage) && !state.uiCopyCache[targetLanguage]) {
    ensureSetupCopy(targetLanguage).then(() => {
      if (normalizeProfileLanguage(form.elements.default_language.value || "en") === targetLanguage) {
        renderPreview();
      }
    });
  }

  document.querySelector('[data-preview="full_name"]').textContent = raw.full_name || "-";
  document.querySelector('[data-preview="conditions"]').textContent = previewFields.conditions || "-";
  document.querySelector('[data-preview="allergies"]').textContent = previewFields.allergies || "-";
  document.querySelector('[data-preview="food_allergies"]').textContent = previewFields.food_allergies || "-";
  document.querySelector('[data-preview="medications"]').textContent = previewFields.medications || "-";
  document.querySelector('[data-preview="devices"]').textContent = previewFields.devices || "-";
  document.querySelector('[data-preview="blood_type"]').textContent = raw.blood_type || "-";
  document.querySelector('[data-preview="gender"]').textContent = formatGenderValue(raw.gender, copy);
  document.querySelector('[data-preview="birth_date"]').textContent = formatBirthDate(raw.birth_date);
  document.querySelector('[data-preview="age"]').textContent = raw.age || "-";
  document.querySelector('[data-preview="weight"]').textContent = raw.weight || "-";
  document.querySelector('[data-preview="height"]').textContent = raw.height || "-";
  document.querySelector('[data-preview="organ_donor"]').textContent = formatOrganDonorValue(raw.organ_donor, copy);
  document.querySelector('[data-preview="doctor"]').textContent = raw.doctor || "-";
  document.querySelector('[data-preview="clinic"]').textContent = raw.clinic || "-";
  document.querySelector('[data-preview="insurance"]').textContent = raw.insurance || "-";
  document.querySelector('[data-preview="country"]').textContent = raw.country || "-";
  document.querySelector('[data-preview="state_region"]').textContent = raw.state_region || "-";
  document.querySelector('[data-preview="city"]').textContent = raw.city || "-";
  document.querySelector('[data-preview="postal_code"]').textContent = raw.postal_code || "-";

  const notes = splitNotes(previewFields.notes);
  previewNoteNodes.forEach((node, index) => {
    node.textContent = notes[index] || (index === 0 ? "-" : "");
  });

  const url = buildDisplayUrl(raw.public_slug);
  generatedUrlNodes.forEach((node) => {
    node.textContent = url;
  });
}

function syncSlugFromName() {
  form.elements.full_name.value = buildFullName(form.elements.first_name.value, form.elements.last_name.value);
  if (!state.slugTouched) {
    form.elements.public_slug.value = buildAutoSlug(form.elements.full_name.value);
  }
}

function startFamilyProfile() {
  const template = getFamilyTemplate() || getFormState();
  clearDraftFields(true);
  applyFamilyTemplate(template);
  hideStatusPopup();
  form.elements.first_name.focus();
  closeSuccessModal();
  renderPreview();
}

function openSavingOverlay() {
  closeErrorModal();
  savingOverlay.classList.remove("is-hidden");
}

function closeSavingOverlay() {
  savingOverlay.classList.add("is-hidden");
}

function openSuccessModal(url, intent = "save") {
  state.lastSavedUrl = url;
  successUrlNode.textContent = url;
  successModal.classList.remove("is-hidden");
  const preferredButton =
    intent === "family"
      ? document.querySelector('[data-action="success-family"]')
      : document.querySelector('[data-action="close-success"]');
  preferredButton?.focus();
}

function closeSuccessModal() {
  successModal.classList.add("is-hidden");
}

function openErrorModal(detail, options = {}) {
  const copy = getSetupCopy(state.uiLang);
  const titleKey = options.titleKey || "errorTitle";
  const textKey = options.textKey || "errorText";
  if (errorTitleNode) {
    errorTitleNode.textContent = copy[titleKey] || setupTranslations.en[titleKey] || copy.errorTitle || setupTranslations.en.errorTitle;
  }
  if (errorTextNode) {
    errorTextNode.textContent = copy[textKey] || setupTranslations.en[textKey] || copy.errorText || setupTranslations.en.errorText;
  }
  errorDetailNode.textContent = detail || "Unknown error";
  errorModal.classList.remove("is-hidden");
}

function closeErrorModal() {
  errorModal.classList.add("is-hidden");
}

function getLegalCopy(lang = state.uiLang) {
  return legalCopy[normalizeUiLanguage(lang)] || legalCopy.en;
}

function openLegalModal(type) {
  const copy = getLegalCopy(state.uiLang);
  const titleMap = {
    terms: copy.termsTitle,
    privacy: copy.privacyTitle,
    disclaimer: copy.disclaimerTitle
  };
  const contentMap = {
    terms: copy.termsHtml,
    privacy: copy.privacyHtml,
    disclaimer: copy.disclaimerHtml
  };

  legalKickerNode.textContent = copy.kicker;
  legalTitleNode.textContent = titleMap[type] || copy.termsTitle;
  legalContentNode.innerHTML = contentMap[type] || copy.termsHtml;
  legalModal.classList.remove("is-hidden");
}

function closeLegalModal() {
  legalModal.classList.add("is-hidden");
}

function setFormEditable(isEditable) {
  form.querySelectorAll("input, textarea, select, button[type='submit']").forEach((field) => {
    if (field.name === "public_slug" || field === interfaceSelect) {
      return;
    }
    field.disabled = !isEditable;
  });

  const familyButton = document.querySelector("[data-action='save-family']");
  if (familyButton) {
    familyButton.hidden = isActivationMode();
    familyButton.disabled = !isEditable;
  }
}

function populateProfileIntoForm(data) {
  const phone1 = parsePhone(data.emergency_contact_1_phone);
  const phone2 = parsePhone(data.emergency_contact_2_phone);
  const nameParts = splitFullName(cleanText(data.full_name));
  const weight = parseMeasurement(data.weight, "kg");
  const height = parseMeasurement(data.height, "cm");
  const sourceFields = sourceFieldsFromRecord(data);

  state.translation.signature = buildSourceSignature(normalizeProfileLanguage(data.default_language || "en"), sourceFields);
  state.translation.results = {
    [normalizeProfileLanguage(data.default_language || "en")]: sourceFields,
    en: {
      conditions: cleanText(data.conditions_en),
      allergies: cleanText(data.allergies_en),
      food_allergies: cleanText(data.food_allergies_en),
      medications: cleanText(data.medications_en),
      devices: cleanText(data.devices_en),
      notes: cleanText(data.notes_en)
    },
    es: {
      conditions: cleanText(data.conditions_es),
      allergies: cleanText(data.allergies_es),
      food_allergies: cleanText(data.food_allergies_es),
      medications: cleanText(data.medications_es),
      devices: cleanText(data.devices_es),
      notes: cleanText(data.notes_es)
    }
  };

  populateForm({
    first_name: cleanText(data.first_name) || nameParts.firstName,
    last_name: cleanText(data.last_name) || nameParts.lastName,
    full_name: cleanText(data.full_name),
    family_group: cleanText(data.family_group),
    public_slug: cleanText(data.public_slug),
    default_language: normalizeProfileLanguage(data.default_language || "en"),
    gender: cleanText(data.gender),
    birth_date: cleanText(data.birth_date),
    blood_type: cleanText(data.blood_type),
    age: cleanText(data.age),
    client_email: cleanText(data.client_email),
    client_phone: normalizePhoneDisplay(cleanText(data.client_phone)),
    weight_value: weight.value,
    weight_unit: weight.unit || "kg",
    height_value: height.value,
    height_unit: height.unit || "cm",
    organ_donor:
      data.organ_donor === true ? "true" : data.organ_donor === false ? "false" : cleanText(data.organ_donor),
    insurance: cleanText(data.insurance),
    doctor: cleanText(data.doctor),
    clinic: cleanText(data.clinic),
    country: cleanText(data.country),
    state_region: cleanText(data.state_region),
    city: cleanText(data.city),
    postal_code: cleanText(data.postal_code),
    conditions: sourceFields.conditions,
    allergies: sourceFields.allergies,
    food_allergies: sourceFields.food_allergies,
    medications: sourceFields.medications,
    devices: sourceFields.devices,
    notes: sourceFields.notes,
    emergency_contact_1_name: cleanText(data.emergency_contact_1_name),
    emergency_contact_1_country_code: phone1.countryCode,
    emergency_contact_1_phone_local: phone1.localNumber,
    emergency_contact_2_name: cleanText(data.emergency_contact_2_name),
    emergency_contact_2_country_code: phone2.countryCode,
    emergency_contact_2_phone_local: phone2.localNumber,
    full_record_url: cleanText(data.full_record_url),
    terms_accepted: Boolean(data.terms_accepted_at)
  });

  form.elements.full_name.value = buildFullName(form.elements.first_name.value, form.elements.last_name.value, data.full_name);
  form.elements.public_slug.value = cleanText(data.public_slug);
  syncLocationSelects({
    country: cleanText(data.country),
    stateRegion: cleanText(data.state_region),
    city: cleanText(data.city)
  });
  state.slugTouched = true;
}

async function loadActivationState() {
  const token = getRequestedActivationToken();
  state.activation.token = token;
  if (tokenInput) {
    tokenInput.value = token;
  }
  toggleActivationLayout(Boolean(token));

  if (!token) {
    setFormEditable(false);
    showStatus("warning", "activationAwaitTitle", "activationAwaitMessage");
    return;
  }

  syncActivationUrl(token);
  setFormEditable(true);
  showStatus("loading", "statusLoadingTitle", "statusLoadingMessage");

  const result = await loadActivationProfile(token);
  populateProfileIntoForm(result.profile || {});
  setInterfaceLanguage(normalizeProfileLanguage(result.profile?.default_language || state.uiLang));
  renderPreview();

  if (result.tokenStatus === "used") {
    setFormEditable(false);
    showStatus("warning", "activationUsedTitle", "activationUsedMessage");
  } else {
    showStatus("success", "activationLoadedTitle", "activationLoadedMessage");
  }
}

async function saveProfile(event) {
  event.preventDefault();

  const raw = getFormState();
  raw.public_slug = cleanText(raw.public_slug) || buildAutoSlug(raw.full_name);
  form.elements.public_slug.value = raw.public_slug;

  if (!raw.full_name) {
    flashStatus("warning", "statusValidationTitle", "statusValidationMessage");
    openErrorModal(getSetupCopy(state.uiLang).statusValidationMessage, {
      titleKey: "statusValidationTitle",
      textKey: "validationPopupText"
    });
    renderPreview();
    return;
  }

  if (!raw.terms_accepted) {
    flashStatus("warning", "statusTermsTitle", "statusTermsMessage");
    openErrorModal(getSetupCopy(state.uiLang).statusTermsMessage, {
      titleKey: "statusTermsTitle",
      textKey: "termsPopupText"
    });
    return;
  }

  if (!hasSupabaseConfig()) {
    showStatus("warning", "statusConfigTitle", "statusConfigMessage");
    return;
  }

  openSavingOverlay();
  showStatus("loading", "statusSavingTitle", "statusSavingMessage");

  try {
    const { payload, translationDegraded } = await prepareProfilePayload(raw);
    const url = buildDisplayUrl(raw.public_slug);

    if (isActivationMode()) {
      const activationToken = state.activation.token || getRequestedActivationToken();
      if (!activationToken) {
        throw new Error(getSetupCopy(state.uiLang).activationAwaitMessage || "Activation token missing");
      }

      const result = await submitActivationProfile(activationToken, payload);
      state.activation.tokenStatus = "used";
      setFormEditable(false);
      openSuccessModal(result?.publicUrl || url, "save");
      if (translationDegraded) {
        showStatus("warning", "statusTranslateErrorTitle", "statusTranslateErrorMessage");
      } else {
        showStatus("success", "statusSavedTitle", "statusSavedMessage");
      }
    } else {
      const { error } = await getClient()
        .from(config.profilesWriteTable || "medical_profiles")
        .upsert(payload, { onConflict: "public_slug" });

      if (error) {
        throw error;
      }

      saveFamilyTemplate(raw);
      const emailOk = await notifyAdmin(raw.full_name, raw.public_slug, url, raw.client_email, raw.default_language);

      openSuccessModal(url, state.pendingMode);
      if (state.pendingMode === "save" && !new URLSearchParams(window.location.search).get("slug")) {
        clearDraftFields(false);
        renderPreview();
      }
      if (translationDegraded) {
        showStatus("warning", "statusTranslateErrorTitle", "statusTranslateErrorMessage");
      } else if (emailOk) {
        showStatus("success", "statusSavedTitle", "statusSavedMessage");
      } else {
        showStatus("warning", "statusEmailWarningTitle", "statusEmailWarningMessage");
      }
    }
  } catch (error) {
    console.warn("Save failed", error);
    const details = extractErrorDetails(error);
    showStatus("error", "statusSaveErrorTitle", "statusSaveErrorMessage", { details });
    openErrorModal(details);
  } finally {
    state.pendingMode = "save";
    closeSavingOverlay();
  }
}

async function loadExistingProfile() {
  const slug = cleanText(new URLSearchParams(window.location.search).get("slug"));
  if (!slug || !hasSupabaseConfig()) {
    return;
  }

  try {
    const { data, error } = await getClient()
      .from(config.profilesWriteTable || "medical_profiles")
      .select("*")
      .eq(config.lookupField || "public_slug", slug)
      .maybeSingle();

    if (error || !data) {
      throw error || new Error("Profile not found");
    }

    populateProfileIntoForm(data);
    setInterfaceLanguage(normalizeProfileLanguage(data.default_language || state.uiLang));
    flashStatus("success", "statusLoadedTitle", "statusLoadedMessage", { slug });
  } catch (error) {
    console.warn("Load existing profile failed", error);
    flashStatus("warning", "statusLoadErrorTitle", "statusLoadErrorMessage", { slug });
  }
}

function bindEvents() {
  const saveProfileButton = form.querySelector('button[type="submit"]');
  const saveFamilyButton = document.querySelector('[data-action="save-family"]');

  if (tokenEntryForm) {
    tokenEntryForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const token = extractActivationToken(tokenInput?.value);
      if (!token) {
        flashStatus("warning", "activationAwaitTitle", "activationAwaitMessage");
        return;
      }

      window.location.href = buildActivationUrl(token);
    });
  }

  interfaceSelect.addEventListener("change", () => {
    setInterfaceLanguage(interfaceSelect.value);
  });

  ["first_name", "last_name"].forEach((fieldName) => {
    form.elements[fieldName].addEventListener("input", () => {
      syncSlugFromName();
      renderPreview();
    });
  });

  form.elements.birth_date.addEventListener("change", () => {
    syncSlugFromName();
    renderPreview();
  });

  form.addEventListener("input", (event) => {
    if (!["first_name", "last_name"].includes(event.target.name)) {
      renderPreview();
    }
  });

  form.elements.default_language.addEventListener("change", () => {
    refreshMultiEntryComponents();
    renderPreview();
  });

  if (countrySelect && stateSelect && citySelect) {
    countrySelect.addEventListener("change", () => {
      populateStates(countrySelect.value);
      populateCities(countrySelect.value, "");
      renderPreview();
    });

    stateSelect.addEventListener("change", () => {
      populateCities(countrySelect.value, stateSelect.value);
      renderPreview();
    });

    citySelect.addEventListener("change", renderPreview);
  }

  ["emergency_contact_1_phone_local", "emergency_contact_2_phone_local"].forEach((name) => {
    form.elements[name].addEventListener("blur", () => {
      form.elements[name].value = formatLocalPhone(form.elements[name].value);
      renderPreview();
    });
  });

  if (form.elements.client_phone) {
    form.elements.client_phone.addEventListener("blur", () => {
      form.elements.client_phone.value = formatPhoneInput(form.elements.client_phone.value);
      renderPreview();
    });
  }

  form.addEventListener("submit", saveProfile);
  saveProfileButton.addEventListener("click", () => {
    state.pendingMode = "save";
  });
  if (saveFamilyButton) {
    saveFamilyButton.hidden = isActivationMode();
    saveFamilyButton.addEventListener("click", () => {
      state.pendingMode = "family";
      form.requestSubmit();
    });
  }
  const successFamilyButton = document.querySelector("[data-action='success-family']");
  if (successFamilyButton) {
    successFamilyButton.hidden = isActivationMode();
    successFamilyButton.addEventListener("click", startFamilyProfile);
  }
  document.querySelectorAll('[data-action="close-success"]').forEach((button) => {
    button.addEventListener("click", closeSuccessModal);
  });
  document.querySelectorAll('[data-action="close-error"]').forEach((button) => {
    button.addEventListener("click", closeErrorModal);
  });
  document.querySelectorAll("[data-legal-open]").forEach((button) => {
    button.addEventListener("click", () => {
      openLegalModal(button.dataset.legalOpen);
    });
  });
  document.querySelectorAll('[data-action="close-legal"]').forEach((button) => {
    button.addEventListener("click", closeLegalModal);
  });
}

async function init() {
  populateCountryCodes();
  populateInsuranceOptions();
  populateLocationCountries();
  syncLocationSelects({ country: "", stateRegion: "", city: "" });
  initFlagSelects();
  setupHelperPlaceholders();
  initMultiEntryFields();
  clearDraftFields(false);
  bindEvents();
  setInterfaceLanguage(state.uiLang);
  hideStatusPopup();
  if (!hasSupabaseConfig()) {
    showStatus("warning", "statusConfigTitle", "statusConfigMessage");
  }

  if (isActivationMode()) {
    await loadActivationState().catch((error) => {
      console.warn("Activation state load failed", error);
      setFormEditable(false);
      toggleActivationLayout(false);
      showStatus("error", "activationInvalidTitle", "activationInvalidMessage");
    });
  } else {
    await loadExistingProfile();
  }

  renderPreview();
}

init();
