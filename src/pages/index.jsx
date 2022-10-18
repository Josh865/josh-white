import Head from 'next/head';
import Image from 'next/future/image';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid';

import { LaravelLogo } from '@/components/logos/laravel';
import { NextLogo } from '@/components/logos/next';
import { ReactLogo } from '@/components/logos/react';
import { VueLogo } from '@/components/logos/vue';
import { TailwindLogo } from '@/components/logos/tailwind';
import { ReactNativeLogo } from '@/components/logos/react-native';

import joshImage from '@/images/josh.jpg';
import wavesImage from '@/images/waves.svg';
import eedsDashboardImage from '@/images/projects/eeds-dashboard.jpg';
import covidStoriesImage from '@/images/projects/covid-stories.jpg';
import copyrightOfficeImage from '@/images/projects/copyright-office.jpg';
import eedsAppImage from '@/images/projects/eeds-app.jpg';
import oralHistoriesImage from '@/images/projects/oral-histories.jpg';
import walcImage from '@/images/projects/walc.jpg';
import campusDatabaseImage from '@/images/projects/campus-database.jpg';

const projects = [
  {
    name: 'eeds Dashboard',
    year: '2022',
    description:
      'A prototype for a reimagined eeds administrative dashboard, featuring dynamic, interactive charts, an improved information hierarchy, and novel yet intuitive UI interactions to enable advanced functionality with minimal visual clutter.',
    href: 'https://eeds-dashboard.vercel.app/',
    image: eedsDashboardImage,
    stack: [
      {
        name: 'React',
        Icon: ReactLogo,
      },
      {
        name: 'Next.js',
        Icon: NextLogo,
      },
      {
        name: 'Tailwind',
        Icon: TailwindLogo,
      },
    ],
    accentColor: 'decoration-[#7e22ce] group-hover:text-[#7e22ce]',
  },
  // {
  //   name: 'eeds Landing Page',
  //   year: '2022',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. A quasi culpa atque earum. Reprehenderit, porro beatae enim laudantium amet facere saepe, error numquam in voluptate rem atque, quas dolorem inventore?',
  //   href: '#',
  // },
  {
    name: 'Purdue University Copyright Office',
    year: '2021',
    description:
      'A new-from-the-ground-up rebuild of the aging website for Purdue’s Copyright Office. Highlights include an interactive fair use analysis, a clearer presentation of decision trees, and more effective use of color and weight to convey intent and importance.',
    href: 'https://www.lib.purdue.edu/uco/',
    image: copyrightOfficeImage,
    stack: [
      {
        name: 'Laravel',
        Icon: LaravelLogo,
      },
      {
        name: 'Vue',
        Icon: VueLogo,
      },
      {
        name: 'Tailwind',
        Icon: TailwindLogo,
      },
    ],
    accentColor: 'decoration-[#8e6f3e] group-hover:text-[#8e6f3e]',
  },
  {
    name: 'Purdue COVID Stories',
    year: '2021',
    description:
      'This collaborative project between Purdue Libraries and Office of the Provost enables the Purdue and boader West Lafayette communities to share their experiences of the COVID-19 pandemic. The interactive form allows for a dynamic number of entries and stories can be sorted and filtered according to a number of criteria.',
    href: 'https://webapps.lib.purdue.edu/covid-stories/',
    image: covidStoriesImage,
    stack: [
      {
        name: 'Laravel',
        Icon: LaravelLogo,
      },
      {
        name: 'Vue',
        Icon: VueLogo,
      },
      {
        name: 'Tailwind',
        Icon: TailwindLogo,
      },
    ],
    accentColor: 'decoration-[#8e6f3e] group-hover:text-[#8e6f3e]',
  },

  {
    name: 'Purdue Oral Histories',
    year: '2020',
    description:
      'Purdue’s large archive of oral history recordings are made available for easy discovery and access through a robust search experience. A custom administrative interface allows staff to easily catalog and preserve large amounts of metadata for each oral history.',
    href: 'https://collections.lib.purdue.edu/oral-history/',
    image: oralHistoriesImage,
    stack: [
      {
        name: 'Laravel',
        Icon: LaravelLogo,
      },
      {
        name: 'Vue',
        Icon: VueLogo,
      },
      {
        name: 'Tailwind',
        Icon: TailwindLogo,
      },
    ],
    accentColor: 'decoration-[#8e6f3e] group-hover:text-[#8e6f3e]',
  },
  {
    name: 'Wilmeth Active Learning Center',
    year: '2019',
    description:
      'This site showcases the Libraries’ most advanced space to date, allowing visitors to learn more about its history, facilities, and mission.',
    href: 'https://www.lib.purdue.edu/walc/',
    image: walcImage,
    stack: [
      {
        name: 'Tailwind',
        Icon: TailwindLogo,
      },
    ],
    accentColor: 'decoration-[#8e6f3e] group-hover:text-[#8e6f3e]',
  },
  {
    name: 'eeds Mobile Application',
    year: '2018',
    description:
      'A cross-platform mobile application written in React Native that allows attendees to medicial education events to easily document and manage their attendance.',
    href: 'https://apps.apple.com/us/app/eeds-mobile/id541573257?platform=iphone',
    image: eedsAppImage,
    stack: [
      {
        name: 'React Native',
        Icon: ReactNativeLogo,
      },
    ],
    accentColor: 'decoration-[#3465fd] group-hover:text-[#3465fd]',
  },
  {
    name: 'Purdue Campus History',
    year: '2017',
    description:
      'This multi-year, grant-funded project allows visitors to explore the history of Purdue’s West Lafayette campus through an interactive map built with Esri’s ArcGIS JavaScript Api, a full-featured search experience built with Algolia, and a dynamic building timeline that allows visitors to explore how the campus’s buildings have changed over its history. It was featured in local and national news outlets, including the Houston Chronicle, San Antonio Express-News, and Albany (NY) Times Union, among others.',
    href: 'http://collections.lib.purdue.edu/campus/',
    image: campusDatabaseImage,
    stack: [
      {
        name: 'Laravel',
        Icon: LaravelLogo,
      },
      {
        name: 'Vue',
        Icon: VueLogo,
      },
      {
        name: 'Tailwind',
        Icon: TailwindLogo,
      },
    ],
    accentColor: 'decoration-[#8e6f3e] group-hover:text-[#8e6f3e]',
  },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Josh White</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="sm:px-12">
          <div className="relative mx-auto max-w-7xl bg-white">
            <div className="relative overflow-hidden">
              <div className="relative z-10 max-w-3xl px-16 py-12">
                <Image
                  src={joshImage}
                  alt="Josh White"
                  sizes="4rem"
                  className="h-16 w-16 rounded-full bg-zinc-100 object-cover"
                  priority
                />
                <h1 className="mt-12 text-3xl font-semibold tracking-tight text-zinc-800 sm:text-5xl">
                  Bringing together design and analysis to deliver delightful
                  digital experiences
                </h1>
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                  I’m Josh White, a full stack web developer with a special
                  interest in front-end development and design. I’m currently
                  leading efforts to modernize eeds. Before that, I built web
                  applications at Purdue University.
                </p>
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                  I have a PhD in analytic philosophy from Purdue, where my
                  research focused on epistemology–specifically, the epistemic
                  mechanisms and consequences of enculturation.
                </p>
              </div>
              <div className="absolute top-1/4 left-0 scale-150 md:top-0 md:bottom-0 md:scale-[1.15]">
                <Image
                  src={wavesImage}
                  alt=""
                  className="stroke-current"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-white" />
              <div className="absolute inset-0 hidden bg-gradient-to-tr from-white md:block" />
            </div>

            <div className="px-16">
              <hr className="w-full border-zinc-100" />
            </div>

            <div className="z-10 py-12 px-16">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-800 sm:text-3xl">
                Selected Projects
              </h2>

              <div className="flex flex-col divide-y">
                {projects.map((project, index) => (
                  <div key={index}>
                    <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-[33%,1fr]">
                      <div className="flex flex-col">
                        <h3 className="text-lg font-medium tracking-tight text-zinc-800 sm:text-xl sm:font-bold">
                          <a
                            href={project.href}
                            target="_blank"
                            rel="noreferrer"
                            className={`group inline-flex items-center gap-x-1`}
                          >
                            <span
                              className={`underline decoration-2 underline-offset-4 transition ${project.accentColor}`}
                            >
                              {project.name}
                            </span>
                            <ArrowTopRightOnSquareIcon
                              className="h-4 w-4 text-zinc-500 opacity-0 transition group-hover:opacity-100"
                              aria-hidden="true"
                            />
                          </a>
                        </h3>
                        <p className="order-first text-sm font-bold tracking-tight text-zinc-500">
                          {project.year}
                        </p>
                        <p className="mt-4 text-sm text-zinc-700">
                          {project.description}
                        </p>
                        {project.stack ? (
                          <ul
                            className="mt-4 flex items-center gap-x-2"
                            role="list"
                          >
                            {project.stack.map((tech, index) => (
                              <li key={index}>
                                <span className="sr-only">{tech.name}</span>
                                <tech.Icon className="h-8 w-8" />
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                      <Image
                        src={project.image}
                        alt={`Screenshots of the ${project.name} application`}
                        className="h-full w-full rounded-xl bg-zinc-100 object-cover shadow-lg"
                        sizes="(min-width: 768px) 50vw, 33vw"
                        loading="lazy"
                        quality={100}
                        placeholder="blur"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="sm:px-12">
        <div className="mx-auto max-w-7xl bg-white px-16">
          <hr className="border-zinc-100" />
          <footer className="relative mx-auto flex justify-end bg-white py-10">
            <p className="text-sm text-zinc-400">
              © {new Date().getFullYear()} Josh White. All rights reserved.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
