import Background from "@/components/organisms/Background";

import MainPageCarousel from "@/components/molecules/MainPageCarousel";

export default function Home() {
  return (
    <Background>
      <div className={`w-full grid grid-cols-2 gap-20`}>
        <div className={`flex justify-center items-center`}>
          <MainPageCarousel/>
        </div>
        <div className={`flex justify-center items-center bg-blue-500`}>
          2
        </div>
      </div>
    </Background>
  );
}
