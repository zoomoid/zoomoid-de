import Image from "next/image";
import styles from "./styles.module.css";
import {
  AnimationContainer as C,
  StaggeringAnimationContainer as SC,
} from "./AnimationContainer";
import ScrollHook from "./ScrollHook";
import { navigation } from "@/app/api/navigation/navigation.mock";
import { socials } from "@/app/api/socials/socials.mock";
import { type Socials as ISocials } from "@/components/footer";
import Footer from "@/components/footer/Footer";
import { type Navigation as INavigation } from "@/components/navigation";
import Navigation from "@/components/navigation/Navigation";
import { YearRoll } from "./YearRoll";
import Link from "next/link";
import Container from "./Container";
import Start from "./Start";
import Epilogue from "./Epilogue";

async function getNavigation() {
  return Promise.resolve(navigation) as Promise<INavigation>;
}
async function getSocials() {
  return Promise.resolve(socials) as Promise<ISocials>;
}

export default async function Page() {
  const navigationData = getNavigation();
  const socialsData = getSocials();

  const [navigation, socials] = await Promise.all([
    navigationData,
    socialsData,
  ]);

  return (
    <>
      <Navigation navigation={navigation}></Navigation>
      <main className={styles.page}>
        {/* <ScrollHook></ScrollHook> */}
        <div className="text-neutral-300 py-[6.6vmax] lg:py-[1.6vmax]">
          <Start></Start>
          <Container></Container>
          <Epilogue></Epilogue>
        </div>
      </main>
      <Footer socials={socials}></Footer>
    </>
  );
}
