import { NextRequest, NextResponse } from "next/server";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { getPrivateMetadata } from "../_data-access/getPrivateMetadata";
import { revalidatePath } from "next/cache";

export async function GET() {
  const { userId } = await auth();

  const client = await clerkClient();

  if (userId) {
    const user = await client.users.getUser(userId);
    return NextResponse.json(user.privateMetadata);
  }
}

export async function POST(request: NextRequest) {
  const { userId } = await request.json();

  console.log(request);

  const client = await clerkClient();
  const userMetadata = await getPrivateMetadata(userId);
  userMetadata.theme = userMetadata.theme === "dark" ? "" : "dark";

  await client.users.updateUserMetadata(userId, {
    privateMetadata: {
      theme: userMetadata.theme,
    },
  });

  revalidatePath("/");

  return NextResponse.json(userMetadata);
}
