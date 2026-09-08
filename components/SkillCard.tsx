type SkillCardProps = {
  skill: string;
};

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <h3 className="text-lg font-semibold">
        {skill}
      </h3>
    </div>
  );
}