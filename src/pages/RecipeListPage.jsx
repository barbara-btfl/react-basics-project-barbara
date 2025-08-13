import {
  Box,
  Heading,
  Wrap,
  Center,
  WrapItem,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { data } from "../utils/data";
import { SearchBox } from "../components/ui/SearchBox";
import { useState } from "react";
import { RecipeCard } from "../components/RecipeCard";

export const RecipeListPage = ({ onSelect }) => {
  // You can play around with the console log, but ultimately remove it once you are done

  const [searchField, setSearchField] = useState(data.hits);
  const [hasSearched, setHasSearched] = useState(false); //extra state om de melding 'geen resultaten' alleen te alten zien wanneer er echt gezocht is.

  return (
    <Center>
      <Box padding={4}>
        {/* Filter the recipes based on the searchField */}
        {/* Laat elke receptkaart verwijzen naar een RecipePage met key={label} */}
        <Box padding={4} textAlign="center" mb={8}>
          <Heading mb="0.5em">Your Recipe App</Heading>
          <SearchBox
            onSearchChange={(results) => {
              setSearchField(results);
              setHasSearched(true); // markeer dat er gezocht is
            }}
          />
        </Box>

        {searchField.length === 0 && hasSearched ? (
          <Alert status="warning" borderRadius="md" mb={4} colorScheme="purple">
            <AlertIcon />
            No recipes found that match the criteria.
          </Alert>
        ) : (
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
        )}
      </Box>
    </Center>
  );
};
