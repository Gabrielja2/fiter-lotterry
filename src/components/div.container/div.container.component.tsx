import { StyledDiv } from './div.container.styled';

export const DivContainer = ({
  children,
  display,
  alignItems,
  justifyContent,
  flexDirection,
  gap,
  margin,
  padding,
  paddingTop,
  paddingBottom,
  paddingRight,
  paddingLeft,
  width,
  height,
  background,
  borderRadius,
  border,
  borderLeft,
  borderRight,
  borderTop,
  borderBottom,
  color,
  fontSize,
  fontWeight,
  onClick,
}: {
  children?: React.ReactNode;
  display?: string;
  alignItems?: string;
  justifyContent?: string;
  flexDirection?: string;
  gap?: string;
  margin?: string;
  padding?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingRight?: string;
  paddingLeft?: string;
  width?: string;
  height?: string;
  background?: string;
  borderRadius?: string;
  border?: string;
  borderLeft?: string;
  borderRight?: string;
  borderTop?: string;
  borderBottom?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  onClick?: () => void;
}) => {
  return (
    <StyledDiv
      display={display}
      alignItems={alignItems}
      justifyContent={justifyContent}
      flexDirection={flexDirection}
      gap={gap}
      margin={margin}
      padding={padding}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      paddingRight={paddingRight}
      paddingLeft={paddingLeft}
      width={width}
      height={height}
      background={background}
      borderRadius={borderRadius}
      border={border}
      borderLeft={borderLeft}
      borderRight={borderRight}
      borderTop={borderTop}
      borderBottom={borderBottom}
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      onClick={onClick}
    >
      {children}
    </StyledDiv>
  );
};
