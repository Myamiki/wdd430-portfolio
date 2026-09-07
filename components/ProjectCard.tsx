// This interface describes the information that a ProjectCard needs.
// TypeScript uses this to make sure we provide the correct type of data.
interface ProjectCardProps {

  // The title of the project.
  // string means this value must be text.
  title: string;

  // A short explanation of the project.
  description: string;

  // An array of technologies used in the project.
  // For example: ["HTML", "CSS", "JavaScript"]
  technologies: string[];

  // The project link is optional.
  // The ? means the property does not have to be provided.
  link?: string;
}

// This component receives the project information as props.
// Props are values passed from another component to this component.
export default function ProjectCard({
  title,
  description,
  technologies,
  link,
}: ProjectCardProps) {

  // Return the visual structure of one project card.
  return (

    // <article> is a semantic HTML element used for a self-contained
    // piece of content, such as one project.
    <article className="p-4 border-l-4 border-blue-600 bg-gray-50 rounded shadow-sm">

      {/* Display the project title. */}
      <h3 className="text-xl font-bold mb-2">
        {title}
      </h3>

      {/* Display the project description. */}
      <p className="text-gray-700 mb-3">
        {description}
      </p>

      {/* 
        Display the technologies used by the project.
        
        technologies is an array.
        .join(", ") converts the array into one piece of text.
        
        Example:
        ["HTML", "CSS", "JavaScript"]
        
        becomes:
        HTML, CSS, JavaScript
      */}
      <p className="text-sm text-gray-600">
        <strong>Technologies:</strong>{" "}
        {technologies.join(", ")}
      </p>

      {/* 
        The && operator is used for conditional rendering.
        
        This means:
        "Only show the link if link exists."
        
        If link is undefined, this section will not appear.
      */}
      {link && (

        // This paragraph contains our external project link.
        <p className="mt-2">

          {/* 
            <a> is used for external websites.
            
            href contains the URL.
            target="_blank" opens the project in a new browser tab.
            rel="noopener noreferrer" is a security best practice
            when opening a link in a new tab.
          */}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            View Project
          </a>

        </p>
      )}

    </article>
  );
}