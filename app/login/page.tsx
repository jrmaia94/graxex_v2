import { SignInButton } from "@clerk/nextjs";
import Image from "next/image";
import { Button } from "../_components/ui/button";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const { userId } = await auth();

  if (userId) {
    redirect("/");
  }
  return (
    <div className="flex h-full grid-cols-2 md:grid">
      {/* ESQUERDA */}

      <div className="relative flex h-full w-full flex-col items-center justify-center bg-gray-900">
        <div>
          <h1 className="text-3xl font-bold text-primary-foreground">
            Bem vindo
          </h1>
          <p className="text-primary-foreground">Faça login para continuar</p>
        </div>
        <SignInButton>
          <Button className="mt-4" variant={"secondary"}>
            Fazer login ou criar conta
          </Button>
        </SignInButton>
      </div>

      {/* DIREITA */}
      <div className="relative hidden h-full w-full bg-gray-900 md:block">
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
