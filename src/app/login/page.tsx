import { FormLogin } from "@/components/FormLogin";
import { FormRegister } from "@/components/FormLogin/FormRegister";

export default function Login() {
  return (
    <main className="w-full h-full max-w-[1300px] mx-auto my-0 text-white px-2 2xl:px-4 py-2.5">
      <h2 className="text-blue-400 text-2xl mt-1">Identificação</h2>
      <section className="py-3 sm:py-4 px-2 sm:px-0 flex flex-col sm:flex-row justify-around items-start sm:items-center">
        <FormLogin />
        <FormRegister />
      </section>
    </main>
  );
}
