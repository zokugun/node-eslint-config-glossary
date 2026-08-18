import type { Configurator, OverridesOptions } from '@zokugun/eslint-toolkit';

import { minorWords as defaultMinorWords } from './lists/minor-words.js';
import { preserveWords as defaultPreserveWords } from './lists/preserve-words.js';

type BaseOptions = {
	minorWords?: string[];
	preserveWords?: string[];
};

export function glossary(options: OverridesOptions<BaseOptions> = {}): Configurator {
	const minorWords = options.overrides?.minorWords ?? [
		...defaultMinorWords,
		...(options.minorWords ?? []),
	];

	const preserveWords = options.overrides?.preserveWords ?? [
		...defaultPreserveWords,
		...(options.preserveWords ?? []),
	];

	return (_resolver, register) => {
		register('glossary/minorWords', minorWords);
		register('glossary/preserveWords', preserveWords);

		return undefined;
	};
}
