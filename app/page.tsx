// Import the reusable ProjectList component.
// ProjectList will display all of our portfolio projects.
import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "Sleep Outside",

    description:
      "A responsive outdoor equipment e-commerce website created as a team project.",

    technologies: ["HTML", "CSS", "JavaScript", "Vite"],

    // Link to the GitHub repository.
    link: "https://github.com/Myamiki/sleepout",
  },

  {
    title: "Movies and Actors API",

    description:
      "A REST API that manages movie and actor information with CRUD operations and API documentation.",

    // Technologies used to build the project.
    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "Swagger",
      "Jest",
    ],

    // Link to the GitHub repository.
    link: "https://github.com/Myamiki/340-starter",
  },
];

// Home is the main component for the home page.
//
// This is a Server Component because we do not use "use client".
export default function Home() {
  // Return the content of the home page.
  return (
    // <main> contains the main content of the page.
    <main className="container mx-auto px-4 py-12">

      {/* Introduction section at the top of the portfolio. */}
      <section className="text-center py-12">

        {/* Main heading of the portfolio. */}
        <h1 className="text-4xl font-bold mb-4">
          My Portfolio
        </h1>

        {/* Short introduction about me and my portfolio. */}
        <p className="text-lg text-gray-700">
          I am a software development student learning how to build
          modern websites and applications. Here are some of my projects.
        </p>

      </section>

      {/* 
        Display all of the projects.

        The projects array is passed to ProjectList
        using the "projects" prop.
      */}
      <ProjectList projects={projects} />

    </main>
  );
}