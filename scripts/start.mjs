#!/usr/bin/env node
/**
 * Wrapper de start para deploy em Node.js.
 * Valida variáveis de ambiente básicas antes de iniciar o servidor Nitro.
 *
 * Espera que o build já tenha sido gerado com:
 *   NITRO_PRESET=node-server npm run build
 *
 * Uso:
 *   node scripts/start.mjs
 *   PORT=8080 node scripts/start.mjs
 */

function validateEnv() {
  const NODE_ENV = process.env.NODE_ENV || "production";
  const rawPort = process.env.PORT || process.env.NITRO_PORT || "3000";
  const PORT = Number(rawPort);
  const HOST = process.env.HOST || process.env.NITRO_HOST || "0.0.0.0";

  if (Number.isNaN(PORT) || PORT < 1 || PORT > 65535) {
    throw new Error(`[ENV ERROR] PORT="${rawPort}" não é uma porta válida (1-65535).`);
  }

  return { NODE_ENV, PORT, HOST };
}

try {
  const env = validateEnv();
  console.log(`🚀 Iniciando servidor em ${env.HOST}:${env.PORT} (${env.NODE_ENV})…`);

  // O runtime node-server do Nitro já escuta sozinho quando importado;
  // basta garantir que PORT/HOST estejam no process.env.
  process.env.PORT = String(env.PORT);
  process.env.HOST = env.HOST;

  // Tenta importar o bundle gerado pelo Nitro no local padrão (.output)
  // ou no diretório customizado (dist).
  const possiblePaths = ["../.output/server/index.mjs", "../dist/server/index.mjs"];

  let imported = false;
  for (const p of possiblePaths) {
    try {
      await import(p);
      imported = true;
      break;
    } catch {
      // tenta próximo
    }
  }

  if (!imported) {
    console.error(
      "❌ Não foi possível localizar o bundle do servidor.\n" +
        "   Certifique-se de rodar 'npm run build' antes de 'npm start'.",
    );
    process.exit(1);
  }
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
}
