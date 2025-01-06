import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{T as b}from"./index-DsqOJc5V.js";import{r as a}from"./index-raSRI-5R.js";import"./_commonjsHelpers-BosuxZz1.js";const m=`# Tabs

Tabs organise and allow users to move between content without having to navigate away from a page.

## When to use

Use tabs when you are organisazing related content in a single cointainer or need to flip between multiple panes or sections. It’s a way to group content, connect related information, and is used as a tool to save space.

## Alternatives and related components

Use anchor navigation on longer pages with multiple sub-headings when you don’t group the content into groups.

## Anatomy

Tabs consists of:

1. Label: describes the content contained within it.
2. Line: this line shows the state of a tab
3. Trailing icon: this icon shows that it is possible to view all tabs that are not visible on the screen
4. Container

## (Interactive) states

Tabs contains the states active, inactive, hover, disabled and focus.

## Design properties

### Typography

- Label inactive: TheSans/md/400
- Label active: TheSans/md/700

### Color

- Label inactive: text color Grey/4
- Label active: text color Blue/3
- Line inactive: fill color Grey/2
- Line active: fill color Blue/3

### Interactive states

- Hover inactive: label color Blue/3, line color Grey/2
- Disabled: label color Grey/2, line color Grey/2
- Focus: border color Ocher/5, line color Grey/2

### Structure

- Label: padding-top and padding bottom 8px, padding-left and padding-right 16px
- Line: width 2px, padding-top 8px
- Trailing icon: size 16px, padding-left 4px

#### Mobile

- Label (and trailing icon): centered

## Accessibility

- Tab, shift + tab - to move focus between tabs.
- Space or Enter - to display the selected tab's content

## Content guidelines

Order the tabs by priority or importance from left to right

### Labels

- Each tab label needs to describe the content contained within it.
- Keep tab labels short and meaningful. Between 1-2 words is best and written in plain language. Keep in mind that at mobile widths and during translation, the character length of a label will impact the experience.
- Ensure that each tab label is unique.
- Do not use icons in tab labels.
- Tab labels shouldn't be longer than one or two words and be accurate in their description.
- Tab labels should also make sense when read in isolation.
- Never truncate tab labels. If a label overruns the container, find a shorter alternative.
- Do use title case for tab labels.

## Best practices

### Dos

Tabs should:

- As a default, there must always be one tab that's already selected and the content panel below it must be visible.
- Always be placed above the content it relates to.
- Have a minimum number of 2 tabs.
- Only one content panel can be shown at a time.
- Have the same font size for the label text of each tab
- Have one line of text for labels.
- Have an order that should be consistent across an experience. Tabs with related content should be grouped adjacent to each other.

### Don’ts

Tabs should:

- Not be putted underneath the content it relates to.
- The order of the tabs from left to right should never change. Only the content panel should change.
- Not use two lines of text for labels.
- Not use no more than six tabs in most scenarios. This maintains an uncluttered UI and reduces cognitive load for users.
- Not be used for primary navigation.

### Behavior

- The first tab section is selected by default
- Only one tab can be selected at a time
- Currently selected tab is always highlighted
- Tabs are scrollable by default and do not wrap to a second line

## References

[https://www.bbc.co.uk/gel/guidelines/tabs](https://www.bbc.co.uk/gel/guidelines/tabs)
[https://www.carbondesignsystem.com/components/tabs/usage](https://www.carbondesignsystem.com/components/tabs/usage)
[https://www.freshconsulting.com/insights/blog/uiux-principle-21-when-and-when-not-to-use-tabs/](https://www.freshconsulting.com/insights/blog/uiux-principle-21-when-and-when-not-to-use-tabs/)
`,g={tabData:[{label:"A tab",panelContent:"Item One"},{label:"Another tab",panelContent:"Item Two"},{label:"Yet another tab",panelContent:"Item Three"}]},y={id:"react-navigation-tabs",title:"React/Navigation/Tabs",component:b,args:g,tags:["autodocs"],parameters:{docs:{description:{component:m}}}},e={},n={render:()=>{const[d,h]=a.useState(1);return a.useEffect(()=>{const p=setInterval(()=>{h(u=>u+1)},1e3);return()=>clearInterval(p)},[]),t.jsx(b,{tabData:[{label:"A tab with timer",panelContent:t.jsxs(t.Fragment,{children:["Update timer: ",d]})},{label:"Another tab",panelContent:"Item Two"},{label:"Yet another tab",panelContent:"Item Three"}]})}};var o,s,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(r=(s=e.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};var i,l,c;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const [seconds, setSeconds] = useState(1);
    useEffect(() => {
      const interval = setInterval(() => {
        setSeconds((seconds: number) => seconds + 1);
      }, 1000);
      return () => clearInterval(interval);
    }, []);
    return <Tabs tabData={[{
      label: 'A tab with timer',
      panelContent: <>Update timer: {seconds}</>
    }, {
      label: 'Another tab',
      panelContent: 'Item Two'
    }, {
      label: 'Yet another tab',
      panelContent: 'Item Three'
    }]} />;
  }
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const x=["Default","UpdateTabContent"];export{e as Default,n as UpdateTabContent,x as __namedExportsOrder,y as default};
