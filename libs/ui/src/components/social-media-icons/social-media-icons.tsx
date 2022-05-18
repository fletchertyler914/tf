import { SOCIAL_MEDIA_ICONS } from './social-media-icons.constants';

export const SocialMediaIcons = () => (
  <div className="flex flex-wrap justify-center gap-2">
    {SOCIAL_MEDIA_ICONS.map(({ className, href, svg }) => (
      <a href={href} target={href}>
        <button className={className}>{svg}</button>
      </a>
    ))}
  </div>
);

export default SocialMediaIcons;
