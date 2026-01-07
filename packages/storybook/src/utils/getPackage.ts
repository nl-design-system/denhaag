export const getComponentDescription = (name: string, version: string, readme?: string) => {
  return `
<div style="margin-bottom:12px">
  <span class="nl-data-badge nl-data-badge--neutral">
    ${name}@${version}
  </span>
</div>

${readme ?? ''}
`.trim();
};
