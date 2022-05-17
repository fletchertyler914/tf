import { GlassCard } from '@tf/ui';

export const Index = () => (
  <div className="py-12 h-full bg-white dark:bg-gray-900">
    <div className="min-w-sm max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase font-mono">
          Hello world!
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-300 sm:text-4xl">
          I&apos;m Tyler Fletcher.
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          I&apos;m a terminally curious tinkerer with a passion for technology,
          community, web3/blockchain,
          self-[improvement,resiliency,education,...], and something new every
          day.
        </p>

        <p className="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
          Want more? Pick a pill...
        </p>
      </div>

      <div className="sm:mt-16 max-h-80">
        <div className="flex flex-col sm:flex-row items-end sm:items-start h-[60vh] justify-center">
          <GlassCard className="bg-blue-600 hover:bg-blue-800" title="web2" />
          <GlassCard className="bg-red-600 hover:bg-red-800" title="web3" />
        </div>
      </div>
    </div>
  </div>
);

export default Index;
