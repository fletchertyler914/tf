export interface GlassCardProps {
  className?: string;
  title: string;
}

const appendClassNames = (className = '', defaultClassName: string) =>
  defaultClassName.concat(...[' ', className]);

export const GlassCard = ({ className, title }: GlassCardProps) => (
  <div
    className={appendClassNames(
      className,
      'sm:mx-8 p-2 h-40 w-80 flex items-center justify-center rounded-[90px] shadow hover:shadow-xl border border-transparent hover:skew-x-12 scale-[0.9] sm:scale-100'
    )}
  >
    <h1 className="text-white text-xl font-extrabold tracking-wide">{title}</h1>
  </div>
);

export default GlassCard;
