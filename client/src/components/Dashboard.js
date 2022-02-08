import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/menu";
import { AddIcon } from "@chakra-ui/icons";
import { Box, IconButton } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";
import SurveyList from "./surveys/SurveyList";

export default function Dashboard() {
  return (
    <Box height="100%" width="100vw" bg="grey">
      <h1>Dashboard</h1>
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
          <MenuItem>
            <Link as={RouterLink} to="/surveys/new">
              Create new survey
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}
