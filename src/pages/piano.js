import React, {useEffect, useState} from 'react';
import {
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Heading,
  SimpleGrid,
  Input,
  List,
  ListItem,
  Text, useColorModeValue, Spinner,
} from '@chakra-ui/react';
import VideoCard from "../components/VideoCard";
import {hindiPianoVideos, marathiPianoVideos} from "../constants/pianoVideos";
import randomizeOrder from "../constants/randomizeOrder";

export default function Piano() {
  const [hindiVideos, setHindiVideos] = useState([])
  const [marathiVideos, setMarathiVideos] = useState([])

  useEffect(() => {
    setHindiVideos(randomizeOrder(hindiPianoVideos))
    setMarathiVideos(randomizeOrder(marathiPianoVideos))
  }, [])
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredVideos, setFilteredVideos] = useState(hindiVideos);
  const [selectedTab, setSelectedTab] = useState(0);
  const playlists = []
  useEffect(() => {
    if (selectedTab === 0) {
      setFilteredVideos(hindiVideos);
    } else if (selectedTab === 1) {
      setFilteredVideos(marathiVideos);
    }
  }, [hindiVideos, marathiVideos, selectedTab]);

  const handleTabChange = (index) => {
    setSelectedTab(index);
    setSearchQuery('');
  };
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const currentVideos =
      selectedTab === 0
        ? hindiVideos
        : selectedTab === 1
          ? marathiVideos
          : playlists;

    const filtered = currentVideos.filter((video) =>
      video.title.toLowerCase().includes(query)
    );
    setFilteredVideos(filtered);
  };
  const headingColor = useColorModeValue("#083f3e", "#EDF2F7");  // Text
  const tabColorScheme = useColorModeValue("white", "gray");  // Text
  return (
    <Box p={8}>
      <Heading textAlign="center" mb={8} color={headingColor}>Yash Bhandare - Piano Instrumentals</Heading>

      <Tabs
        variant="soft-rounded"
        colorScheme={"cyan"}
        isFitted
        onChange={handleTabChange}
      >
        <TabList>
          <Tab color={headingColor}>Hindi</Tab>
          <Tab color={headingColor}>Marathi</Tab>
          <Tab color={headingColor}>Playlists</Tab>
        </TabList>
        <TabPanels>
          {[hindiVideos, marathiVideos, playlists].map((_, tabIndex) => (
            <TabPanel key={tabIndex}>
              <Box mb={4}>
                {tabIndex < 2 && (
                  <Input
                    placeholder={`Search ${
                      tabIndex === 0 ? 'Hindi' : 'Marathi'
                    } videos...`}
                    value={searchQuery}
                    onChange={handleSearch}
                    mb={4}
                  />
                )}

                {searchQuery && tabIndex < 2 && (
                  <List
                    border="1px"
                    borderColor="gray.300"
                    borderRadius="md"
                    p={2}
                    maxH="150px"
                    overflowY="auto"
                  >
                    {filteredVideos.map((video, index) => (
                      <ListItem
                        key={index}
                        p={2}
                        cursor="pointer"
                        _hover={{ bg: "teal.500" }}
                        onClick={() => {
                          window.open(`https://www.youtube.com/watch?v=${video.id}`, "_blank");
                        }}
                      >
                        {video.title}
                      </ListItem>
                    ))}
                    {!filteredVideos.length && <Text>No matches found</Text>}
                  </List>
                )}

              </Box>
              <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
                {filteredVideos.map((video, index) =>
                  tabIndex < 2 ? (
                    <VideoCard key={index} video={video} />
                  ) : (
                    <Box
                      key={index}
                      as="a"
                      href={video.url}
                      target="_blank"
                      _hover={{ transform: "scale(1.05)" }}
                      transition="transform 0.2s"
                    >
                      <iframe
                        width="100%"
                        height="200"
                        src={video.embedUrl}
                        title={video.title}
                        frameBorder="0"
                        allow="autoplay; encrypted-media; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </Box>
                  )
                )}
              </SimpleGrid>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
}
