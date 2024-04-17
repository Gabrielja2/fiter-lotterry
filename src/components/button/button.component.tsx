import { StyledButton } from './button.styled';

export const Button = ({
  color,
  children,
  disabled,
  type,
  width,
  height,
  padding,
  border,
  borderradius,
  background,
  display,
  alignitems,
  justifycontent,
  gap,
  fontWeight,
  fontSize,
  transition,
  hover,
  margin,
  onClick,
}: {
  color?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit';
  width?: string;
  padding?: string;
  border?: string;
  borderradius?: string;
  background?: string;
  display?: string;
  alignitems?: string;
  justifycontent?: string;
  gap?: string;
  fontWeight?: string;
  fontSize?: string;
  transition?: string;
  hover?: string;
  height?: string;
  margin?: string;
  onClick?: () => void;
}) => {
  return (
    <StyledButton
      padding={padding}
      width={width}
      type={type}
      disabled={disabled}
      color={color}
      border={border}
      borderradius={borderradius}
      background={background}
      display={display}
      alignitems={alignitems}
      justifycontent={justifycontent}
      gap={gap}
      fontWeight={fontWeight}
      fontSize={fontSize}
      transition={transition}
      hover={hover}
      height={height}
      margin={margin}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};
