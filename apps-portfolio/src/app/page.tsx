import bg from './images/bright_mountain_wallpaper.jpg'
import AppButton from "./appButton";
import Time from './time';
import Icon from '@mdi/react';
import { mdiAccountTie, mdiBriefcaseVariant, mdiLightbulbGroup, mdiSignal, mdiWifi, mdiBattery50  } from '@mdi/js';


const name="rounded-2xl hover:scale-110 ease-in-out duration-300 "
const Home = (): JSX.Element => {
  return (
    <main className="bg-cover w-screen h-screen background">
      <div className="flex justify-between p-1 px-4 pt-2">
        <div><Time/></div>
        <div className="bg-black"></div>
        <div className="flex">
          <Icon path={mdiSignal} size={1} />
          <Icon path={mdiWifi} size={1} />
          <Icon className="rotate-90" path={mdiBattery50} size={1} />
        </div>
      </div>
      <div className="flex p-4">
        <AppButton name="About Me" icon={<Icon className={name+"bg-sky-500"} path={mdiAccountTie} size={3} />} />
        <AppButton name="Skills" icon={<Icon className={name+"bg-sky-500"} path={mdiAccountTie} size={3} />} />
        <AppButton name="Experience" icon={<Icon className={name+"bg-sky-500"} path={mdiBriefcaseVariant} size={3} />} />
        <AppButton name="Projects" icon={<Icon className={name+"bg-sky-500"} path={mdiLightbulbGroup} size={3} />} />
      </div>
    </main>
  );
}

export default Home
