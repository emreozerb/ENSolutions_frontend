# Email Setup Guide voor ContactForm

## Stap 1: EmailJS Account Aanmaken

1. Ga naar [https://www.emailjs.com/](https://www.emailjs.com/)
2. Klik op "Sign Up" en maak een gratis account aan
3. Verifieer je email adres

## Stap 2: Email Service Toevoegen

1. Log in op EmailJS dashboard
2. Ga naar "Email Services" in het menu
3. Klik op "Add New Service"
4. Kies je email provider (bijvoorbeeld Gmail, Outlook, etc.)
5. Voor Hotmail/Outlook:
   - Selecteer "Outlook"
   - Log in met je ensolutionsbe@hotmail.com account
   - Geef EmailJS toestemming
6. Kopieer de **Service ID** (bijvoorbeeld: service_abc123)

## Stap 3: Email Template Configureren

**BELANGRIJK:** Je template moet geconfigureerd zijn om naar jouw email te sturen!

1. Ga naar "Email Templates" in het menu
2. Open je "Contact Us" template (template_66lpy1o)
3. **Controleer deze instellingen:**

   **To Email:** ensolutionsbe@hotmail.com (dit moet HANDMATIG ingesteld worden in de template settings!)

   **Subject:** Nieuw contactformulier bericht van {{from_name}}

   **Content (HTML):**
   ```html
   <p>Je hebt een nieuw bericht ontvangen via het contactformulier:</p>

   <h3>Contactgegevens:</h3>
   <p><strong>Naam:</strong> {{from_name}}</p>
   <p><strong>Email:</strong> {{from_email}}</p>

   <h3>Bericht:</h3>
   <p>{{message}}</p>

   <hr>
   <p><em>Dit bericht is verzonden via het ENSolutions contactformulier.</em></p>
   ```

4. **KRITIEK:** Klik op "Settings" in de template editor en vul bij "Send To" het veld: **ensolutionsbe@hotmail.com**
5. Klik op "Save"

## Stap 4: Public Key Ophalen

1. Ga naar "Account" in het menu
2. Je ziet je "Public Key" (bijvoorbeeld: abc123xyz789)
3. Kopieer deze key

## Stap 5: .env File Aanmaken

1. Maak een nieuw bestand aan: `.env` in de root van je project
2. Voeg de volgende inhoud toe (vervang met jouw echte waarden):

```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=abc123xyz789
```

3. Sla het bestand op
4. **BELANGRIJK:** Voeg `.env` toe aan je `.gitignore` zodat je credentials niet op GitHub komen!

## Stap 6: Application Herstarten

1. Stop je development server (Ctrl+C in de terminal)
2. Start opnieuw: `npm run dev`

## Testen op Localhost

**JA, je kunt het testen op localhost!**

EmailJS werkt perfect op localhost omdat:
- Het werkt via hun API (niet via een eigen mail server)
- Er zijn geen CORS-problemen
- Je kunt direct emails verzenden vanaf localhost

### Test Procedure:

1. Start je development server: `npm run dev`
2. Open de website in je browser (meestal http://localhost:5173)
3. Scroll naar het contactformulier
4. Vul het formulier in:
   - Naam: Test Naam
   - Email: jouw-test@email.com
   - Bericht: Dit is een test bericht
5. Klik op "Verstuur bericht"
6. Als alles goed is geconfigureerd:
   - Je ziet "Bedankt! We antwoorden binnen 24 uur."
   - Er wordt een email gestuurd naar ensolutionsbe@hotmail.com
7. Check je inbox op ensolutionsbe@hotmail.com

### Als er een error is:

1. Open de browser console (F12 → Console tab)
2. Kijk naar de foutmeldingen
3. Veelvoorkomende problemen:
   - **"Invalid credentials"**: Check of je Service ID, Template ID en Public Key correct zijn
   - **"Template not found"**: Check of de Template ID klopt
   - **"Service not found"**: Check of de Service ID klopt
   - Je ziet de error message op de pagina: "Er is iets misgegaan..."

## EmailJS Free Tier Limiet

- **200 emails per maand** (gratis)
- Dat is meer dan voldoende voor een bedrijfswebsite
- Als je meer nodig hebt, kun je upgraden naar een betaald plan

## Security Notes

- De EmailJS keys die je in .env zet zijn PUBLIC keys, dus relatief veilig
- De echte authenticatie gebeurt aan EmailJS kant
- Voeg wel altijd .env toe aan .gitignore!

## Troubleshooting

### Email komt niet aan?

1. Check spam folder
2. Verifieer dat ensolutionsbe@hotmail.com correct is gespeld in ContactForm.tsx
3. Check EmailJS dashboard → Logs om te zien of de email is verzonden

### "Cannot read properties of undefined" error?

- Je .env file is niet correct geladen
- Herstart de development server
- Check of de variabelen VITE_ prefix hebben (verplicht in Vite!)

### Template parameters kloppen niet?

In ContactForm.tsx sturen we:
- from_name
- from_email
- message
- to_email

Zorg dat je template deze exact zo gebruikt: {{from_name}}, {{from_email}}, {{message}}
