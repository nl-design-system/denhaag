import{r as g,e as o}from"./index-raSRI-5R.js";var w=".denhaag-modal{--denhaag-modal-footer-direction:column;align-items:center;background:none;border:none;box-sizing:border-box;display:var(--denhaag-modal-display);height:100%;justify-content:center;left:0;margin:0;max-height:none;max-width:none;outline:0;overflow:hidden;padding-block-end:var(--denhaag-modal-padding-block);padding-block-start:var(--denhaag-modal-padding-block);padding-inline-end:var(--denhaag-modal-padding-inline);padding-inline-start:var(--denhaag-modal-padding-inline);pointer-events:none;position:fixed;top:0;width:100%;z-index:var(--denhaag-modal-index)}@media (width >= 30rem){.denhaag-modal{--denhaag-modal-footer-direction:row}}.denhaag-modal[open]{--denhaag-modal-display:flex}.denhaag-modal::backdrop{background:none}.denhaag-modal__backdrop{background-color:var(--denhaag-modal-backdrop-background-color);bottom:0;left:0;pointer-events:all;position:absolute;right:0;top:0}.denhaag-modal__dialog{background-clip:padding-box;background-color:var(--denhaag-modal-background-color);display:flex;flex-direction:column;max-height:calc(100% - var(--denhaag-modal-offset-y)*2);max-width:var(--denhaag-modal-width);pointer-events:visiblePainted;position:relative;width:auto;z-index:1}.denhaag-modal__header{align-items:center;border-bottom:var(--denhaag-modal-header-border-bottom-width) var(--denhaag-modal-header-border-bottom-style) var(--denhaag-modal-header-border-bottom-color);display:flex;gap:var(--denhaag-modal-gap,var(--denhaag-modal-header-padding-block));justify-content:space-between;padding-block-end:var(--denhaag-modal-header-padding-block);padding-block-start:var(--denhaag-modal-header-padding-block);padding-inline-end:var(--denhaag-modal-header-padding-inline);padding-inline-start:var(--denhaag-modal-header-padding-inline)}.denhaag-modal__title{color:var(--denhaag-modal-title-color);font-family:var(--denhaag-modal-title-font-family);font-size:var(--denhaag-modal-title-font-size);font-style:var(--denhaag-modal-title-font-style);font-weight:var(--denhaag-modal-title-font-weight);line-height:var(--denhaag-modal-title-line-height);margin:0}.denhaag-modal__close{align-items:center;background:none;border:none;color:var(--denhaag-modal-close-color);cursor:pointer;display:flex;font-size:var(--denhaag-modal-close-font-size);font-weight:var(--denhaag-modal-close-font-weight);gap:var(--denhaag-modal-close-gap);padding:0}.denhaag-modal__close--hover,.denhaag-modal__close:hover{--denhaag-modal-close-color:var(--denhaag-modal-close-hover-color)}.denhaag-modal__close--focus,.denhaag-modal__close:focus-visible{outline:var(--denhaag-focus-border)}.denhaag-modal__close svg{font-size:var(--denhaag-modal-close-size,inherit);pointer-events:none}.denhaag-modal__content{flex:1 1 auto;max-height:100%;overflow-y:auto;padding-block-end:var(--denhaag-modal-content-padding-block);padding-block-start:var(--denhaag-modal-content-padding-block);padding-inline-end:var(--denhaag-modal-content-padding-inline);padding-inline-start:var(--denhaag-modal-content-padding-inline)}.denhaag-modal__footer{display:flex;flex-direction:var(--denhaag-modal-footer-direction);gap:var(--denhaag-modal-gap,var(--denhaag-modal-padding-block));justify-content:var(--denhaag-modal-footer-justify-content);padding-block-end:var(--denhaag-modal-footer-padding-block);padding-block-start:var(--denhaag-modal-footer-padding-block);padding-inline-end:var(--denhaag-modal-footer-padding-inline);padding-inline-start:var(--denhaag-modal-footer-padding-inline)}";if(typeof document<"u"){const e=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",n.nonce=window.NONCE,e.appendChild(n),n.styleSheet?n.styleSheet.cssText=w:n.appendChild(document.createTextNode(w))}var x=function(e){var n=e.children;return o.createElement("h3",{className:"denhaag-modal__title"},n)},M=function(e){var n=e.label,t=n===void 0?"Sluiten":n,a=e.onClick;return o.createElement("button",{className:"denhaag-modal__close",type:"button","aria-label":"Close",onClick:a},o.createElement("svg",{className:"denhaag-icon",width:"1em",height:"1em",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L8.41421 7L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L7 8.41421L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z",fill:"currentColor"})),t)},E=function(e){var n=e.title,t=e.closeLabel,a=e.onClose;return o.createElement("header",{className:"denhaag-modal__header"},o.createElement(x,null,n),o.createElement(M,{label:t,onClick:a}))},z=function(e){var n=e.children;return o.createElement("article",{className:"denhaag-modal__content"},n)},v=function(){return v=Object.assign||function(n){for(var t,a=1,d=arguments.length;a<d;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},v.apply(this,arguments)};var f=function(){return f=Object.assign||function(n){for(var t,a=1,d=arguments.length;a<d;a++){t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},f.apply(this,arguments)};function O(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,a=Object.getOwnPropertySymbols(e);d<a.length;d++)n.indexOf(a[d])<0&&Object.prototype.propertyIsEnumerable.call(e,a[d])&&(t[a[d]]=e[a[d]]);return t}var k=`.denhaag-button{--_denhaag-button-padding-inline-end:var(
    --denhaag-button-medium-size-padding-inline,var(--denhaag-button-padding-inline)
  );--_denhaag-button-padding-inline-start:var(
    --denhaag-button-medium-size-padding-inline,var(--denhaag-button-padding-inline)
  );align-items:center;background-color:var(--denhaag-button-primary-action-background-color);border:0;border-radius:var(--denhaag-button-border-radius);color:var(--denhaag-button-primary-action-color);cursor:var(--denhaag-button-cursor,default);display:inline-flex;font-family:var(--denhaag-button-font-family);font-size:var(--denhaag-button-font-size,var(--denhaag-typography-scale-base-font-size));font-weight:var(--denhaag-button-font-weight,400);gap:var(--denhaag-button-gap);justify-content:center;line-height:1.5;padding-block-end:var(--denhaag-button-medium-size-padding-block,var(--denhaag-button-padding-block));padding-block-start:var(--denhaag-button-medium-size-padding-block,var(--denhaag-button-padding-block));padding-inline-end:var(--_denhaag-button-padding-inline-end);padding-inline-start:var(--_denhaag-button-padding-inline-start);position:relative;text-decoration:none}.denhaag-button--start-icon{--_denhaag-button-padding-inline-start:var(
    --denhaag-button-icon-padding-inline-medium,var(--denhaag-button-padding-inline)
  )}.denhaag-button--end-icon{--_denhaag-button-padding-inline-end:var(
    --denhaag-button-icon-padding-inline-medium,var(--denhaag-button-padding-inline)
  )}.denhaag-button__icon{align-items:center;display:flex}.denhaag-button.denhaag-status-button{display:flex;justify-content:space-between}.denhaag-button.denhaag-status-button.denhaag-status-button--error{--denhaag-button-primary-action-background-color:var(--denhaag-color-red-3)}.denhaag-button.denhaag-status-button.denhaag-status-button--loading{--denhaag-button-primary-action-disabled-background-color:var(--denhaag-button-primary-action-background-color);--denhaag-button-primary-action-disabled-color:var(--denhaag-button-primary-action-color)}.denhaag-button.denhaag-status-button.denhaag-status-button--loading .denhaag-icon{animation:denhaag-rotation 1s linear infinite}.denhaag-button.denhaag-status-button .denhaag-status-button__loading-state-button-hidden>span{display:block}.denhaag-button.denhaag-status-button .denhaag-status-button-state-container{position:relative}.denhaag-button.denhaag-status-button .denhaag-status-button-state-current{display:block;text-align:start}.denhaag-button.denhaag-status-button .denhaag-status-button-states{visibility:hidden}.denhaag-button.denhaag-status-button .denhaag-status-button-states>.denhaag-status-button-state{height:0}.denhaag-button:focus-visible{--_utrecht-focus-ring-box-shadow:0 0 0 var(--utrecht-focus-outline-width,0) var(--utrecht-focus-inverse-outline-color,transparent);box-shadow:var(--_utrecht-focus-ring-box-shadow);outline-color:var(--utrecht-focus-outline-color,revert);outline-offset:var(--utrecht-focus-outline-offset,revert);outline-style:var(--utrecht-focus-outline-style,revert);outline-width:var(--utrecht-focus-outline-width,revert);z-index:1}@keyframes denhaag-rotation{0%{transform:rotate(0)}to{transform:rotate(1turn)}}.denhaag-button.denhaag-button--hover,.denhaag-button:hover{background-color:var(--denhaag-button-primary-action-hover-background-color);color:var(--denhaag-button-primary-action-hover-color)}.denhaag-button.denhaag-button--disabled,.denhaag-button.denhaag-button:disabled{background-color:var(--denhaag-button-primary-action-disabled-background-color);color:var(--denhaag-button-primary-action-disabled-color)}.denhaag-button--secondary-action{background-color:var(--denhaag-button-secondary-action-background-color);border-color:var(--denhaag-button-secondary-action-border-color);border-style:solid;border-width:var(--denhaag-button-border-width);color:var(--denhaag-button-secondary-action-color);padding-block-end:calc(var(--denhaag-button-medium-size-padding-block, var(--denhaag-button-padding-block)) - var(--denhaag-button-border-width));padding-block-start:calc(var(--denhaag-button-medium-size-padding-block, var(--denhaag-button-padding-block)) - var(--denhaag-button-border-width));padding-inline-end:calc(var(--denhaag-button-medium-size-padding-inline, var(--denhaag-button-padding-inline)) - var(--denhaag-button-border-width));padding-inline-start:calc(var(--denhaag-button-medium-size-padding-inline, var(--denhaag-button-padding-inline)) - var(--denhaag-button-border-width))}.denhaag-button--secondary-action.denhaag-button--hover,.denhaag-button--secondary-action:hover{background-color:var(--denhaag-button-secondary-action-hover-background-color);border-color:var(--denhaag-button-secondary-action-hover-border-color);color:var(--denhaag-button-secondary-action-hover-color)}.denhaag-button--secondary-action.denhaag-button--disabled,.denhaag-button--secondary-action.denhaag-button:disabled{background-color:var(--denhaag-button-secondary-action-disabled-background-color);border-color:var(--denhaag-button-secondary-action-disabled-border-color);color:var(--denhaag-button-secondary-action-disabled-color)}.denhaag-button--large{--_denhaag-button-padding-inline-end:var(
    --denhaag-button-large-size-padding-inline,var(--denhaag-button-padding-inline)
  );--_denhaag-button-padding-inline-start:var(
    --denhaag-button-large-size-padding-inline,var(--denhaag-button-padding-inline)
  );font-size:var(--denhaag-button-large-size-font-size,var(--denhaag-typography-scale-lg-font-size));line-height:var(--denhaag-button-large-size-line-height);padding-block-end:var(--denhaag-button-large-size-padding-block,var(--denhaag-button-padding-block));padding-block-start:var(--denhaag-button-large-size-padding-block,var(--denhaag-button-padding-block));padding-inline-end:var(--_denhaag-button-padding-inline-end);padding-inline-start:var(--_denhaag-button-padding-inline-start)}.denhaag-button--large .denhaag-button--start-icon{--_denhaag-button-padding-inline-start:var(
    --denhaag-button-icon-padding-inline-large,var(--denhaag-button-padding-inline)
  )}.denhaag-button--large .denhaag-button--end-icon{--_denhaag-button-padding-inline-end:var(
    --denhaag-button-icon-padding-inline-large,var(--denhaag-button-padding-inline)
  )}.denhaag-button--large.denhaag-button--secondary-action{padding-block-end:calc(var(--denhaag-button-large-size-padding-block, var(--denhaag-button-padding-block)) - var(--denhaag-button-border-width));padding-block-start:calc(var(--denhaag-button-large-size-padding-block, var(--denhaag-button-padding-block)) - var(--denhaag-button-border-width));padding-inline-end:calc(var(--denhaag-button-large-size-padding-inline, var(--denhaag-button-padding-inline)) - var(--denhaag-button-border-width));padding-inline-start:calc(var(--denhaag-button-large-size-padding-inline, var(--denhaag-button-padding-inline)) - var(--denhaag-button-border-width))}.denhaag-button__icon>:first-child{font-size:var(--denhaag-typography-scale-lg-font-size)}.denhaag-button--large .denhaag-button__icon>:first-child{font-size:var(--denhaag-typography-scale-xl-font-size)}.denhaag-button--icon-only{--denhaag-button-medium-size-padding-inline:0.75rem;height:var(--denhaag-button-icon-only-height);padding-inline-end:var(--denhaag-button-medium-size-padding-inline);padding-inline-start:var(--denhaag-button-medium-size-padding-inline)}.denhaag-button--icon-only .denhaag-button__icon{height:var(--denhaag-button-icon-only-icon-height)}`;if(typeof document<"u"){const e=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",n.nonce=window.NONCE,e.appendChild(n),n.styleSheet?n.styleSheet.cssText=k:n.appendChild(document.createTextNode(k))}function C(e){var n,t,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e)){var d=e.length;for(n=0;n<d;n++)e[n]&&(t=C(e[n]))&&(a&&(a+=" "),a+=t)}else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function L(){for(var e,n,t=0,a="",d=arguments.length;t<d;t++)(e=arguments[t])&&(n=C(e))&&(a&&(a+=" "),a+=n);return a}var j=function(e){var n=e.icon,t=e.className,a=e.type,d=a===void 0?"button":a,r=e.iconAlign,i=r===void 0?"start":r,h=e.ref,l=O(e,["icon","className","type","iconAlign","ref"]),c=L("denhaag-button",{"denhaag-button--secondary-action":l.variant==="secondary-action","denhaag-button--large":l.size==="large","denhaag-button--start-icon":i==="start"&&n!==void 0,"denhaag-button--end-icon":i==="end"},t),u=n!==void 0?o.createElement("span",{className:"denhaag-button__icon"},n):"";return o.createElement("button",f({},l,{ref:h,type:d,className:c}),i==="start"?u:"",o.createElement("span",{className:"denhaag-button__label"},l.children),i==="end"?u:"")};var _=".denhaag-icon{fill:currentColor;display:inline-block;flex-shrink:0;font-size:1.5rem;height:1em;transition:fill .2s cubic-bezier(.4,0,.2,1) 0ms;width:1em}";if(typeof document<"u"){const e=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",n.nonce=window.NONCE,e.appendChild(n),n.styleSheet?n.styleSheet.cssText=_:n.appendChild(document.createTextNode(_))}var N=function(e){var n=e.actions;return n?o.createElement("footer",{className:"denhaag-modal__footer"},n.map(function(t,a){return o.createElement(j,v({key:"modal-footer-action-".concat(a)},t))})):null},S=function(e){var n=e.children;return o.createElement("div",{className:"denhaag-modal__dialog"},n)},T=function(e){var n=e.onClose,t=function(a){a.key==="Escape"&&(n==null||n())};return g.useEffect(function(){return window.addEventListener("keydown",t),function(){return window.removeEventListener("keydown",t)}},[]),o.createElement("div",{role:"presentation",className:"denhaag-modal__backdrop",onClick:n})},B=function(e){var n=e.open,t=n===void 0?!1:n,a=e.title,d=e.closeLabel,r=e.children,i=e.actions,h=e.trigger,l=e.onToggle,c=g.useState(g.useRef(null))[0],u=g.useState(t),p=u[0],y=u[1];g.useEffect(function(){y(t)},[t]),g.useEffect(function(){var s,m;return p?(s=c.current)===null||s===void 0?void 0:s.showModal():(m=c.current)===null||m===void 0?void 0:m.close()},[c,p]);var b=function(s){s===void 0&&(s=!p),y(s),l==null||l(s)};return o.createElement(o.Fragment,null,h==null?void 0:h(b),o.createElement("dialog",{ref:c,className:"denhaag-modal"},o.createElement(T,{onClose:function(){return b(!1)}}),o.createElement(S,null,o.createElement(E,{title:a,closeLabel:d,onClose:function(){return b(!1)}}),o.createElement(z,null,typeof r=="function"?r(b):r),o.createElement(N,{actions:i==null?void 0:i(b)}))))};B.__docgenInfo={description:"",methods:[],displayName:"Modal"};T.__docgenInfo={description:"",methods:[],displayName:"ModalBackdrop"};z.__docgenInfo={description:"",methods:[],displayName:"ModalContent"};S.__docgenInfo={description:"",methods:[],displayName:"ModalDialog"};N.__docgenInfo={description:"",methods:[],displayName:"ModalFooter"};E.__docgenInfo={description:"",methods:[],displayName:"ModalHeader"};x.__docgenInfo={description:"",methods:[],displayName:"ModalTitle"};const I=`# Modal

Modals are overlays that prevent users from interacting with the rest of the application until a specific action is taken.

## When to use

Use a modal to request information that is preventing the system from continuing a user-initiated process. It can also be used to notify the user of urgent information concerning their current work. Modal dialogs are commonly used to report system errors or convey a consequence of a user’s action. Finally, it can be used to confirm user decisions. Clearly describe the action being confirmed and explain any potential consequences that it may cause. Both the title and the button should reflect the action that will occur.

## Alternatives and related components

- Use an accordion to present large amounts of additional information or actions that don’t require confirmation
- Use a banner to communicate a change or condition that needs the users attention within the context of a page

## Anatomy

The modal consists of:

1. Title: gives users a quick overview of the modal.
2. Close icon: closes the modal.
3. Text: contains the information needed to complete the modal’s task. It can include message text and components.
4. Buttons (optional): button that allows users to perform an action or close the modal.
5. Overlay: screen overlay that obscures the on-page content.

## (Interactive) states

None.

## Design properties

### Typography

- Title: TheMix/xl/700
- Text: TheSans/md/400

### Colors

- Title: text color Blue/3
- Close icon: svg color Grey/4
- Text: text color Grey/4
- Overlay: background-color white

### Button

The buttons text only, medium primary and secundary are used.

### Structure

- Title: padding-top and padding-left 32px, margin-bottom 16px
- Close icon: height and width 24px, padding-right 32px
- Text: padding-left and padding-right 32px, margin-bottom 48px
- Buttons: padding-right and padding-bottom 32px, padding space between buttons 16px

## Accessibility

[technical accessibility requirements]

### Error alerts in forms

#### Error alerts

If users submit long or complex forms with errors, use an error alert to summarize what went wrong. Place the alert at the top of the form and move the focus to the banner when the form is submitted. This will allow all users to scroll through the form in a logical order to resolve the issues.

#### Inline errors

Always include inline error messages for specific form fields so that users know what to do in context while correcting their errors.

## Content guidelines

### Title

Modal titles should:

- Use a clear {verb}+{noun} question or statement.

### Body content

Body content should be:

- Actionable: start sentences with imperative verbs when telling an user what actions are available to them (especially something new). Don’t use permissive language like "you can".

- Structured for users success: always put the most critical information first.
- Clear: use the verb “need” to help users understand when they’re required to do something.

### Primary and secondary actions

Actions should be:

- Clear and predictable: users should be able to anticipate what will happen when they click a button. Never deceive a user by mislabeling an action.
- Action-led: actions should always lead with a strong verb that encourages action. To provide enough context to users use the {verb}+{noun} format on actions except in the case of common actions like Save, Close, Cancel, or OK.
- Scannable: avoid unnecessary words and articles such as the, an, or a.

## Best practices

### Dos

Use modals when users must complete an action before they can continue with the main workflow. Avoid using modals to display complex forms or large amounts of information.

Modals should:

- Require that users take an action.
- Close when users press the X button, the Cancel button, or the ESC key, not when users click or tap the area outside the modal.
- Be used very sparingly.
- Be used for important warnings, as a way to prevent or correct critical errors.
- Be used to request the user to enter information critical to continuing the current process.
- Notify the user after the action that has been taken.

### Don’ts

Modals should:

- Not be used for nonessential information that is not related to the current user flow.
- Not have more than two buttons (primary and secondary) at the bottom. This prevents unclear action hierarchy and crowding on mobile screens. Since modals are for focused tasks, they should have focused actions.
- Not be closable when the users click or tap the area outside the modal.
- Not include multiple steps.
- Not cram in too much.
- Not include important information.
- Not open suddenly. A modal should always open upon the user doing (or did) something.

## Javascript

Import the \`@gemeente-denhaag/modal/src/modal.js\` javascript file to you site to allow the modals to work.

See the example below:

\`\`\`javascript
import ModalScripts from "@gemeente-denhaag/modal/src/modal";
window.addEventListener("DOMContentLoaded", () => new ModalScripts());
\`\`\`

## References

[Figma Design](https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/Design-System---Gemeente-Den-Haag?node-id=0%3A1)
[http://www.uxforthemasses.com/overlays/](http://www.uxforthemasses.com/overlays/)
[https://www.nngroup.com/articles/modal-nonmodal-dialog/](https://www.nngroup.com/articles/modal-nonmodal-dialog/)
`;export{B as M,I as r};
