import {
  Badge,
  BorderedText,
  Button,
  RedButton,
  StyledLink,
  Text,
  ThemeText,
} from "@/components/Test";

export default function Home() {
  return (
    <>
      <Badge>Hello World</Badge>
      <Button backgroundColor="transparent" color="#FF0000">
        Hello
      </Button>
      <Button backgroundColor="#1E90FF" color="white">
        World
      </Button>
      <RedButton>Hello</RedButton>
      <Text>World</Text>
      <BorderedText>Hello</BorderedText>
      <Text as="a" href="/">
        Go to index
      </Text>
      <StyledLink href="/">Go to Index</StyledLink>
      <ThemeText>Theme을 참조한 색상을 사용하고 있습니다.</ThemeText>
    </>
  );
}
