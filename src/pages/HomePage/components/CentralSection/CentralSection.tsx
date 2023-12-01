
import Header from "./Header";
import ImageAvatar from "./ImageAvatar";
import { CentralSectionStyled, Timer } from "./StyledComponents";
import UserAvatar from "./UserAvatar";

//redux
import { useSelector } from "react-redux";
import { RootState } from "../../../../Redux/store";


const CentralSection = () => {
  const usersJoinedList = useSelector((state:RootState)=>state.usersJoined.users)
	
	return (
    <CentralSectionStyled>
      <UserAvatar user={usersJoinedList[0]}  top="94px" left="89px" />
      <UserAvatar user={usersJoinedList[1]} top="150px" left="20px" />
      <UserAvatar user={usersJoinedList[2]} emoji top="170px" left="250px" />
      <Header />
      <Timer>
        <strong>11 : 45</strong>
      </Timer>
      <ImageAvatar />
    </CentralSectionStyled>
  );
};

export default CentralSection;
