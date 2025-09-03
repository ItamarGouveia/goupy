import * as creation from "./src/creation.js";
import * as operations from "./src/operations.js";
import * as reshape from "./src/reshape.js";

export const goupy = {
  ...creation,
  ...operations,
  ...reshape,
};
