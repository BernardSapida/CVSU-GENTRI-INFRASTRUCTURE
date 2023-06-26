import QualityPolicy from "@/components/home/QualityPolicy";
import MissionVision from "@/components/home/MisionVision";
import AboutGentri from "@/components/home/AboutGentri";
import Landing from "@/components/home/Landing";

export default function Home() {
  return (
    <div className="mx-3">
      <Landing />
      <MissionVision />
      <QualityPolicy />
      <AboutGentri />
    </div>
  );
}
