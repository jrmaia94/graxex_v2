import { redirect } from "next/navigation";

const RedirectToHome = async () => {
  redirect("/home");
};

export default RedirectToHome;
