import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/menu";
import { AddIcon } from "@chakra-ui/icons";
import { Box, Heading, IconButton } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";
import SurveyList from "./surveys/SurveyList";

export default function Dashboard() {
  return (
    <Box minH="100vh" width="100vw" p={3}>
      <Heading size="xl">Dashboard</Heading>
      <SurveyList />
      <MenuButon />
    </Box>
  );
}

function MenuButon() {
  return (
    <Box position="fixed" bottom="5" right="5" m={3}>
      <Menu>
        <MenuButton as={IconButton} icon={<AddIcon />} />
        <MenuList>
          <Link as={RouterLink} to="/surveys/new">
            <MenuItem>Create new survey</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Box>
  );
}
