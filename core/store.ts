import { createNestedProxy } from "./proxy";

export const store = createNestedProxy({
  UUID: Math.random().toString(36).substring(2).toUpperCase(),
  createdAt: new Date().toISOString().slice(0, 19).replace("T", " "),
});
