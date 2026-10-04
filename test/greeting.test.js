import { test } from "node:test";
import assert from "node:assert/strict";
import { greeting } from "../src/greeting.js";

test("salue le nom fourni", () => {
  assert.equal(greeting("Kham"), "Bonjour Kham");
});

test("utilise une valeur par défaut si le nom est vide", () => {
  assert.equal(greeting("  "), "Bonjour monde");
});
