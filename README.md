# Bila DogChef

App React onde a Bila (poodle chef) sugere receitas baseadas nos ingredientes que você tem em casa, usando IA.

## Demo

Adicione ingredientes da sua cozinha e a IA gera uma receita criativa com o que você tem disponível.

## Stack

- **React 18** + Vite
- **Anthropic Claude API** / **HuggingFace Inference** para geração de receitas
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
