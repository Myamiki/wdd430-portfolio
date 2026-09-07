// About is the component for the About page.
//
// Because this file is located at:
// app/about/page.tsx
//
// Next.js automatically makes this page available at:
// /about
export default function About() {
  // Return the content of the About page.
  return (
    // <main> contains the main content of the page.
    <main className="max-w-4xl mx-auto px-4 py-12">

      {/* Main heading for the About page. */}
      <h1 className="text-3xl font-bold mb-4">
        About Me
      </h1>

      {/* Information about my background. */}
      <p className="text-lg text-gray-700 mb-4">
        My name is Prayer Marangwanda. I am from Zimbabwe and
        currently live in South Africa. I am studying software
        development and building my skills in web development.
      </p>

      {/* Additional information about my goals. */}
      <p className="text-lg text-gray-700">
        I enjoy learning how websites and applications work,
        and I am developing my skills with technologies such as
        HTML, CSS, JavaScript, React, Node.js, and Next.js.
      </p>

    </main>
  );
}