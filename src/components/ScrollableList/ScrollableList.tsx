import {
  Blur,
  ScrollableListContainer,
  ScrollableListStyled,
} from "./StyledComponents";

interface ScrollableListProps {
  list: React.ReactNode[];
  width: string;
  height: string;
}

const ScrollableList = (props: ScrollableListProps) => {
 
  return (
    <ScrollableListContainer width={props.width} height={props.height}>
      <ScrollableListStyled>
        {props.list}
      </ScrollableListStyled>

      <Blur />
    </ScrollableListContainer>
  );
};

export default ScrollableList;
