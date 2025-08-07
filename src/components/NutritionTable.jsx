import { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
} from "@chakra-ui/react";
import { data } from "../utils/data";

export const RecipeTable = ({ recipeKey }) => {
  const [showAll, setShowAll] = useState(false);

  const recipe = data.hits.find((hit) => hit.recipe.label === recipeKey);
  const nutrientTable = recipe.recipe.totalNutrients || {};

  const allowedKeys = ["ENERC_KCAL", "PROCNT", "FAT", "CHOCDF", "CHOLE", "NA"];

  const entriesToDisplay = showAll
    ? Object.entries(nutrientTable)
    : Object.entries(nutrientTable).filter(([key]) =>
        allowedKeys.includes(key)
      );

  return (
    <TableContainer>
      <Button
        size="sm"
        colorScheme="purple"
        mb={3}
        onClick={() => setShowAll(!showAll)}
      >
        {showAll ? "Show less" : "Show all nutrients"}
      </Button>

      <Table variant="simple" size="sm">
        <Thead>
          <Tr>
            <Th>Nutrient</Th>
            <Th>Quantity</Th>
            <Th>Unit</Th>
          </Tr>
        </Thead>
        <Tbody>
          {entriesToDisplay.map(([key, nutrient]) => (
            <Tr key={key}>
              <Td>{nutrient.label}</Td>
              <Td>{nutrient.quantity.toFixed(1)}</Td>
              <Td>{nutrient.unit}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
