import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      ...S.documentTypeListItems().filter(item => item.getId() === "author").map(item => item.title("Authors")),
      ...S.documentTypeListItems().filter(item => item.getId() === "startup").map(item => item.title("Startups")),
    ]);
