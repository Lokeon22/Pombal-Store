import { stripe } from "@/services/stripe";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const prices = await stripe.prices.list({
    limit: 10,
  });

  return NextResponse.json(prices.data.reverse());
}
