import { StyledText } from './text.styled';

export const Text = ({
  children,
  fontSize,
  color,
  fontWeight,
  display,
  alignItems,
  justifyContent,
  gap,
}: {
  children: React.ReactNode;
  fontSize?: string;
  color?: string;
  fontWeight?: string;
  display?: string;
  alignItems?: string;
  justifyContent?: string;
  gap?: string;
}) => {
  return (
    <StyledText
      display={display}
      alignItems={alignItems}
      fontSize={fontSize}
      color={color}
      fontWeight={fontWeight}
      justifyContent={justifyContent}
      gap={gap}
    >
      {children}
    </StyledText>
  );
};
