import { validate, inputHandler } from "./utilits";
import { inputs } from "../configs";

describe("utilits in container folder", () => {
  describe("form validate function", () => {
    it("should return errors array", () => {
      const errors = validate(inputs);

      expect(errors.length).toBe(3);
    });
  });

  //так можно ?
  describe("input`s change handler", () => {
    it("should change inputs state", () => {
      const component = {
        state: {
          inputs
        },
        setState: function(params) {
          this.state = {
            ...this.state,
            ...params
          };
        }
      };

      const e = { target: { value: "asd", id: "name" } };

      inputHandler.call(component, e);

      expect(component.state.inputs.name.value).toBe("asd");
    });
  });
});
