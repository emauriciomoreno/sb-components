import "./MyLabel.css";

interface Props {
    /**
     * Text to display
     */
    label:string;

    /**
     * Label size
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';

    /**
     * Capitalize all letters
     */
    allCaps?: boolean;

    /**
     * Label color
     */
    color?: 'text-primary' | 'text-secondary' | 'text-tertiary';

    /**
     * Font color
     */
    fontColor?: string;

    /**
     * Color de fondo
     */
    backgroundColor?: string;
}

export const MyLabel = ({ label, size = 'normal', allCaps = true, color, fontColor, backgroundColor = 'transparent' }: Props) => {
    return (
        <span className={`${size} ${color}`} style={{ color: fontColor, backgroundColor }}>{ allCaps ? label.toUpperCase() : label }</span>
    )
}
