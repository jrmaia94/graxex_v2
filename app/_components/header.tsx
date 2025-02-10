import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex items-center justify-between bg-primary-foreground p-3">
      <Link href={"/"}>
        <Image
          alt="Logo da empresa"
          src="/logo-vertical.png"
          width={40}
          height={40}
        />
      </Link>
      <UserButton showName />
    </div>
  );
};

export default Header;
