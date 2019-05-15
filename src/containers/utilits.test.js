import { validate } from "./utilits";
import { inputs } from "../configs";

describe("utilits in container folder", () => {
  describe("form validate function", () => {
    it("should return false", () => {
      const component = {
        setState: function(params) {
          this.state = {
            ...this.state,
            ...params
          };
        },
        state: {
          inputs,
          errors: []
        }
      };

      const errors = validate.call(component);

      expect(errors).toBeFalsy();
      expect(component.state.errors.length).toBe(3);
    });
  });
});
