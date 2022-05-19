import { Pill, SocialMediaIcons, ThemeButton } from '@tf/ui';

export const Index = () => (
  <div className="flex flex-col h-full p-6 overflow-auto">
    <div className="flex flex-col flex-grow justify-center">
      <h2 className="text-base text-green-700 font-thin tracking-wide uppercase font-mono  max-w-2xl md:mx-auto">
        &gt; Hello world!
      </h2>
      <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-300 sm:text-4xl  max-w-2xl md:mx-auto">
        I&apos;m Tyler Fletcher.
      </p>
      <p className="mt-4 max-w-2xl text-xl text-gray-500 md:mx-auto">
        I&apos;m a terminally curious tinkerer with a passion for technology,
        community, web3/blockchain, self-[improvement, resiliency, education,
        care, etc], and I love learning something new every day.
      </p>

      <p className="mt-4 max-w-2xl text-xl text-gray-500 md:mx-auto">
        I have determined that there are now two sides of me, or rather two
        realms you can perceive me from. Most of my time, skills, and
        professional experience have come from the web2 realm, but I have had an
        immense passion for the web3 realm since 2015.
      </p>

      <p className="mt-4 max-w-2xl text-lg text-gray-500 md:mx-auto">
        Want more? <em>Pick a pill...</em>
      </p>
    </div>

    <div className="flex py-8 justify-center">
      <div className="sm:mt-16 m-h-full overflow-hidden justify-between">
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center">
          <Pill className="bg-blue-600 hover:bg-blue-800" title="web2" />
          <Pill
            className="bg-red-600 hover:bg-red-800 scale-[60%]"
            title="web3"
          />
        </div>
      </div>
    </div>

    <div className="flex flex-grow justify-center items-end">
      <footer className="flex flex-col justify-center">
        <SocialMediaIcons />
        <div className="flex justify-center mt-6">
          <p className="font-bold mr-2 dark:text-white">Theme:</p>
          <ThemeButton className="dark:stroke-white stroke-black" />
        </div>
      </footer>
    </div>
  </div>
);

export default Index;
