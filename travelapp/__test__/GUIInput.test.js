// Import the js file to test
import { checkForName } from "../src/client/js/nameChecker.js"

describe("Unit Test checkForName() function", () => {
    test("CheckForName function should be defined", () => {
        expect(checkForName).toBeDefined();
    });
});