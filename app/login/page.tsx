import { SignInButton } from "@clerk/nextjs";
import Image from "next/image";
import { Button } from "../_components/ui/button";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import RedirectToClerk from "../_components/rediret-to-clerk";

const LoginPage = async () => {
  const { userId } = await auth();

  if (userId) {
    redirect("/");
  }
  return (
    <div className="flex h-full overflow-hidden">
      {/* ESQUERDA */}

      <div className="relative flex h-full w-[100%] flex-col items-center justify-center bg-gray-900 md:w-[35%]">
        <div className="z-10 max-w-[230px]">
          <div>
            <h1 className="text-3xl font-bold text-primary">Bem vindo</h1>
            <p className="text-primary">Faça login para continuar</p>
          </div>
          <SignInButton>
            <Button
              className="mt-4 w-full bg-primary text-primary-foreground"
              variant={"secondary"}
            >
              Fazer login ou criar conta
            </Button>
          </SignInButton>
          <RedirectToClerk />
        </div>
        <div className="absolute h-[900px] w-[900px] translate-x-[-300px] rotate-45 rounded-lg bg-[#485663] opacity-15" />
      </div>

      {/* DIREITA */}
      <div className="relative hidden h-full w-[0%] bg-gray-900 md:block md:w-[65%]">
        <Image
          fill
          className="object-cover opacity-60"
          alt="Logo da empresa"
          src={"/background.jpeg"}
        />
      </div>
    </div>
  );
};

export default LoginPage;
