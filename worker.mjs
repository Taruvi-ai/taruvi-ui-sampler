const UPSTREAM_API = "https://api.finefoods.refine.dev";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,HEAD,POST,PUT,PATCH,DELETE,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With",
};

function withCors(response) {
  const headers = new Headers(response.headers);
  Object.entries(corsHeaders).forEach(([key, value]) => headers.set(key, value));
  headers.set("Vary", "Origin");
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "OPTIONS" && url.pathname.startsWith("/api/")) {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    if (url.pathname.startsWith("/api/")) {
      const upstreamPath = url.pathname.replace(/^\/api/, "");
      const upstreamUrl = `${UPSTREAM_API}${upstreamPath}${url.search}`;
      const upstreamResponse = await fetch(upstreamUrl, {
        method: request.method,
        headers: request.headers,
        body: request.method === "GET" || request.method === "HEAD" ? undefined : request.body,
      });

      return withCors(upstreamResponse);
    }

    return env.ASSETS.fetch(request);
  },
};
