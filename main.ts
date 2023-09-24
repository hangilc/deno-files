import { Hono } from 'https://deno.land/x/hono@v3.7.2/mod.ts'
import { serveStatic } from 'https://deno.land/x/hono@v3.7.2/middleware.ts'

const app = new Hono();
app.use("/static/*", serveStatic({ root: './'}));
Deno.serve(app.fetch);