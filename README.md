[@zokugun/eslint-config-glossary](https://github.com/zokugun/node-eslint-config-glossary)
=========================================================================================

[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![NPM Version](https://img.shields.io/npm/v/@zokugun/eslint-config-glossary.svg?colorB=green)](https://www.npmjs.com/package/@zokugun/eslint-config-glossary)
[![Donation](https://img.shields.io/badge/donate-ko--fi-green)](https://ko-fi.com/daiyam)
[![Donation](https://img.shields.io/badge/donate-liberapay-green)](https://liberapay.com/daiyam/donate)
[![Donation](https://img.shields.io/badge/donate-paypal-green)](https://paypal.me/daiyam99)

> This package registers two word lists for ESLint: preserved acronyms like `API` and `TypeScript`, and minor words like `a`, `the`, `and`. ESLint should keep acronyms intact while allowing common words to be ignored by spelling-focused rules in your project configuration.

Installation
------------

```bash
npm add @zokugun/eslint-config-glossary
```

Quick Start
-----------

```typescript
import { configure, gitignore, ignores } from '@zokugun/eslint-config';
import { glossary } from '@zokugun/eslint-config-glossary';
import { markdown } from '@zokugun/eslint-config-md';

export default configure([
	ignores(),
	gitignore(),
	glossary(),
	markdown(), // The `markdown` configurator is using the glossary to configure the `markdown` rules.
]);
```

API Reference
-------------

```typescript
function glossary(options: {
    minorWords?: string[];
    preserveWords?: string[];
    overrides?: {
        minorWords?: string[];
        preserveWords?: string[];
    };
}): Configurator;
```

Contributions
-------------

Contributions are most welcome. Please:

- Open issues and feature requests under the repository discussions.
- Follow the [`CONTRIBUTING.md`](./CONTRIBUTING.md).

Donations
---------

Support this project by becoming a financial contributor.

<table>
    <tr>
        <td><img src="https://raw.githubusercontent.com/daiyam/assets/master/icons/256/funding_kofi.png" alt="Ko-fi" width="80px" height="80px"></td>
        <td><a href="https://ko-fi.com/daiyam" target="_blank">ko-fi.com/daiyam</a></td>
    </tr>
    <tr>
        <td><img src="https://raw.githubusercontent.com/daiyam/assets/master/icons/256/funding_liberapay.png" alt="Liberapay" width="80px" height="80px"></td>
        <td><a href="https://liberapay.com/daiyam/donate" target="_blank">liberapay.com/daiyam/donate</a></td>
    </tr>
    <tr>
        <td><img src="https://raw.githubusercontent.com/daiyam/assets/master/icons/256/funding_paypal.png" alt="PayPal" width="80px" height="80px"></td>
        <td><a href="https://paypal.me/daiyam99" target="_blank">paypal.me/daiyam99</a></td>
    </tr>
</table>

License
-------

Copyright &copy; 2026-present Baptiste Augrain

Licensed under the [MIT license](https://opensource.org/licenses/MIT).
