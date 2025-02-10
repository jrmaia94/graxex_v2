import { clerkClient } from "@clerk/nextjs/server";

export const getPrivateMetadata = async (userId: string) => {
  const client = await clerkClient();

  const user = await client.users.getUser(userId);

  return user.privateMetadata;
};
