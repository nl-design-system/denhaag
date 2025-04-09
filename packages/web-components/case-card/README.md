# `denhaag-case-card` Web Component

Use this web component in your page as follows:

Include this anywhere in your page. The higher up in the source code, the sooner your web component will load.

```html
<script type="module" src="case-card/dist/index.mjs"></script>
```

Then put the custom element where your want this component in your page:

```html
<h2>My cases</h2>
<div class="grid">
  <denhaag-case-card dateTime="..." title="..." href="..."></denhaag-case-card>
</div>
```
