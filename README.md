# Kruger Virtual Assistant Demo

![Kruger Virtual Assistant Demo Screenshot](./public/demo.png)

This project is a Next.js implementation of HeyGen's Streaming Avatar SDK tailored for Kruger. It boots straight into Kora, Kruger's virtual receptionist, so you can demonstrate a branded welcome experience for visitors and stakeholders.

## Getting started

1. **Clone the repository** and move into the folder.
2. **Install dependencies** with `npm install` (or `pnpm install` / `yarn install`).
3. **Create a `.env` file** and add your HeyGen Enterprise API key as `HEYGEN_API_KEY`. The key powers the API route that mints secure access tokens for the avatar session.
4. _(Optional)_ Provide an OpenAI API key if you plan to experiment with the OpenAI integrations.
5. **Run the dev server** with `npm run dev` and open [http://localhost:3000](http://localhost:3000).

## Kruger-specific branding

- Global metadata (title, favicon) is defined in [`app/layout.tsx`](./app/layout.tsx).
- The navigation bar, including logo usage and outbound links, lives in [`components/NavBar.tsx`](./components/NavBar.tsx).
- The logo image is expected at `public/kruger-logo.png`; place your preferred Kruger mark there.

## Customising Kora's persona

Kora's onboarding script is stored in the `DEFAULT_KNOWLEDGE_BASE` string inside [`components/InteractiveAvatar.tsx`](./components/InteractiveAvatar.tsx). The configuration drawer also exposes the same text so you can tweak the prompt live without touching code. Update either location to adjust the tone or details shared with visitors.

## Helpful references

- Kruger corporate site: [https://www.kruger.com/en/](https://www.kruger.com/en/)
- HeyGen Streaming Avatar documentation: [https://docs.heygen.com/interactive-avatar](https://docs.heygen.com/interactive-avatar)

Feel free to adapt the UI, styling, or copy to match the exact Kruger deployment scenario you're demonstrating.
