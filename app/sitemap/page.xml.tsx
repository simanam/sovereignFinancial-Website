// app/sitemap/page.tsx

import { format } from "date-fns";
import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://www.sovereignfinances.com";

  const staticPages = ["", "contact"];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticPages
      .map((page) => {
        const url = `${baseUrl}/${page}`;
        return `
        <url>
          <loc>${url}</loc>
          <lastmod>${format(new Date(), "yyyy-MM-dd")}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.8</priority>
        </url>
      `;
      })
      .join("")}
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
