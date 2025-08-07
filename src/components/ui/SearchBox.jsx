import { data } from "../../utils/data";
import { Input, Box } from "@chakra-ui/react";

// This component is a placeholder for the search box functionality.
// hiermee kan je zoeken naar recepten in de dataset en de resultaten tonen.
//  tijdens het typen van de zoekopdracht, worden de resultaten gefilterd en weergegeven.

export const SearchBox = ({ watErGaatKomen }) => {
  const handleSearch = (event) => {
    const zoekterm = event.target.value.toLowerCase();

    const matchingRecipes = data.hits.filter((hit) => {
      const { label, cautions, dietLabels, healthLabels } = hit.recipe;

      return (
        label.toLowerCase().includes(zoekterm) ||
        cautions.some((item) => item.toLowerCase().includes(zoekterm)) ||
        dietLabels.some((item) => item.toLowerCase().includes(zoekterm)) ||
        healthLabels.some((item) => item.toLowerCase().includes(zoekterm))
      );
    });

    watErGaatKomen(matchingRecipes);
  };

  // In deze component kan je een inputveld en een knop toevoegen voor de zoekfunctionaliteit.
  return (
    <Box>
      <Input
        type="text"
        variant="filled"
        maxW="md"
        size="md"
        placeholder="Search for recipes..."
        onChange={handleSearch}
      ></Input>
    </Box>
  );
};
