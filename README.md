Run:

`npm run build`
(this runs: `wrangler deploy --dry-run --outdir=dist`)

Then:

- `cd ../worker-you-should-run-in-dev`
- `npm run dev`
- hit `d` to open chrome dev tools
- start recording
- then make a request to the local dev server