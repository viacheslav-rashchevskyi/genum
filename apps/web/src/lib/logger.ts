const isDev = import.meta.env.DEV;

export const logger = {
	// eslint-disable-next-line no-console
	log: isDev ? console.log.bind(console) : () => {},
	// eslint-disable-next-line no-console
	warn: isDev ? console.warn.bind(console) : () => {},
	// eslint-disable-next-line no-console
	error: console.error.bind(console),
};
