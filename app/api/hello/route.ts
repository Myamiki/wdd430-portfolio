// This function handles GET requests to /api/hello.
export async function GET() {
  // Return a JSON response from our API.
  //
  // The response contains a "message" property
  // with a simple greeting.
  return Response.json({
    message: "Hello from Next.js API!",
  });
}