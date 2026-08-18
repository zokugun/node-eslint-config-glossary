import { configure, gitignore, ignores } from '@zokugun/eslint-config';
import { json, jsonc, yaml } from '@zokugun/eslint-config-data';
import { javascript, regexp } from '@zokugun/eslint-config-js';
import { markdown } from '@zokugun/eslint-config-md';
import { nodejs } from '@zokugun/eslint-config-nodejs';
import { importX, perfectionist, stylistic } from '@zokugun/eslint-config-style';
import { typescript } from '@zokugun/eslint-config-ts';

export default configure([
	ignores(),
	gitignore(),
	nodejs(),
	stylistic(),
	javascript(),
	typescript(),
	importX(),
	perfectionist(),
	regexp(),
	json(),
	jsonc(),
	yaml(),
	markdown(),
]);
