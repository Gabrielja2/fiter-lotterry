import { StyledText } from './text.styled';

export const Text = ({
  children,
  fontSize,
  color,
  fontWeight,
  display,
  alignitems,
  justifycontent,
  gap,
  width,
  height,
}: {
  children: React.ReactNode;
  fontSize?: string;
  color?: string;
  fontWeight?: string;
  display?: string;
  alignitems?: string;
  justifycontent?: string;
  gap?: string;
  width?: string;
  height?: string;
}) => {
  return (
    <StyledText
      display={display}
      $alignitems={alignitems}
      fontSize={fontSize}
      color={color}
      fontWeight={fontWeight}
      $justifycontent={justifycontent}
      $gap={gap}
      width={width}
      height={height}
    >
      {children}
    </StyledText>
  );
};
