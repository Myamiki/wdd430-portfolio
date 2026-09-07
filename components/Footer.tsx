// This is the Footer component.
// It is a Server Component because we do not use "use client".
export default function Footer() {

  // Return the footer section of the website.
  return (

    // <footer> is a semantic HTML element used for content
    // at the bottom of a webpage.
    <footer className="bg-gray-800 text-white py-4 mt-12">

      {/* 
        container = creates a responsive container.
        mx-auto = centers the container.
        text-center = centers the text.
      */}
      <div className="container mx-auto text-center">

        {/* 
          &copy; displays the copyright symbol ©.
          
          new Date() creates a JavaScript Date object.
          
          .getFullYear() gets the current year.
          
          So the year changes automatically:
          
          2026 → 2027 → 2028 → etc.
        */}
        <p>
          Copyright &copy; {new Date().getFullYear()} | Prayer Marangwanda |
          All rights reserved
        </p>

      </div>
    </footer>
  );
}