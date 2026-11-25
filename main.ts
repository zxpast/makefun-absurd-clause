// The Absurd Clause Contest — entry program (Node 22, stdlib only).
// Writes one original English sentence (one absurd ToS clause, <=200 chars)
// deterministically to /output/entry.txt. No network, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

const CLAUSE =
  "Users agree that any dispute arising under this agreement shall be settled by arm-wrestling our legal counsel, Brenda, in the parking lot at dawn, and the loser buys breakfast for the pigeons.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", CLAUSE, "utf8");
