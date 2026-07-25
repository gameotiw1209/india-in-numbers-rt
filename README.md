# India on the Global Stage

A data platform that tracks India's position on the world stage — comparing India against 40+ countries across Economy, Governance, Technology & Innovation, and Education, with AI-generated insights powered by Google Gemini.

🔗 **Live site:** india-in-numbers.vercel.app

---

## Features

- **India vs. Any Country** — Compare India against 40 countries (major economies, neighboring nations, and regional powers) across 4 categories with 16+ indicators.
- **AI-Powered Insights** — Click "Generate Insight" on any category to get a real-time, AI-written summary comparing India and the selected country, powered by Google Gemini.
- **Sourced Data** — Every indicator links back to its original source (World Bank, IMF, UNESCO, WIPO, Transparency International, and more).
- **Fully Responsive** — Built to work cleanly across desktop and mobile.

---

## Tech Stack

- **Next.js** (App Router) + **TypeScript**
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Google Gemini API** for AI-generated comparison summaries
- **Vercel** for hosting and deployment

---

## Getting Started

### 1. Clone the repository

\`\`\`bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
\`\`\`

### 2. Install dependencies

\`\`\`bash
npm install
\`\`\`

### 3. Set up environment variables

Copy the example file and fill in your own key:

\`\`\`bash
cp .env.example .env.local
\`\`\`

You'll need a free Gemini API key from [ai.google.dev](https://ai.google.dev) — no credit card required. Add it to `.env.local`:

\`\`\`
GEMINI_API_KEY=your_key_here
\`\`\`

### 4. Run the development server

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view it.

---

## Deploying

This project is set up to deploy on [Vercel](https://vercel.com):

1. Push your repo to GitHub.
2. Import the project into Vercel.
3. Add `GEMINI_API_KEY` under **Settings → Environment Variables** (make sure **Production** is checked).
4. Deploy.

---

## Data Note

Comparison data used in this project is illustrative, compiled for demonstration purposes based on publicly available global indices. Each indicator links to its respective source organization for readers who want to explore the original datasets further.

---

## License

This project was built for a coding challenge and is open for reference and learning purposes.
