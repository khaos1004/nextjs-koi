'use client'

import Pc from "@/components/view/main/Pc";
import Pad from "@/components/view/main/Pad";
import Mobile from "@/components/view/main/Mobile";
import {
  LanguageProvider,
  default as LanguageContext,
} from "@/context/Language";


function HomePage() {

  return (
    <>
      <div className="hidden sm:block">
        <Pc />
      </div>

      <div className="hidden pad:block">
        <Pad />
      </div>

      <div className="hidden ss:block">
        <Mobile />
      </div>
    </>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <HomePage />
    </LanguageProvider>
  );
}
