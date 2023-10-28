import Head from "next/head";
import * as React from "react";
// import { Moon, Sun } from "lucide-react";
// import { useTheme } from "next-themes";
// import { ModeToggle } from "~/components/ModeToggle";
import Footer from '../components/Footer';

// import { Button } from "ComponentsUI/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "ComponentsUI/ui/card"
// import { Input } from "ComponentsUI/ui/input"
// import { Label } from "ComponentsUI/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "ComponentsUI/ui/tabs"


// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "ComponentsUI/ui/accordion";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import Image from 'next/image';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  // const modeToggle = ModeToggle();

  // Define the image source dynamically based on darkMode
  const imageSrc = darkMode ? "/images/hsbDarkMode.png" : "/images/hsbLightMode.png";

  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <Head>
          <title>Energy sustainability at Ohio State</title>
          <meta name="description" content="Generated by create-t3-app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

      <header className="sticky top-0 bg-stone-50 dark:bg-stone-900"> 

            <div className="flex justify-between items-center w-full px-6 top-text">
            
            <div className="h-16 w-16">
              <Image
                src={imageSrc}
                width={800}
                height={800}
                alt="Logo"
              />
            </div>

            <ul className="flex justify-end items-center">
              <li className="mr-10">
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl text-stone-900 dark:text-stone-50"
                />
              </li>
            </ul>
          </div>

       </header>

        <main className="flex min-h-screen flex-col items-center justify-center bg-stone-25 dark:bg-stone-900">
          

          <div className="container mx-auto p-4">
            <div className="border shadow-xl border-black dark:border-white rounded p-4">
              <h3 className="text-5xl text-left mb-1.5 ml-24 dark:text-stone-50 mt-4">
                Impact Statement
              </h3>
              <p className="mission-text text-xl ml-20 mb-3 text-stone-900 dark:text-stone-50">
                Creating a sustainability dashboard for the Smart Campus Challenge
                can impact campus behavior by raising awareness, promoting
                sustainable practices, and fostering competition. It holds the
                university reducing-water-consumptionable, provides data for decision-making, and
                directly supports resource stewardship goals. Additionally, it
                educates and advocates for sustainability, potentially leading to
                collaborations and a more eco-conscious campus community.
              </p>
            </div>
          </div>

          <div className="container mx-auto p-4">
              <h3 className="text-5xl mb-1.5 ml-24 dark:text-stone-50 mt-4 text-center">
                Water Usage on Campus
              </h3>
              <Tabs defaultValue="reducing-water-consumption" className="w-fill">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="reducing-water-consumption" className="">Reducing Potable Water Consumption</TabsTrigger>
                  <TabsTrigger value="responsible-water-habits">Promoting Responsible Water Habits</TabsTrigger>
                  <TabsTrigger value="water-conservation-achievements">Water Conservation Acheievments</TabsTrigger>
                </TabsList>
                <TabsContent value="reducing-water-consumption">
                  <Card>
                    <CardHeader>
                      <CardTitle>Reducing Water Consumption</CardTitle>
                      <CardDescription>
                        Make changes to your reducing-water-consumption here. Click save when you're done.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                    Discuss the importance of conserving water resources on campus.
                    </CardContent>
                    <CardContent className="space-y-2">
                    Highlight initiatives such as low-flow fixtures, rainwater harvesting, and water-efficient landscaping that aim to reduce potable water usage.
                    </CardContent>
                    <CardContent className="space-y-2">
                    Explain how these efforts contribute to the university's sustainability goals.
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="responsible-water-habits">
                  <Card>
                    <CardHeader>
                      <CardTitle>Responsible Water Habits</CardTitle>
                      <CardDescription>
                      Educate users on the significance of individual water conservation practices.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                    Encourage simple actions like turning off taps, reporting leaks, and using water responsibly in daily activities.
                    </CardContent>
                    <CardContent className="space-y-2">
                    Showcase the collective impact of small changes in behavior.
                    </CardContent>
                    <CardContent className="space-y-2">
                    Explain how these efforts contribute to the university's sustainability goals.
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="water-conservation-achievements">
                  <Card>
                    <CardHeader>
                      <CardTitle>Water Conservation Achievements</CardTitle>
                      <CardDescription>
                      Share data on the reduction of water consumption over time.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                    Discuss the importance of conserving water resources on campus.
                    </CardContent>
                    <CardContent className="space-y-2">
                    Highlight specific buildings or areas that have made substantial progress in water conservation.
                    </CardContent>
                    <CardContent className="space-y-2">
                    Recognize water-efficient practices in campus landscaping and irrigation.
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
