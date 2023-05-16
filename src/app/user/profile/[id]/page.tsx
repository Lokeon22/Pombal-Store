import { UserDetails } from "@/components/UserDetails";
import { CustomerStripe } from "@/types/Customers";

async function verifyCustomer() {
  const customersList: CustomerStripe = await fetch(
    "https://api.stripe.com/v1/customers",
    {
      headers: {
        Authorization: "Bearer " + process.env.STRIPE_API_KEY,
        "Content-Type": "application/json",
      },
      cache: "no-cache",
    }
  ).then((res) => res.json());

  return { customersList };
}

export default async function Profile() {
  const { customersList } = await verifyCustomer();

  return (
    <main className="w-full h-full max-w-[1300px] mx-auto my-0 text-white px-2 2xl:px-4 py-5 animate-changeOpacity">
      <h2 className="text-2xl sm:text-3xl text-blue-400 mt-1 sm:mt-6">
        Detalhes da conta
      </h2>
      <section className="grid grid-cols-1 gap-4 sm:gap-0 sm:grid-cols-2 my-5 sm:my-14">
        <UserDetails data={customersList.data} />
      </section>
    </main>
  );
}
