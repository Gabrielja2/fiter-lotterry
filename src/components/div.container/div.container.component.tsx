import { StyledDiv } from './div.container.styled';

export const DivContainer = ({
  children,
  display,
  alignitems,
  justifycontent,
  flexdirection,
  gap,
  margin,
  padding,
  width,
  height,
  background,
  borderradius,
  border,
  borderright,
  color,
  fontSize,
  fontWeight,
  onClick,
}: {
  children?: React.ReactNode;
  display?: string;
  alignitems?: string;
  justifycontent?: string;
  flexdirection?: string;
  gap?: string;
  margin?: string;
  padding?: string;
  width?: string;
  height?: string;
  background?: string;
  borderradius?: string;
  border?: string;
  borderright?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  onClick?: () => void;
}) => {
  return (
    <StyledDiv
      display={display}
      $alignitems={alignitems}
      $justifycontent={justifycontent}
      $flexdirection={flexdirection}
      $gap={gap}
      margin={margin}
      $padding={padding}
      width={width}
      height={height}
      $background={background}
      $borderradius={borderradius}
      $border={border}
      $borderright={borderright}
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      onClick={onClick}
    >
      {children}
    </StyledDiv>
  );
};
