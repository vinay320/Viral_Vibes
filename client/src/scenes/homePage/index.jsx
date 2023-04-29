import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";
import UserWidget from "scenes/widgets/UserWidget";
import MyPostWidget from "scenes/widgets/MyPostWidget";
import PostsWidget from "scenes/widgets/PostsWidget";
import FriendListWidget from "scenes/widgets/FriendListWidget";
import ChatApp from "components/ChatApp";

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);

  return (
    <Box>
      <div className="fixed mt-0 z-50 w-[100%] ">
      <Navbar  />
      </div>
      <Box
        width="100%"
        padding="6rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent=""
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget userId={_id} picturePath={picturePath} />
          {isNonMobileScreens && (
          <Box flexBasis="26%">
            {/* <AdvertWidget/> */}
            <Box m="2rem 0" />
            <FriendListWidget userId={_id} />
          </Box>
        )}
        </Box>
        
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <MyPostWidget picturePath={picturePath} />
          <PostsWidget userId={_id} />
        </Box>
        <Box flexBasis="26%" className="rounded-lg bg-white h-[360px]">
            {/* <AdvertWidget/> */}
            <Box m="2rem 0" />
            <ChatApp />
          </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
