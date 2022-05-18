import { SOCIAL_MEDIA_ICONS } from './social-media-icons.constants';

export const SocialMediaIcons = () => (
  <div className="flex flex-wrap justify-center gap-4">
    {SOCIAL_MEDIA_ICONS.map(({ className, href, svg }) => (
      <a key={href} href={href} target={href}>
        <button className={className}>{svg}</button>
      </a>
    ))}
  </div>
);

export default SocialMediaIcons;
