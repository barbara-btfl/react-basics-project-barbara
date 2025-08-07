import { Badge, Heading, Image, Text, Wrap, WrapItem } from "@chakra-ui/react";
import {
  Divider,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";

export const RecipeCard = ({ recipe, onClick }) => {
  const recipeDetail = {
    name: recipe.label,
    image: recipe.image,
    mealType: recipe.mealType,
    dishType: recipe.dishType,
    // Ik voeg een lege array toe als er geen cautions zijn om fouten bij het zoeken te voorkomen bij de volgende properties.
    cautions: recipe.cautions || [],
    dietLabels: recipe.dietLabels || [],
    // Alleen de healthLabels die beginnen met "Vegan" of "Vegetarian" worden weergegeven.
    healthLabels: (recipe.healthLabels || []).filter(
      (label) =>
        label.toLowerCase().startsWith("vegan") ||
        label.toLowerCase().startsWith("vegetarian")
    ),
  };

  return (
    <Card
      onClick={onClick}
      cursor="pointer"
      maxW="sm"
      border="1px solid #ccc"
      borderRadius="xl"
    >
      <Image
        src={recipeDetail.image}
        alt={recipeDetail.name}
        boxSize="md"
        objectFit="cover"
        align="center"
        borderTopRadius={"xl"}
      />
      <CardHeader>
        <Text size="sm">{recipeDetail.mealType.join(", ")}</Text>
        <Heading size="md">{recipeDetail.name}</Heading>
      </CardHeader>
      <CardBody>
        <Text>{recipeDetail.dishType.join(", ")}</Text>
      </CardBody>
      <Divider />
      <CardFooter>
        {recipeDetail.dietLabels && (
          <Text>
            <Wrap ml={2} spacing="0.25rem">
              {recipeDetail.dietLabels.map((label, index) => (
                <WrapItem key={index}>
                  <Badge variant="outline" colorScheme="green">
                    {label}
                  </Badge>
                </WrapItem>
              ))}
            </Wrap>
          </Text>
        )}
        {recipeDetail.cautions && (
          <Text>
            <Wrap ml={2} spacing="0.25rem">
              {recipeDetail.cautions.map((caution, index) => (
                <WrapItem key={index}>
                  <Badge variant="outline" colorScheme="red">
                    {caution}
                  </Badge>
                </WrapItem>
              ))}
            </Wrap>
          </Text>
        )}
        {recipeDetail.healthLabels && (
          <Text>
            <Wrap ml={2} spacing="0.25rem">
              {recipeDetail.healthLabels.map((label, index) => (
                <WrapItem key={index}>
                  <Badge variant="outline" colorScheme="purple">
                    {label}
                  </Badge>
                </WrapItem>
              ))}
            </Wrap>
          </Text>
        )}
      </CardFooter>
    </Card>
  );
};
