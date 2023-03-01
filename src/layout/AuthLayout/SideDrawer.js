import React from "react";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { chat, logo, users, warn } from "../../assets/exports";
import { Image } from "@chakra-ui/image";
import { sideScroll } from "../../utils/helper";
import { IoIosArrowForward } from "react-icons/io";
import {
  accounts,
  activeStyle,
  general,
  payments,
} from "../../components/common/constants";
import { NavLink } from "react-router-dom";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";

const SideDrawer = ({ isOpen, onClose }) => {
  return (
    <Drawer
      // autoFocus={false}
      isOpen={isOpen}
      placement="left"
      onClose={onClose}
    >
      <DrawerOverlay />
      <DrawerContent bgColor="red" color="#000">
        <DrawerBody p={0} sx={sideScroll} overflowY="scroll">
          <Flex
            flexDir="column"
            justifyContent="space-between"
            position={"fixed"}
            zIndex="5"
            w="full"
            bg="#fff"
            borderRight="1px solid #E0E0E0"
          >
            <Box h="100vh" overflowY="scroll" sx={sideScroll}>
              <Flex
                bg="#fff"
                pos="sticky"
                px="20px"
                pt="35px"
                top="0"
                borderBottom="1px solid #E0E0E0"
                pb="35px"
                justifyContent="space-between"
                align="center"
              >
                <Flex gap="13px" align="center">
                  <Image src={logo} w="33px" h="26px" />
                  <Text fontSize="18px" fontWeight={600}>
                    Edupali
                  </Text>
                </Flex>
                <Box px="12px" py="5px" bg="#E8EEFD" rounded="full">
                  <Text fontSize="12px">School Portal</Text>
                </Box>
              </Flex>

              <Box
                mx="20px"
                my="30px"
                bg="semiBlue"
                py="16px"
                px="22px"
                borderRadius="10px"
              >
                <Flex
                  borderBottom="1px solid #e0e0e0"
                  pb="12px"
                  gap="7px"
                  align="center"
                >
                  <Text fontSize="14px" fontWeight={500}>
                    PENDING
                  </Text>
                  <Flex
                    align="center"
                    justifyContent="center"
                    bg="#000"
                    rounded="full"
                    fontSize="10px"
                    w="20px"
                    h="20px"
                    color="orangeBg"
                  >
                    04
                  </Flex>
                </Flex>
                <Flex mt="20px" justifyContent="space-between" align="center">
                  <Flex gap="12px" align="center">
                    <Image w="24px" h="24px" src={warn} />
                    <Text fontSize="14px" color="#E81313">
                      Complete Setup
                    </Text>
                  </Flex>
                  <IoIosArrowForward color="#666666" />
                </Flex>

                <Flex
                  gap="11px"
                  mt="25px"
                  bg="blueBg"
                  px="18px"
                  py="15px"
                  borderRadius="10px"
                >
                  <Image src={users} />
                  <Text fontSize="14px" color="#fff">
                    {" "}
                    Onboard Students
                  </Text>
                </Flex>
              </Box>

              <Box mx="20px">
                <Text
                  mb="10px"
                  fontSize="12px"
                  fontWeight={500}
                  color="#4F4F4F"
                >
                  GENERAL
                </Text>
                {general?.map((item, i) => (
                  <Box
                    key={i}
                    onClick={onClose}
                    _hover={{
                      backgroundColor: "semiBlue",
                      px: "20px",
                      mx: "-20px",
                    }}
                  >
                    <NavLink
                      to={item.path}
                      style={({ isActive }) =>
                        isActive
                          ? { ...activeStyle }
                          : {
                              ...activeStyle,
                              backgroundColor: "",
                              fontWeight: 400,
                              borderRight: "",
                            }
                      }
                    >
                      <Image
                        src={
                          location.pathname === item.path ? item.sec : item.icon
                        }
                        w="16px"
                        h="16px"
                        mr="11px"
                      />
                      {item.name}
                    </NavLink>
                  </Box>
                ))}
              </Box>

              <Box mt="40px" mx="20px">
                <Text
                  mb="10px"
                  fontSize="12px"
                  fontWeight={500}
                  color="#4F4F4F"
                >
                  PAYMENTS
                </Text>
                {payments?.map((item, i) => (
                  <Box
                    key={i}
                    onClick={onClose}
                    _hover={{
                      backgroundColor: "semiBlue",
                      px: "20px",
                      mx: "-20px",
                    }}
                  >
                    <NavLink
                      to={item.path}
                      style={({ isActive }) =>
                        isActive
                          ? { ...activeStyle }
                          : {
                              ...activeStyle,
                              backgroundColor: "",
                              fontWeight: 400,
                              borderRight: "",
                            }
                      }
                    >
                      <Image
                        src={
                          location.pathname === item.path ? item.sec : item.icon
                        }
                        w="16px"
                        h="16px"
                        mr="11px"
                      />
                      {item.name}
                    </NavLink>
                  </Box>
                ))}
              </Box>

              <Box mb="140px" mt="40px" mx="20px">
                <Text
                  mb="10px"
                  fontSize="12px"
                  fontWeight={500}
                  color="#4F4F4F"
                >
                  ACCOUNT
                </Text>
                {accounts?.map((item, i) => (
                  <Box
                    key={i}
                    onClick={onClose}
                    _hover={{
                      backgroundColor: "semiBlue",
                      px: "20px",
                      mx: "-20px",
                    }}
                  >
                    <NavLink
                      to={item.path}
                      style={({ isActive }) =>
                        isActive
                          ? { ...activeStyle }
                          : {
                              ...activeStyle,
                              backgroundColor: "",
                              fontWeight: 400,
                              borderRight: "",
                            }
                      }
                    >
                      <Image
                        src={
                          location.pathname === item.path ? item.sec : item.icon
                        }
                        w="16px"
                        h="16px"
                        mr="11px"
                      />
                      {item.name}
                    </NavLink>
                  </Box>
                ))}
              </Box>
              <Flex
                mx="20px"
                px="18px"
                py="15px"
                bg="blueBg"
                color="#fff"
                cursor="pointer"
                mb="43px"
                gap="6px"
                align="center"
                borderRadius="20px"
                boxShadow="10px 10px 20px rgba(36, 99, 235, 0.2)"
              >
                <Image src={chat} />
                <Text fontSize="20px" fontWeight={500}>
                  CHAT SUPPORT
                </Text>
              </Flex>
            </Box>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default React.memo(SideDrawer);
