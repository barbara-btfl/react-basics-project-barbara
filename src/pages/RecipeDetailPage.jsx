import {
  Button,
  Heading,
  Image,
  Text,
  Wrap,
  WrapItem,
  Badge,
  Center,
  Box,
} from "@chakra-ui/react";
import { data } from "../utils/data";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { ListItem, UnorderedList } from "@chakra-ui/react";
import { RecipeTable } from "../components/NutritionTable";

export const RecipeDetailPage = ({ recipeKey, onBack }) => {
  const recipe = data.hits.find((hit) => hit.recipe.label === recipeKey);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <Center padding={4}>
      <Box
        maxWidth={["100%", "90%", "80%", "70%", "50%"]}
        justifyContent={"center"}
      >
        <Button marginBottom={4} onClick={onBack}>
          Back
        </Button>
        <Heading marginBottom={4}>{recipe.recipe.label}</Heading>
        <Image src={recipe.recipe.image} alt={recipe.recipe.label} />

        <Tabs
          isFitted
          variant="soft-rounded"
          maxW="100%"
          colorScheme="purple"
          marginTop={4}
        >
          <TabList overflow={"scroll"}>
            <Tab>Overview</Tab>
            <Tab>Ingredients</Tab>
            <Tab>Preperations</Tab>
            <Tab>Nutrition</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Text>Meal Type: {recipe.recipe.mealType.join(", ")}</Text>
              <Text>Dish Type: {recipe.recipe.dishType.join(", ")}</Text>
              <Text>Total cooking time: {recipe.recipe.totalTime}</Text>
              {recipe.recipe.dietLabels && (
                <Text marginTop="0.5rem">
                  <Wrap spacing="0.5rem">
                    {recipe.recipe.dietLabels.map((label, index) => (
                      <WrapItem key={index}>
                        <Badge variant="outline" colorScheme="green">
                          {label}
                        </Badge>
                      </WrapItem>
                    ))}
                  </Wrap>
                </Text>
              )}
              {recipe.recipe.healthLabels && (
                <Text marginTop="0.5rem" maxWidth={"100%"}>
                  <Wrap spacing="0.5rem">
                    {recipe.recipe.healthLabels.map((label, index) => (
                      <WrapItem key={index}>
                        <Badge variant="outline" colorScheme="purple">
                          {label}
                        </Badge>
                      </WrapItem>
                    ))}
                  </Wrap>
                </Text>
              )}
              {recipe.recipe.cautions && (
                <Text marginTop="0.5rem">
                  <Wrap spacing="0.5rem">
                    {recipe.recipe.cautions.map((label, index) => (
                      <WrapItem key={index}>
                        <Badge variant="outline" colorScheme="red">
                          {label}
                        </Badge>
                      </WrapItem>
                    ))}
                  </Wrap>
                </Text>
              )}
            </TabPanel>
            <TabPanel>
              {recipe.recipe.ingredientLines && (
                <UnorderedList>
                  {recipe.recipe.ingredientLines.map((label, index) => (
                    <ListItem key={index}>{label}</ListItem>
                  ))}
                </UnorderedList>
              )}
            </TabPanel>
            <TabPanel>
              <Text>
                If there were any instrucions in the dataset, I would add them
                here.{" "}
              </Text>
            </TabPanel>
            <TabPanel>
              <RecipeTable recipeKey={recipeKey} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Center>
  );
};
