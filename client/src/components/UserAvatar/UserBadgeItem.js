import { CloseIcon } from "@chakra-ui/icons";
import { Badge } from "@chakra-ui/react";
import React from "react";

const UserBadgeItem = ({ user, handleFunction, admin }) => {
  return (
    <Badge
      px={2}
      py={1}
      m={1}
      mb={2}
      cursor="pointer"
      onClick={handleFunction}
      textTransform="capitalize"
      borderRadius="lg"
      fontSize={12}
      variant="solid"
      colorScheme="purple"
    >
      {user.name}
      {admin === user._id && <span> (Admin)</span>}
      <CloseIcon pl={1} />
    </Badge>
  );
};

export default UserBadgeItem;
