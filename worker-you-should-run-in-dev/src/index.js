export default {
	async fetch(request, env, ctx) {
		// Run:
		// wrangler deploy --dry-run --outdir=dist
		// In /another-worker first
		// Then run wrangler dev for this Worker
		await import('../../worker-you-want-to-profile-startup-time-of/dist/index.js');
		return new Response('Hello World!');
	},
};