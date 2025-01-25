Shout out @penalosa for https://github.com/penalosa/startup-time-measure which shows this with Remix.

This is just ^ that but with just a Worker.

Run:

- `cd profile-startup/worker-you-want-to-profile-startup-time-of`
- `npm run build` (this runs: `wrangler deploy --dry-run --outdir=dist`)

Then:

- `cd ../worker-you-should-run-in-dev`
- `npm run dev`
- hit `d` to open chrome dev tools
- start recording
- then make a request to the local dev server

To use this with your own Worker — just replace `worker-you-want-to-profile-startup-time-of` with your own Worker, and change `worker-you-should-run-in-dev` to point to the build. (see `src/index.js`)
