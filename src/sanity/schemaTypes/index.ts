import { type SchemaTypeDefinition } from "sanity";
import blockContent from "./blockContent";
import { product } from "./product";
import { category } from "./category";
import { order } from "./order";
import { sale } from "./sale";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContent, category, product, order, sale],
};
