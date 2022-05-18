import { Pill, SocialMediaIcons } from '@tf/ui';

export const Index = () => (
  <div className="py-12 h-full bg-white dark:bg-gray-900">
    <div className="min-w-sm max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <h2 className="text-base text-green-700 font-thin tracking-wide uppercase font-mono">
          &gt; Hello world!
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-300 sm:text-4xl">
          I&apos;m Tyler Fletcher.
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          I&apos;m a terminally curious tinkerer with a passion for technology,
          community, web3/blockchain, self-improvement/resiliency/education/care/etc,
          and I love learning something new every day.
        </p>

        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          I have determined that there are now two sides of me, or rather two
          realms you can perceive me from. Most of my time, skills, and
          professional experience have come from the web2 realm, but I have had an immense
          passion for the web3 realm since 2015.
        </p>

        <p className="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
          Want more? <em>Pick a pill...</em>
        </p>
      </div>

      <div className="sm:mt-16 max-h-80">
        <div className="flex flex-col sm:flex-row items-end sm:items-start h-[60vh] justify-center">
          <Pill className="bg-blue-600 hover:bg-blue-800" title="web2" />
          <Pill className="bg-red-600 hover:bg-red-800" title="web3" />
        </div>
      </div>
    </div>
    <footer>
      <SocialMediaIcons />
    </footer>
  </div>
);

export default Index;
