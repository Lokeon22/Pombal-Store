"use client";
import { useAuth } from "../../context/auth";
import { useRouter } from "next/navigation";
import { StripeProduct } from "@/types/Products";

interface BuyProps {
  product: StripeProduct[];
  id: number;
}

export function BuyButton({ product, id }: BuyProps) {
  const { isAuthenticated, user } = useAuth();
  const router = useRouter();

  async function handleSubscription(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();

    let stripe_product_id: StripeProduct[] | string = product;

    if (id >= 17 && id <= 22) {
      stripe_product_id = product[2].id;
    } else if (id == 2 || (id >= 29 && id <= 33)) {
      stripe_product_id = product[1].id;
    } else {
      stripe_product_id = product[3].id;
    }

    if (isAuthenticated) {
      const res: string = await fetch(
        `${process.env.NEXT_PUBLIC_POMBAL_STORE_VERCEL}/api/payment`,
        {
          method: "POST",
          body: JSON.stringify({
            user: user,
            priceId: stripe_product_id,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => res.json());

      window.location.assign(res);
    } else {
      router.push("/login");
    }
  }

  return (
    <button
      onClick={(e) => handleSubscription(e)}
      className="h-14 px-2 py-1 bg-green-500 text-white rounded-full hover:brightness-90 hover:duration-300 uppercase font-bold"
      type="button"
    >
      Comprar agora
    </button>
  );
}
