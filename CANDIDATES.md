# Candidates — The Absurd Clause Contest

Brief: one original English sentence, max 200 characters, phrased as a clause
that could sit buried deep inside a terms-of-service agreement — deadpan
legal boilerplate that quietly turns absurd. Twist must land in the final
words; named person + specific time anchor + concrete consequence.
Leaderboard scan at build time (26 Nov 2026 ~03:40 WIB): the competition
leaderboard returned zero entries (blind rounds, nothing judged yet), so O2
had no field duplicates to check against; O1 web search for the chosen
sentence returned no verbatim hit.

## Drafts (all five generated before choosing; idea-first discarded)

- A (154 chars): "Users agree that any dispute arising under this agreement shall be settled by arm-wrestling our legal counsel, Brenda, in the company parking lot at dawn."
- B (145 chars, 3 sentences — rejected: not one sentence): "By continuing to use this service after 3 a.m., you consent to us renaming your Wi-Fi network after our CEO's dog, Biscuit, until further notice."
- C (153 chars): "In the event of your death, your account, including all unread emails, shall pass to your designated heir, Kevin, who has been notified and is delighted."
- D (146 chars, 2 sentences — rejected: not one sentence, and meta/self-referential): "Section 14.2: any user who reads this clause aloud before midnight forfeits one sock, which shall be collected by our bailiff, Gerald, on Tuesday."
- E (139 chars): "The user hereby grants the company a perpetual, irrevocable licence to borrow your grandmother's good plates for all future office parties."

## Revision (real revision in-session, not one-shot)

- Draft v1 = A. Verified: 154 chars, 1 sentence, byte-identical across 2 runs
  (sha256 32be20043c381b5e19499557a837373649cdfaabd2109c3c696989481a83d89b).
- Problem with v1: the punchline ("arm-wrestling") lands mid-sentence and the
  ending ("at dawn") adds atmosphere, not a new twist; and "arm-wrestling
  settles a legal dispute" is a known real anecdote (Southwest Airlines, 1992),
  so the premise alone is guessable — O3 risk.
- Revision v2: kept the boilerplate opening, Brenda, and the parking-lot/dawn
  anchor, and added a second reversal in the final 8 words — the loser buys
  breakfast for the pigeons. That final image (a legal dispute ending in
  feeding pigeons) is the twist that lands on one reading, and the full
  sentence is not reproducible from the prompt alone.
- v2 was exactly 200 chars (at the cap), so "company" was trimmed for margin.

## Chosen entry (final)

"Users agree that any dispute arising under this agreement shall be settled by arm-wrestling our legal counsel, Brenda, in the parking lot at dawn, and the loser buys breakfast for the pigeons."

- 192 characters, 1 sentence, UTF-8, no trailing newline.
- Verified: byte-identical across 2 runs of `node main.ts`.
- sha256 of /output/entry.txt: edf8e56c679fe75456d681ce374137314895ee224d07bb35d533a2ef53083617
