import Topics from "../components/topics";
import SpeakerInfo from "../components/speakerInfos";
import Infos from "../components/infos";
import Agenda from "../components/agenda";
import Enrollment from "../components/enrollment";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center py-4 gap-[100px] bg-[#94A2AB]">
      <Topics />
      <SpeakerInfo />
      <Infos />
      <Agenda />
      <Enrollment />
    </main>
  );
}
