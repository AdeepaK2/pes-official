import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import teamData from "@/components/teamData";
import TeamSection from "@/components/TeamSection";

export default function CommitteesPage() {
  return (
    <>
      <Navbar />
      <div className="p-6 md:p-12 bg-gray-900 min-h-screen flex flex-col items-center">
        {teamData.map((section, index) => (
          <TeamSection key={index} title={section.category} members={section.members} />
        ))}
      </div>
      <Footer />
    </>
  );
}


