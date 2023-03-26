import { StaticImageData } from "next/image";
import { ReactNode } from "react";
import CustomImage from "../../custom/image";

interface SocialIcon {
    icon: StaticImageData | string;
    href: string;
    target: string;
}

interface Props {
    socialIcons: SocialIcon[];
}

const SocialNetwork = ({ socialIcons }: Props): ReactNode => {
    return (
        <>
            {socialIcons.map((icon, key) => (
                <a
                    key={key + icon.target}
                    href={icon.href}
                    target={icon.target}
                    rel="noopener noreferrer"
                    className="social-network__icon"
                >
                    <CustomImage styles={'social-network__icon-img'} image={icon.icon} alt="icon" />
                </a>
            ))}
        </>
    )
}

export default SocialNetwork;
