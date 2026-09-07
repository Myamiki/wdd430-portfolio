// Import the Link component from Next.js.
// Link allows us to move between pages without doing a full browser refresh.
import Link from "next/link";

// This is our Header component.
// It is a Server Component because we do NOT use "use client".
export default function Header() {
  // The component returns the HTML/JSX that will appear on the page.
  return (
    // <header> is a semantic HTML element used for the top section
    // of a webpage, usually containing the website title and navigation.
    <header className="bg-blue-600 text-white py-4 shadow-md">

      {/* 
        This div controls the width, spacing, and alignment of the
        content inside the header.
        
        max-w-4xl = limits the maximum width of the content.
        mx-auto = centers the content horizontally.
        px-4 = adds horizontal padding.
        flex = places the title and navigation in a row.
        justify-between = puts space between the title and navigation.
        items-center = vertically centers the items.
      */}
      <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">

        {/* 
          This displays my name in the header.
          
          id="header-title" gives this element a unique HTML identifier.
          text-2xl = makes the text larger.
          font-bold = makes the text bold.
        */}
        <div id="header-title" className="text-2xl font-bold">
          Prayer Marangwanda
        </div>

        {/* 
          <nav> is a semantic HTML element used for navigation links.
        */}
        <nav>

          {/* 
            <ul> creates an unordered list for our navigation links.
            
            flex = places the links next to each other.
            gap-6 = adds space between the links.
          */}
          <ul className="flex gap-6">

            {/* Each navigation link is placed inside a list item. */}
            <li>

              {/* 
                Link is a Next.js component.
                
                href="/" means this link goes to the home page,
                which is located at app/page.tsx.
              */}
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>

            <li>

              {/* 
                This Link goes to the About page.
                
                href="/about" connects to:
                app/about/page.tsx
              */}
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>

          </ul>
        </nav>

      </div>
    </header>
  );
}