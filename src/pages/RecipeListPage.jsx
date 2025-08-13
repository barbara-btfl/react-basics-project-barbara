import { Box, Heading, Wrap, Center, WrapItem } from "@chakra-ui/react";
import { data } from "../utils/data";
import { SearchBox } from "../components/ui/SearchBox";
import { useState } from "react";
import { RecipeCard } from "../components/RecipeCard";

export const RecipeListPage = ({ onSelect }) => {
  // You can play around with the console log, but ultimately remove it once you are done

  const [searchField, setSearchField] = useState(data.hits);

  return (
    <Center>
      <Box padding={4}>
        {/* Filter the recipes based on the searchField */}
        {/* Laat elke receptkaart verwijzen naar een RecipePage met key={label} */}
        <Box padding={4} textAlign="center" mb={8}>
          <Heading marginBottom={"0.5em"}>Your Recipe App</Heading>
          <SearchBox watErGaatKomen={setSearchField} />
        </Box>
        <Wrap spacing="2rem" justify="center">
          {searchField.map((hit) => (
            <WrapItem key={hit.recipe.label}>
              <RecipeCard
                recipe={hit.recipe}
                onClick={() => onSelect(hit.recipe.label)}
              />
            </WrapItem>
          ))}
        </Wrap>
      </Box>
    </Center>
  );
};
