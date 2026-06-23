import { z } from "zod";

/**
 * Schema de variáveis de ambiente esperadas pelo app.
 * Adicione aqui todas as env vars que o projeto usa (cliente + servidor).
 */
export const envSchema = z.object({
  // Variáveis do servidor (process.env)
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  PORT: z.coerce.number().default(3000),
  HOST: z.string().default("0.0.0.0"),

  // Exemplo: chaves de API e integrações (descomente conforme necessário)
  // SUPABASE_URL: z.string().url().optional(),
  // SUPABASE_ANON_KEY: z.string().optional(),
  // OPENAI_API_KEY: z.string().optional(),

  // Variáveis do cliente (VITE_*)
  // VITE_APP_NAME: z.string().default("Berberina"),
  // VITE_API_URL: z.string().url().default("http://localhost:3000"),
});

export type Env = z.infer<typeof envSchema>;

/**
 * Valida as variáveis de ambiente em runtime.
 * Lança erro detalhado se alguma env obrigatória estiver faltando ou malformada.
 */
export function validateEnv(rawEnv: Record<string, string | undefined> = process.env) {
  const parsed = envSchema.safeParse(rawEnv);

  if (!parsed.success) {
    const issues = parsed.error.issues
      .map((i) => `  • ${i.path.join(".")}: ${i.message}`)
      .join("\n");

    throw new Error(
      `[ENV VALIDATION FAILED]\nAs seguintes variáveis de ambiente estão inválidas ou faltando:\n${issues}\n\nVerifique seu arquivo .env ou as variáveis configuradas no servidor.`,
    );
  }

  return parsed.data;
}
