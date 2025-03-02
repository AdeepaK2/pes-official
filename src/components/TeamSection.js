import TeamMemberCard from "./TeamMemberCard";

const TeamSection = ({ title, members }) => {
  // Separate leads from other members
  const leads = members.filter((member) =>
    member.role.toLowerCase().includes("lead")
  );
  const others = members.filter(
    (member) => !member.role.toLowerCase().includes("lead")
  );

  return (
    <section
      className="w-full max-w-6xl mx-auto mt-12 mb-12 rounded-3xl overflow-hidden relative p-8 "
      style={{
        background: `linear-gradient(to right, #16400F, #71F45D)`,
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
      }}
    >
      {/* Header */}
      <div
        className="py-2 text-center text-3xl font-bold"
        style={{ color: "#FFFFFF", fontFamily: "Amenti Bold" }}
      >
        {title}
      </div>

      {/* Inner white container */}
      <div className="bg-white rounded-3xl overflow-hidden">
        {/* Leads (Centered at the top) */}
        {leads.length > 0 && (
          <div className="flex flex-wrap justify-center gap-8 p-8">
            {leads.map((lead, index) => (
              <TeamMemberCard key={`lead-${index}`} {...lead} />
            ))}
          </div>
        )}

        {/* Other Members */}
        <div
          className="p-8 grid grid-auto-flow: row auto-cols-auto gap-8 justify-center place-items-center"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          }}
        >
          {others.map((member, index) => (
            <TeamMemberCard key={`member-${index}`} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
