# Noraio Creative Launch Website

## Project info

**URL**: https://lovable.dev/projects/2c6872ef-deb7-4ec4-8bc1-e485751afbf2

## Recent Updates

- ✅ **Video Integration**: Replaced 3D interactive component with promotional video (`Noraio website 1110.mp4`)
- ✅ **Dependencies**: Successfully installed all required packages
- ✅ **Development Server**: Site running on http://localhost:8080/
- ✅ **Interactive Animations**: Added scroll-triggered animations throughout the homepage
- ✅ **Custom Animation System**: Created reusable scroll animation hooks and CSS animations
- ✅ **Enhanced UX**: Smooth fade-in, scale, and hover effects for better user engagement
- ✅ **Translations Context**: Wrapped app with `TranslationProvider` to support `useTranslation` in components like `LanguageSwitcher` and prevent runtime errors.

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/2c6872ef-deb7-4ec4-8bc1-e485751afbf2) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Translations

To use the translation hook `useTranslation`, ensure your component tree is wrapped with `TranslationProvider`.

Example location: `src/App.tsx` wraps the app providers with `TranslationProvider`.

Troubleshooting: If you see the error "useTranslation must be used within a TranslationProvider", confirm that the component rendering `useTranslation` is under the provider and that there are no multiple React roots rendering parts of the tree without the provider.

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/2c6872ef-deb7-4ec4-8bc1-e485751afbf2) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

## Tracking

See the live project checklist in `Docs/TRACKING.md`.

## Adding translations

1) Add keys to `src/contexts/TranslationContext.tsx` in the `translations` map.
2) Use `const { t } = useTranslation()` and replace hardcoded strings with `t('your.key')`.
3) For RTL languages (e.g., `ar`), the provider sets `dir="rtl"` automatically.
4) Persisted language is stored in `localStorage` under `language`.
5) Menu and footer strings use `menu.*` keys; hero/cta/stats use `hero.*`, `cta.*`, `stats.*`.
