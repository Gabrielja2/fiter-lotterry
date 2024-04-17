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
  borderRadius,
  background,
  display,
  alignItems,
  justifyContent,
  gap,
  fontWeight,
  fontSize,
  transition,
  hover,
  margin,
}: {
  color?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit';
  width?: string;
  padding?: string;
  border?: string;
  borderRadius?: string;
  background?: string;
  display?: string;
  alignItems?: string;
  justifyContent?: string;
  gap?: string;
  fontWeight?: string;
  fontSize?: string;
  transition?: string;
  hover?: string;
  height?: string;
  margin?: string;
}) => {
  return (
    <StyledButton
      padding={padding}
      width={width}
      type={type}
      disabled={disabled}
      color={color}
      border={border}
      borderRadius={borderRadius}
      background={background}
      display={display}
      alignItems={alignItems}
      justifyContent={justifyContent}
      gap={gap}
      fontWeight={fontWeight}
      fontSize={fontSize}
      transition={transition}
      hover={hover}
      height={height}
      margin={margin}
    >
      {children}
    </StyledButton>
  );
};
