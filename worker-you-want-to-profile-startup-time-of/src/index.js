function expensiveFn() {
	let n = 1;
	for (const key in Array.from({ length: 200000 })) {
		n++;
	}
	return n;
}

let n = 1;

for (const key in Array.from({ length: 200 })) {
	n++;
	n += expensiveFn();
}

export default {
	async fetch(request, env, ctx) {
		return new Response('Hello World!');
	},
};
