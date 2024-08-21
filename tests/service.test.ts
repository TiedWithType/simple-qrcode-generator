import { Settings } from "@service/settings.service";
import { describe, it, expect } from "vitest";

describe("Service", () => {
 it("should return the same instance", () => {
  const instance1 = new Settings();
  const instance2 = new Settings();

  expect(instance1).toBe(instance2);
 });

 it("should share maxLimit = 100", () => {
  const instance1 = new Settings();
  const instance2 = new Settings();

  instance1.maxLimit = 100;

  expect(instance1.maxLimit).toBe(100);
  expect(instance2.maxLimit).toBe(100); // since instance2 is the same as instance1
 });
});
