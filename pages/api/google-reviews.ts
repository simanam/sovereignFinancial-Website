// /pages/api/google-reviews.js
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { placeId, pagetoken } = req.query;

  if (!placeId) {
    return res.status(400).json({ error: "Missing placeId parameter" });
  }

  const apiKey = process.env.GOOGLE_API_KEY;

  if (!apiKey) {
    console.error("GOOGLE_API_KEY not found in environment variables");
    return res.status(500).json({ error: "API key not configured" });
  }

  // Build URL with optional page token for pagination
  let url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}&fields=reviews`;

  if (pagetoken) {
    url += `&pagetoken=${pagetoken}`;
  }

  try {
    console.log("Fetching from URL:", url.replace(apiKey, "HIDDEN_KEY"));

    const response = await fetch(url);
    const data = await response.json();

    console.log("Google API Response:", data);

    if (data.status !== "OK") {
      console.error("Google API Error:", data.status, data.error_message);
      return res.status(400).json({
        error:
          data.error_message || `Google API returned status: ${data.status}`,
        status: data.status,
      });
    }

    // Return reviews with pagination info
    res.status(200).json({
      reviews: data.result?.reviews || [],
      next_page_token: data.next_page_token || null,
    });
  } catch (error) {
    console.error("Fetch error:", error);
    res.status(500).json({ error: "Failed to fetch Google Reviews" });
  }
}
