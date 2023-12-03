import { useState } from "react";
import {
  GameContainer,
  Divider,
  SearchingGameContainer,
  TittleStyled,
  SlideIcon,
  FilterContainer,
  GamersContainer,
} from "./StyledComponents";
import ScrollableList from "../../../../components/ScrollableList/ScrollableList";
import Game from "./Game";
import Gamer from "./Gamer";

//theme
import { colorList } from "../../../../themes/Theme";

//icon
import "primeicons/primeicons.css";

//images AvatarOfGamer
import avatar1 from "../../../../Images/AvatarsOfGamers/emojisky.com-213896.png";
import avatar2 from "../../../../Images/AvatarsOfGamers/emojisky.com-241870.png";
import avatar3 from "../../../../Images/AvatarsOfGamers/emojisky.com-241894.png";
import avatar4 from "../../../../Images/AvatarsOfGamers/emojisky.com-241897.png";
import avatar5 from "../../../../Images/AvatarsOfGamers/emojisky.com-241939.png";
import avatar6 from "../../../../Images/AvatarsOfGamers/emojisky.com-241983.png";
import avatar7 from "../../../../Images/AvatarsOfGamers/emojisky.com-241987.png";
import avatar8 from "../../../../Images/AvatarsOfGamers/emojisky.com-241990.png";
import avatar9 from "../../../../Images/AvatarsOfGamers/emojisky.com-288854.png";
import avatar10 from "../../../../Images/AvatarsOfGamers/emojisky.com-3144982.png";
import avatar11 from "../../../../Images/AvatarsOfGamers/emojisky.com-53405.png";
import avatar12 from "../../../../Images/AvatarsOfGamers/emojisky.com-89987.png";
import Button from "../../../../components/button/Button";

const SearchingGame = () => {
  const [openFilter, setOpenFilter] = useState(false);

  const list: React.ReactNode[] = [
    <Game name="COD Warzone" />,
    <Game name="COD Warzone" />,
    <Game name="COD Warzone" />,
    <Game name="COD Warzone" />,
  ];

  const listGamers: React.ReactNode[] = [
    <Gamer
      key={"01"}
      backgroundColor={[colorList[0], colorList[1]]}
      images={[avatar1, avatar12]}
      name="Dr Team"
      number={1}
    />,
    <Gamer
      key={"02"}
      backgroundColor={[colorList[2], colorList[3]]}
      images={[avatar2, avatar7]}
      name="Mya Plays"
      number={2}
    />,
    <Gamer
      key={"03"}
      backgroundColor={[colorList[4], colorList[5]]}
      images={[avatar3, avatar8]}
      name="Keoxer"
      number={3}
    />,
    <Gamer
      key={"04"}
      backgroundColor={[colorList[6], colorList[7]]}
      images={[avatar4, avatar9]}
      name="Nickmerc"
      number={4}
    />,
    <Gamer
      key={"05"}
      backgroundColor={[colorList[8], colorList[9]]}
      images={[avatar5, avatar10]}
      name="Inventor"
      number={5}
    />,
  ];

  return (
    <SearchingGameContainer>
      <GameContainer>
        <ScrollableList list={list} height="50px" width="100%" />

        <SlideIcon
          onClick={() => setOpenFilter(!openFilter)}
          className="pi pi-sliders-h"
        />
        <FilterContainer open={openFilter}>
          <TittleStyled>
            <strong>Filter</strong>
          </TittleStyled>
        </FilterContainer>
      </GameContainer>
      <Divider />

      <GamersContainer>
        <ScrollableList list={listGamers} height="100%" width="100%" />
      </GamersContainer>
      <Button  variant="square" text="Search Now"/>
    </SearchingGameContainer>
  );
};

export default SearchingGame;
