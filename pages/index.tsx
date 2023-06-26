import QualityPolicy from "@/components/home/QualityPolicy";
import MissionVision from "@/components/home/MisionVision";
import AboutCvSU from "@/components/home/AboutCvSU";
import Landing from "@/components/home/Landing";

export default function Home() {
  return (
    <div className="mx-3">
      <Landing />
      <MissionVision />
      <QualityPolicy />
      <AboutCvSU />
    </div>
  );
}
