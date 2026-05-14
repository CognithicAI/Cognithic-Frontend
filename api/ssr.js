export const config = { runtime: "edge" };

import server from "../dist/server/server.js";

export default async function handler(req) {
  try {
    const response = await server.fetch(req);
    return response;
  } catch (err) {
    console.error(err);
    return new Response("Internal Server Error", { status: 500 });
  }
}
