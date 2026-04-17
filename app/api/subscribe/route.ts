export async function POST(req: Request) {
  const { email } = await req.json();

  const response = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": process.env.BREVO_API_KEY!,
    },
    body: JSON.stringify({
      email: email,
      listIds: [2], 
      updateEnabled: true,
    }),
  });

  if (!response.ok) {
    return Response.json({ error: "Failed" }, { status: 400 });
  }

  return Response.json({ success: true });
}