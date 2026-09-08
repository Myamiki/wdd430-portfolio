import SkillCard from "@/components/SkillCard";

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">

      <h1 className="text-3xl font-bold mb-4">
        About Me
      </h1>

      <p className="text-lg text-gray-700 mb-4">
        My name is Prayer Marangwanda. I am from Zimbabwe and
        currently live in South Africa. I am studying software
        development and building my skills in web development.
      </p>

      <p className="text-lg text-gray-700 mb-8">
        I am learning how to build websites and applications
        using HTML, CSS, JavaScript, React, Node.js, and Next.js.
        I enjoy learning new programming skills and improving
        my ability to create useful web applications.
      </p>

      <section>
        <h2 className="text-2xl font-bold mb-4">
          My Skills
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          <SkillCard skill="HTML" />
          <SkillCard skill="CSS" />
          <SkillCard skill="JavaScript" />
          <SkillCard skill="React" />
          <SkillCard skill="Node.js" />
          <SkillCard skill="Next.js" />
        </div>
      </section>

    </main>
  );
}