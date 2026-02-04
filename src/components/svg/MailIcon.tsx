import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import type { CSSProperties } from 'react';

// Define an interface that includes the props Hero.tsx is passing
interface MailIconProps {
    width?: string | number;
    height?: string | number;
    fill?: string;
    className?: string;
    style?: CSSProperties;
    // allow other props
    [key: string]: any;
}

const MailIcon = ({ width, height, fill, className, style, ...props }: MailIconProps) => {
    // Create a combined style object if width/height are provided
    const combinedStyle: any = {
        ...style,
        width: width ? width : undefined,
        height: height ? height : undefined,
        color: fill, // Map fill to color for FontAwesome
    };

    return (
        <FontAwesomeIcon
            icon={faEnvelope}
            className={className}
            style={combinedStyle}
            {...props}
        />
    );
};

export default MailIcon;
