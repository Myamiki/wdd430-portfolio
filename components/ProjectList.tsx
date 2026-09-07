// Import the ProjectCard component.
// ProjectList will use ProjectCard to display each project.
import ProjectCard from "./ProjectCard";

// This interface describes what one project looks like.
interface Project {

  // The name of the project.
  title: string;

  // A description of the project.
  description: string;

  // Technologies used to create the project.
  technologies: string[];

  // Optional link to the project.
  link?: string;
}

// This interface describes the props that ProjectList receives.
interface ProjectListProps {

  // ProjectList expects an array of Project objects.
  projects: Project[];
}

// This is the ProjectList component.
// It receives a collection of projects.
export default function ProjectList({
  projects,
}: ProjectListProps) {

  // Return the project list.
  return (

    // <section> groups related content together.
    //
    // grid = creates a CSS grid.
    // gap-4 = adds space between the cards.
    // md:grid-cols-2 = on medium-sized screens and larger,
    // display two cards per row.
    <section className="grid gap-4 md:grid-cols-2">

      {/* 
        .map() goes through every project in the projects array.
        
        For every project, we create a ProjectCard.
      */}
      {projects.map((project) => (

        // ProjectCard displays one project.
        //
        // key helps React identify each item in the list.
        //
        // {...project} is the spread operator.
        // It passes all the project properties to ProjectCard.
        <ProjectCard
          key={project.title}
          {...project}
        />

      ))}

    </section>
  );
}