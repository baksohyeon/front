import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

// This is an example of to protect an API route
export default async function protectHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });
  if (!session) {
    return res.send({
      error:
        "This is protected content. You can't access this content unless you are signed in this service.",
    });
  }

  res.send({
    content: "Hello! You can see this page since you are signed in",
  });
}
