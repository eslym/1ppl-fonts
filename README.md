# 1ppl-fonts

Static font CDN for `https://fonts.1ppl.me`.

This repo builds and serves a small set of self-hosted web fonts so they can be loaded directly from a CDN instead of a package manager.

## License Disclaimer

License notes in this README are informational only. Each font or graphic is redistributed under its upstream license, and you should verify the original project terms before reuse or redistribution.

## What's here

- `noto-sans.css`
- `noto-sans-mono.css`
- `noto-sans-jp.css`
- `noto-sans-kr.css`
- `noto-sans-sc.css`
- `noto-sans-tc.css`
- `noto-sans-cjk.css`
- `maple-mono.css`
- `twemoji.css`

`noto-sans-cjk.css` is a convenience bundle that combines the JP, KR, SC, and TC stylesheets.

## Usage

Use the preload pattern for each stylesheet:

<details>
<summary>Noto Sans - Latin UI family, weights 100 to 900, normal and italic</summary>

CSS Font Family: `Noto Sans`

Source: [Google Fonts](https://fonts.google.com/specimen/Noto+Sans)

License: OFL-1.1

```html
<link rel="preload" href="https://fonts.1ppl.me/noto-sans.css" as="style" onload="this.onload=null;this.rel='stylesheet'"/>
<noscript><link rel="stylesheet" href="https://fonts.1ppl.me/noto-sans.css"/></noscript>
```

</details>

<details>
<summary>Noto Sans Mono - Monospace family, weights 100 to 900</summary>

CSS Font Family: `Noto Sans Mono`

Source: [Google Fonts](https://fonts.google.com/specimen/Noto+Sans+Mono)

License: OFL-1.1

```html
<link rel="preload" href="https://fonts.1ppl.me/noto-sans-mono.css" as="style" onload="this.onload=null;this.rel='stylesheet'"/>
<noscript><link rel="stylesheet" href="https://fonts.1ppl.me/noto-sans-mono.css"/></noscript>
```

</details>

<details>
<summary>Noto Sans JP - Japanese subset, weights 100 to 900</summary>

CSS Font Family: `Noto Sans JP`

Source: [Google Fonts](https://fonts.google.com/specimen/Noto+Sans+JP)

License: OFL-1.1

```html
<link rel="preload" href="https://fonts.1ppl.me/noto-sans-jp.css" as="style" onload="this.onload=null;this.rel='stylesheet'"/>
<noscript><link rel="stylesheet" href="https://fonts.1ppl.me/noto-sans-jp.css"/></noscript>
```

</details>

<details>
<summary>Noto Sans KR - Korean subset, weights 100 to 900</summary>

CSS Font Family: `Noto Sans KR`

Source: [Google Fonts](https://fonts.google.com/specimen/Noto+Sans+KR)

License: OFL-1.1

```html
<link rel="preload" href="https://fonts.1ppl.me/noto-sans-kr.css" as="style" onload="this.onload=null;this.rel='stylesheet'"/>
<noscript><link rel="stylesheet" href="https://fonts.1ppl.me/noto-sans-kr.css"/></noscript>
```

</details>

<details>
<summary>Noto Sans SC - Simplified Chinese subset, weights 100 to 900</summary>

CSS Font Family: `Noto Sans SC`

Source: [Google Fonts](https://fonts.google.com/specimen/Noto+Sans+SC)

License: OFL-1.1

```html
<link rel="preload" href="https://fonts.1ppl.me/noto-sans-sc.css" as="style" onload="this.onload=null;this.rel='stylesheet'"/>
<noscript><link rel="stylesheet" href="https://fonts.1ppl.me/noto-sans-sc.css"/></noscript>
```

</details>

<details>
<summary>Noto Sans TC - Traditional Chinese subset, weights 100 to 900</summary>

CSS Font Family: `Noto Sans TC`

Source: [Google Fonts](https://fonts.google.com/specimen/Noto+Sans+TC)

License: OFL-1.1

```html
<link rel="preload" href="https://fonts.1ppl.me/noto-sans-tc.css" as="style" onload="this.onload=null;this.rel='stylesheet'"/>
<noscript><link rel="stylesheet" href="https://fonts.1ppl.me/noto-sans-tc.css"/></noscript>
```

</details>

<details>
<summary>Noto Sans CJK - Convenience bundle for JP, KR, SC, and TC</summary>

Font Families: `Noto Sans JP`, `Noto Sans KR`, `Noto Sans SC`, `Noto Sans TC`

Source: [Google Fonts JP](https://fonts.google.com/specimen/Noto+Sans+JP), [KR](https://fonts.google.com/specimen/Noto+Sans+KR), [SC](https://fonts.google.com/specimen/Noto+Sans+SC), [TC](https://fonts.google.com/specimen/Noto+Sans+TC)

License: OFL-1.1

```html
<link rel="preload" href="https://fonts.1ppl.me/noto-sans-cjk.css" as="style" onload="this.onload=null;this.rel='stylesheet'"/>
<noscript><link rel="stylesheet" href="https://fonts.1ppl.me/noto-sans-cjk.css"/></noscript>
```

</details>

<details>
<summary>Maple Mono - Coding monospace family, weights 100 to 800, normal and italic</summary>

CSS Font Family: `Maple Mono CN`

Source: [subframe7536/maple-font](https://github.com/subframe7536/maple-font)

License: OFL-1.1

```html
<link rel="preload" href="https://fonts.1ppl.me/maple-mono.css" as="style" onload="this.onload=null;this.rel='stylesheet'"/>
<noscript><link rel="stylesheet" href="https://fonts.1ppl.me/maple-mono.css"/></noscript>
```

</details>

<details>
<summary>Twemoji - Emoji graphics with OTSVG, SBIX, and COLRv1 variants for compatibility</summary>

CSS Font Family: `Twemoji`

Source: [jdecked/twemoji](https://github.com/jdecked/twemoji)

License: CC-BY 4.0

```html
<link rel="preload" href="https://fonts.1ppl.me/twemoji.css" as="style" onload="this.onload=null;this.rel='stylesheet'"/>
<noscript><link rel="stylesheet" href="https://fonts.1ppl.me/twemoji.css"/></noscript>
```

</details>

## Build

Built with Vite and deployed to Cloudflare Pages.

```bash
bun install
bunx --bun vite build
```
