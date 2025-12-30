import { Background } from "@/components/background";
import { LoginForm } from "@/components/login-form";

export default function Page() {
  return (
    <Background>
      <section className="py-28 lg:pt-44 lg:pb-32">
        {/* <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10"> */}
        {/* <div className="w-full max-w-sm"> */}
        <LoginForm />
        {/* </div> */}
      </section>
    </Background>
  );
}
