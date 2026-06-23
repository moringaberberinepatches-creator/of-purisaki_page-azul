import { validateEnv } from "../src/lib/env";

/**
 * Script standalone para validar variáveis de ambiente.
 * Use antes do deploy ou no hook de start do servidor.
 *
 * Uso:
 *   npx tsx scripts/validate-env.ts
 *   # ou
 *   bun run scripts/validate-env.ts
 */
try {
  const env = validateEnv();
  console.log("✅ Variáveis de ambiente validadas com sucesso.");
  console.log(`   NODE_ENV=${env.NODE_ENV} | PORT=${env.PORT} | HOST=${env.HOST}`);
  process.exit(0);
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
}
