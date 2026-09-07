// Import the global CSS file.
// This makes our global styles available throughout the application.
import "./globals.css";

// Import the reusable Header component.
import Header from "@/components/Header";

// Import the reusable Footer component.
import Footer from "@/components/Footer";

// RootLayout is the main layout for the whole application.
//
// The children parameter represents the page currently being displayed.
// For example:
// - app/page.tsx is displayed when we visit "/"
// - app/about/page.tsx is displayed when we visit "/about"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Return the main HTML structure of the application.
  return (
    <html lang="en">
      <body>
        {/* Display the Header at the top of every page. */}
        <Header />

        {/* Display the current page inside the layout. */}
        {children}

        {/* Display the Footer at the bottom of every page. */}
        <Footer />
      </body>
    </html>
  );
}