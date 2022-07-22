import { CodeGenerator } from "../../src/";
import * as Templates from "../../src/templates";
import type * as Types from "../../src/types";

describe("learnwiz", () => {
  test("openapi-3.0.json", () => {
    const codeGenerator = new CodeGenerator("./test/openapi-3.0.json");

    const apiClientGeneratorTemplate: Types.CodeGenerator.CustomGenerator<Templates.ApiClient.Option> = {
      generator: Templates.ApiClient.generator,
      option: {},
    };

    const code = codeGenerator.generateTypeDefinition([
      codeGenerator.getAdditionalTypeDefinitionCustomCodeGenerator(),
      apiClientGeneratorTemplate,
    ]);

    expect(code).toMatchSnapshot();
  });
});
