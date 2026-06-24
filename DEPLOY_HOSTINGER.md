# Deploy na Hostinger (Site Estático)

A Hostinger compartilhada só serve arquivos estáticos. Este projeto é
TanStack Start com SSR, mas inclui um build estático (SPA) que funciona
na Hostinger.

## Por que dava o erro
> "Framework não suportado ou estrutura de projeto inválida"

A Hostinger procura `index.html` (ou `package.json` com framework
reconhecido) **na raiz do diretório publicado**. O `index.html` deste
projeto é gerado pelo build em `dist/static/`, não fica versionado no Git.

## Passo a passo

### Opção A — Deploy via Git na Hostinger (recomendado)
Nas configurações de deploy automático da Hostinger:

- **Build command:** `npm install && npm run build:static`
- **Publish directory / Output directory:** `dist/static`
- **Node version:** 20 ou superior

O `index.html` ficará em `dist/static/index.html` (raiz do diretório
publicado) — é isso que a Hostinger valida.

### Opção B — Upload manual (File Manager / FTP)
1. No seu computador:
   ```bash
   npm install
   npm run build:static
   ```
2. Abra a pasta `dist/static/`.
3. Faça upload de **todo o conteúdo dessa pasta** (incluindo `index.html`
   e a pasta `assets/`) para `public_html/` na Hostinger.

> ⚠️ Faça upload do **conteúdo** de `dist/static/`, não da pasta inteira.
> O `index.html` precisa ficar diretamente em `public_html/index.html`.

## Limitações do build estático
- Não tem SSR — a página é renderizada no navegador (SPA).
- Rotas dinâmicas / server functions (`createServerFn`) **não funcionam**
  neste modo. Se você precisar disso, use a publicação do próprio Lovable
  (botão Publish) ou um host com Node/Workers (Cloudflare Pages, Vercel,
  Render).

## Rotas no Hostinger (fallback SPA)
Se ao navegar para uma rota e dar refresh aparecer 404, adicione um
`.htaccess` em `public_html/` com:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```
