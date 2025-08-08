// /pages/api/google-reviews.js
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { placeId } = req.query;

  if (!placeId) {
    return res.status(400).json({ error: "Missing placeId parameter" });
  }

  const apiKey = process.env.GOOGLE_API_KEY; // Store API key in environment variables
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}&fields=reviews`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== "OK") {
      return res.status(400).json({ error: data.error_message });
    }

    res.status(200).json({ reviews: data.result.reviews });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch Google Reviews" });
  }
}
