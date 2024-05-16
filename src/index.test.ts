import fs from "node:fs";

test("Read file should contain the text 'Hi!'", () => {
  const fileContent = fs.readFileSync("greeting.txt");

  const textContent = fileContent.toString("utf-8");

  const result = textContent.split("\n")[0];
  expect(result).toEqual("Hi!");
});

test("File reply.txt should be written to", () => {
  const result = fs.writeFileSync("reply.txt", "Goddag goddag!\n");

  expect(() => result).not.toThrow();
});
