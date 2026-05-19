# Bila DogChef

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black) ![Vite](https://img.shields.io/badge/Vite-bundler-646CFF?logo=vite&logoColor=white) ![Claude API](https://img.shields.io/badge/Claude-API-blueviolet) ![Netlify](https://img.shields.io/badge/Netlify-Functions-00C7B7?logo=netlify&logoColor=white) ![Licença](https://img.shields.io/badge/licença-MIT-green)

App React onde a Bila (poodle chef) sugere receitas criativas com base nos ingredientes que você tem em casa, usando IA.

## Como funciona

1. Adicione os ingredientes disponíveis na sua cozinha
2. A IA gera uma receita criativa com o que você tem
3. A receita é exibida em formato rich text com markdown

## Stack

- **React 18** + Vite
- **Anthropic Claude API** para geração de receitas
- **HuggingFace Inference** (alternativa)
- **react-markdown** para renderização das receitas
- **Netlify Functions** como backend serverless

## Instalação

```bash
git clone https://github.com/ooshimakenji/Bila-dogchef.git
cd Bila-dogchef
npm install
npm run dev
```

## Deploy

Configurado para Netlify com serverless functions em `netlify/functions/`.

```bash
npm run build
```

## Licença

MIT
