import { redirect, type ActionFunction } from "@remix-run/node";
import LogoutFormComponent from "~/components/utils/logout-form.component";
import { destroySession, getSession } from "~/server/session.server";

export const action: ActionFunction = async ({ request }) => {
  const session = await getSession(request.headers.get('Cookie'));
  return redirect('/login', {
    headers: {
      'Set-Cookie': await destroySession(session),
    },
  });
}

export default function Logout() {
  return <LogoutFormComponent />
}
