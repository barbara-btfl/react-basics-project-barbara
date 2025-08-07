import { useState } from "react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipeDetailPage } from "./pages/RecipeDetailPage";
import { Box, Center } from "@chakra-ui/react";

export const App = () => {
  // Your state code here
  const [selectedRecipeKey, setSelectedRecipeKey] = useState(null);

  return (
    <Center className="app">
      <Box w={"100%"} padding={4}>
        {!selectedRecipeKey ? (
          <RecipeListPage onSelect={setSelectedRecipeKey} />
        ) : (
          <RecipeDetailPage
            recipeKey={selectedRecipeKey}
            onBack={() => setSelectedRecipeKey(null)}
          />
        )}
      </Box>
    </Center>
  );
};
