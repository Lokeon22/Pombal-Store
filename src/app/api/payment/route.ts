import { stripe } from "@/services/stripe";
import { NextResponse, NextRequest } from "next/server";

interface DataProps {
  user: {
    id: number;
    name: string;
    email: string;
  };
  priceId: string;
}

export async function POST(req: NextRequest) {
  let data: DataProps = await req.json();
  let priceId = data.priceId;

  const stripeCustomer = await stripe.customers.create({
    name: data.user.name,
    email: data.user.email,
  });

  const session = await stripe.checkout.sessions.create({
    customer: stripeCustomer.id,
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `http://localhost:3000/user/profile/${data.user.id}`,
    cancel_url: process.env.STRIPE_CANCEL_URL,
  });

  return NextResponse.json(session.url);
}
