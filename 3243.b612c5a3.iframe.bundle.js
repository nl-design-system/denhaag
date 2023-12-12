"use strict";(self.webpackChunk_gemeente_denhaag_storybook=self.webpackChunk_gemeente_denhaag_storybook||[]).push([[3243],{"../../components/Checkbox/dist/mjs/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>Checkbox,Z:()=>Checkbox});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__assign$1=function(){return __assign$1=Object.assign||function __assign(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign$1.apply(this,arguments)};function r$1(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r$1(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}"function"==typeof SuppressedError&&SuppressedError;var __assign=function(){return __assign=Object.assign||function __assign(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)};function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}"function"==typeof SuppressedError&&SuppressedError;var SvgIcon=function(_a){var _b,className=_a.className,_c=_a.component,component=void 0===_c?"svg":_c,_d=_a.focusable,focusable=void 0===_d?"false":_d,_e=_a.shapeRendering,shapeRendering=void 0===_e?"auto":_e,_f=_a.useDefaultClass,useDefaultClass=void 0===_f||_f,props=function __rest(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t}(_a,["className","component","focusable","shapeRendering","useDefaultClass"]),iconClassName=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}({"denhaag-icon":useDefaultClass},className),Component=component;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,__assign({className:iconClassName,focusable,"aria-hidden":null===(_b=props["aria-hidden"])||void 0===_b||_b,shapeRendering},props),props.children)};var _path$K;function _extends$N(){return _extends$N=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends$N.apply(this,arguments)}!function styleInject$1(css,ref){void 0===ref&&(ref={});var insertAt=ref.insertAt;if(css&&"undefined"!=typeof document){var head=document.head||document.getElementsByTagName("head")[0],style=document.createElement("style");style.type="text/css","top"===insertAt&&head.firstChild?head.insertBefore(style,head.firstChild):head.appendChild(style),style.styleSheet?style.styleSheet.cssText=css:style.appendChild(document.createTextNode(css))}}(".denhaag-icon{fill:currentcolor;display:inline-block;flex-shrink:0;font-size:1.5rem;height:1em;transition:fill .2s cubic-bezier(.4,0,.2,1) 0ms;width:1em}");var SvgChecked=function SvgChecked(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends$N({xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",width:"1em",height:"1em",viewBox:"0 0 24 24"},props),_path$K||(_path$K=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{stroke:"currentColor",strokeWidth:1.75,d:"M20.664 5.253a1 1 0 0 1 .083 1.411l-10.666 12a1 1 0 0 1-1.495 0l-5.333-6a1 1 0 0 1 1.494-1.328l4.586 5.159 9.92-11.16a1 1 0 0 1 1.411-.082Z"})))},Memo$N=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgChecked),CheckedIcon=function(props){return function(svg,props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(SvgIcon,__assign({component:svg},props))}(Memo$N,props)};!function styleInject(css,ref){void 0===ref&&(ref={});var insertAt=ref.insertAt;if(css&&"undefined"!=typeof document){var head=document.head||document.getElementsByTagName("head")[0],style=document.createElement("style");style.type="text/css","top"===insertAt&&head.firstChild?head.insertBefore(style,head.firstChild):head.appendChild(style),style.styleSheet?style.styleSheet.cssText=css:style.appendChild(document.createTextNode(css))}}(".denhaag-checkbox{align-items:center;display:inline-flex;justify-content:center;position:relative}.denhaag-checkbox__input{left:0;margin-block-end:0;margin-block-start:0;margin-inline-end:0;margin-inline-start:0;opacity:0;position:absolute;top:0;z-index:1}.denhaag-checkbox__icon,.denhaag-checkbox__input{aspect-ratio:1;cursor:pointer;width:var(--utrecht-custom-checkbox-size)}.denhaag-checkbox__icon{align-items:center;background-color:var(--utrecht-custom-checkbox-background-color,var(--utrecht-form-control-background-color));border-color:var(--utrecht-custom-checkbox-border-color,var(--utrecht-form-control-border-color));border-radius:var(--utrecht-custom-checkbox-border-radius,var(--utrecht-form-control-border-radius));border-style:solid;border-width:var(--utrecht-custom-checkbox-border-width,var(--utrecht-form-control-border-width));box-sizing:border-box;display:inline-flex;justify-content:center}.denhaag-checkbox__icon .denhaag-icon{display:none}.denhaag-checkbox__input:disabled{cursor:default}.denhaag-checkbox__input:checked+.denhaag-checkbox__icon{background-color:var(--utrecht-custom-checkbox-checked-background-color);border-color:var(--utrecht-custom-checkbox-checked-border-color);border-width:var(--utrecht-custom-checkbox-checked-border-width)}.denhaag-checkbox__input:checked+.denhaag-checkbox__icon .denhaag-icon{color:var(--utrecht-custom-checkbox-checked-color);display:block;font-size:var(--utrecht-custom-checkbox-icon-size)}.denhaag-checkbox.denhaag-checkbox--error .denhaag-checkbox__icon{border-color:var(--utrecht-custom-checkbox-invalid-border-color,var(--utrecht-form-control-invalid-border-color));border-width:var(--utrecht-custom-checkbox-invalid-border-width,var(--utrecht-form-control-invalid-border-width))}.denhaag-checkbox.denhaag-checkbox--error .denhaag-checkbox__icon .denhaag-icon{color:var(--utrecht-custom-checkbox-invalid-color)}.denhaag-checkbox.denhaag-checkbox--focus .denhaag-checkbox__icon,.denhaag-checkbox:focus-within .denhaag-checkbox__icon{outline:var(--denhaag-focus-border)}.denhaag-checkbox.denhaag-checkbox--hover .denhaag-checkbox__icon,.denhaag-checkbox:hover .denhaag-checkbox__icon,.denhaag-form-control-label:hover .denhaag-checkbox__icon{border-color:var(--denhaag-checkbox-hover-border-color);border-width:var(--denhaag-checkbox-hover-border-width)}.denhaag-checkbox .denhaag-checkbox__input:disabled+.denhaag-checkbox__icon{background-color:var(--utrecht-custom-checkbox-disabled-background-color);border-color:var(--utrecht-custom-checkbox-disabled-border-color);border-width:var(--utrecht-custom-checkbox-disabled-border-width);cursor:default}.denhaag-checkbox.denhaag-checkbox--error.denhaag-checkbox.denhaag-checkbox--hover .denhaag-checkbox__icon,.denhaag-checkbox.denhaag-checkbox--error:hover .denhaag-checkbox__icon,.denhaag-form-control-label:hover .denhaag-checkbox.denhaag-checkbox--error .denhaag-checkbox__icon{border-color:var(--denhaag-checkbox-hover-invalid-border-color)}.denhaag-checkbox.denhaag-checkbox--hover .denhaag-checkbox__input:checked+.denhaag-checkbox__icon,.denhaag-checkbox:hover .denhaag-checkbox__input:checked+.denhaag-checkbox__icon,.denhaag-form-control-label:hover .denhaag-checkbox__input:checked+.denhaag-checkbox__icon{background-color:var(--denhaag-checkbox-hover-checked-background-color);border-color:var(--denhaag-checkbox-hover-checked-border-color)}.denhaag-checkbox .denhaag-checkbox__input:checked:disabled+.denhaag-checkbox__icon{background-color:var(--denhaag-checkbox-checked-disabled-background-color);border-color:var(--denhaag-checkbox-checked-disabled-border-color)}.denhaag-checkbox.denhaag-checkbox--error .denhaag-checkbox__input:checked+.denhaag-checkbox__icon{background-color:var(--denhaag-checkbox-checked-invalid-background-color)}.denhaag-checkbox.denhaag-checkbox--error.denhaag-checkbox--hover .denhaag-checkbox__input:checked+.denhaag-checkbox__icon,.denhaag-checkbox.denhaag-checkbox--error:hover .denhaag-checkbox__input:checked+.denhaag-checkbox__icon,.denhaag-form-control-label:hover .denhaag-checkbox.denhaag-checkbox--error .denhaag-checkbox__input:checked+.denhaag-checkbox__icon{background-color:var(--denhaag-checkbox-hover-invalid-background-color);border-color:var(--denhaag-checkbox-hover-invalid-border-color)}");var Checkbox=function(_a){var className=_a.className,_b=_a.error,error=void 0!==_b&&_b,_c=_a.checked,checked=void 0!==_c&&_c,_d=_a.checkedIcon,checkedIcon=void 0===_d?react__WEBPACK_IMPORTED_MODULE_0__.createElement(CheckedIcon,null):_d,onChange=_a.onChange,props=function __rest$1(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t}(_a,["className","error","checked","checkedIcon","onChange"]),_e=react__WEBPACK_IMPORTED_MODULE_0__.useState(checked),isChecked=_e[0],setChecked=_e[1],classes=function clsx$1(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r$1(e))&&(n&&(n+=" "),n+=t);return n}("denhaag-checkbox",{"denhaag-checkbox--error":error},className);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:classes},react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",__assign$1({type:"checkbox",className:"denhaag-checkbox__input",checked:isChecked,onChange:function(event){setChecked(!isChecked),onChange&&onChange(event)}},props)),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"denhaag-checkbox__icon"},checkedIcon))}},"../../components/FormControlLabel/dist/mjs/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>FormControlLabel});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__assign=function(){return __assign=Object.assign||function __assign(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)};function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}"function"==typeof SuppressedError&&SuppressedError;!function styleInject(css,ref){void 0===ref&&(ref={});var insertAt=ref.insertAt;if(css&&"undefined"!=typeof document){var head=document.head||document.getElementsByTagName("head")[0],style=document.createElement("style");style.type="text/css","top"===insertAt&&head.firstChild?head.insertBefore(style,head.firstChild):head.appendChild(style),style.styleSheet?style.styleSheet.cssText=css:style.appendChild(document.createTextNode(css))}}(".denhaag-form-control-label__label,.utrecht-form-label{color:var(--utrecht-form-label-color);font-size:var(--utrecht-form-label-font-size);font-weight:var(--utrecht-form-label-font-weight)}.utrecht-form-label--checkbox{color:var(--utrecht-form-label-checkbox-color,var(--utrecht-form-label-color));cursor:var(--utrecht-action-activate-cursor,revert);font-weight:var(--utrecht-form-label-checkbox-font-weight,var(--utrecht-form-label-font-weight))}.utrecht-form-label--checked{font-weight:var(--utrecht-form-label-checked-font-weight,var(--utrecht-form-label-font-weight))}.utrecht-form-label--disabled{cursor:var(--utrecht-action-disabled-cursor,revert);font-weight:var(--utrecht-form-label-disabled-color,var(--utrecht-form-label-color))}.utrecht-form-label--radio{color:var(--utrecht-form-label-checkbox-color,var(--utrecht-form-label-color));cursor:var(--utrecht-action-activate-cursor,revert);font-weight:var(--utrecht-form-label-radio-font-weight,var(--utrecht-form-label-font-weight))}.denhaag-form-control-label{align-items:flex-start;cursor:pointer;display:flex;margin-block-end:var(--denhaag-form-control-label-margin-block-end)}.denhaag-form-control-label__input{align-items:center;display:inline-flex;height:calc(var(--denhaag-typography-scale-base-line-height)*var(--utrecht-form-label-font-size));margin-inline-end:var(--denhaag-form-control-label-input-margin-inline-end)}.denhaag-form-control-label__label{font-weight:var(--denhaag-typography-weight-regular);line-height:var(--denhaag-typography-scale-base-line-height)}.denhaag-form-control-label.denhaag-form-control-label--disabled{cursor:default}");var FormControlLabel=function(_a){var className=_a.className,_b=_a.disabled,disabled=void 0!==_b&&_b,input=_a.input,label=_a.label,props=function __rest(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t}(_a,["className","disabled","input","label"]),classes=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}("denhaag-form-control-label",{"denhaag-form-control-label--disabled":disabled},className);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",__assign({className:classes},props),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"denhaag-form-control-label__input"},input),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"denhaag-form-control-label__label"},label))}},"../../components/FormField/dist/mjs/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Eq:()=>FormFieldLabel,Hq:()=>FormFieldInput,LV:()=>FormFieldGroup,Wi:()=>FormField,tk:()=>FormFieldGroupLabel,ue:()=>FormFieldDescription});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__assign=function(){return __assign=Object.assign||function __assign(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)};function __rest(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t}"function"==typeof SuppressedError&&SuppressedError;function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}!function styleInject(css,ref){void 0===ref&&(ref={});var insertAt=ref.insertAt;if(css&&"undefined"!=typeof document){var head=document.head||document.getElementsByTagName("head")[0],style=document.createElement("style");style.type="text/css","top"===insertAt&&head.firstChild?head.insertBefore(style,head.firstChild):head.appendChild(style),style.styleSheet?style.styleSheet.cssText=css:style.appendChild(document.createTextNode(css))}}(".denhaag-form-field__label,.utrecht-form-label{color:var(--utrecht-form-label-color);font-size:var(--utrecht-form-label-font-size);font-weight:var(--utrecht-form-label-font-weight)}.utrecht-form-label--checkbox{color:var(--utrecht-form-label-checkbox-color,var(--utrecht-form-label-color));cursor:var(--utrecht-action-activate-cursor,revert);font-weight:var(--utrecht-form-label-checkbox-font-weight,var(--utrecht-form-label-font-weight))}.utrecht-form-label--checked{font-weight:var(--utrecht-form-label-checked-font-weight,var(--utrecht-form-label-font-weight))}.utrecht-form-label--disabled{cursor:var(--utrecht-action-disabled-cursor,revert);font-weight:var(--utrecht-form-label-disabled-color,var(--utrecht-form-label-color))}.utrecht-form-label--radio{color:var(--utrecht-form-label-checkbox-color,var(--utrecht-form-label-color));cursor:var(--utrecht-action-activate-cursor,revert);font-weight:var(--utrecht-form-label-radio-font-weight,var(--utrecht-form-label-font-weight))}.denhaag-form-field{--denhaag-form-input-margin-block-end:8px;border:0;margin-block-end:0;margin-block-start:0;margin-inline-end:0;margin-inline-start:0;padding-block-end:0;padding-block-start:0;padding-inline-end:0;padding-inline-start:0}.denhaag-form-field__label{line-height:var(--denhaag-typography-scale-base-line-height);margin-block-end:var(--denhaag-form-field-label-margin-block-end);padding-inline-end:0;padding-inline-start:0}.denhaag-form-field__description{color:var(--denhaag-form-field-description-color);font-family:var(--denhaag-form-field-description-font-family);font-size:var(--denhaag-form-field-description-font-size);font-weight:var(--denhaag-form-field-description-font-weight);line-height:var(--denhaag-form-field-description-line-height)}.denhaag-form-field--error .denhaag-form-field__description{color:var(--denhaag-form-field-description-error-color)}");var FormFieldLabel=function(_a){var className=_a.className,props=__rest(_a,["className"]),classes=clsx("denhaag-form-field__label",className);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",__assign({className:classes},props),props.children)},FormFieldInput=function(_a){var className=_a.className,props=__rest(_a,["className"]),classes=clsx("denhaag-form-field__input",className);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",__assign({className:classes},props),props.children)},FormFieldDescription=function(_a){var className=_a.className,props=__rest(_a,["className"]),classes=clsx("denhaag-form-field__description",className);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",__assign({className:classes},props),props.children)},FormField=function(_a){var className=_a.className,error=_a.error,props=__rest(_a,["className","error"]),classes=clsx("denhaag-form-field",{"denhaag-form-field--error":error},className);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",__assign({className:classes},props),props.children)},FormFieldGroup=function(_a){var className=_a.className,error=_a.error,props=__rest(_a,["className","error"]),classes=clsx("denhaag-form-field",{"denhaag-form-field--error":error},className);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("fieldset",__assign({className:classes},props),props.children)},FormFieldGroupLabel=function(_a){var className=_a.className,props=__rest(_a,["className"]),classes=clsx("denhaag-form-field__label",className);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("legend",__assign({className:classes},props),props.children)}},"../../components/Checkbox/README.md":module=>{module.exports='# Checkbox\n\n![npm (scoped)](https://img.shields.io/npm/v/@gemeente-denhaag/checkbox?logo=npm&style=flat-square)\n![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/nl-design-system/denhaag/Build%20and%20deploy%20Storybook%20to%20Azure%20Web%20App/main?logo=github&style=flat-square)\n\nCheckboxes are usually used to provide a way for users to make a range of selections (zero, one or more). They can also be used to tell users that they agree to specific terms.\n\n## When to use\n\nCheckboxes are used for multiple choices, not for mutually exclusive choices. Each checkbox works independently from other checkboxes in the list, therefore checking an additional box does not affect any other selections.\n\n### Forms\n\nCan be used in forms on a full page or in modals.\n\n### Terms and conditions\n\nTurning the checkbox input on or off can indicate whether you agree to the terms.\n\n## Alternatives and related components\n\nUse radio buttons to display a list of options where users can only make one choice\n\n[Navigate to Radio](../?path=/docs/components-input-radio--default)\n\n## Anatomy\n\nThe checkbox consists of:\n\n1. Label (optional): indicates what should be selected below.\n2. Checkbox input: a checkbox input that indicates the correct status. By default it is not active.\n3. Checkbox label: describes the information you can select or deselect.\n4. Helper text (optional): displays more information about the checkboxes\n\n## (Interactive) states\n\nThe checkbox contains the states normal, hover, disabled, error and focus.\n\n## Design properties\n\n### Typography\n\n- Label: TheSans/md/700\n- Checkbox label: TheSans/md/400\n- Helper text: TheSans/s/400\n\n### Colors\n\n- Label: text color Blue/5\n- Checkbox input inactive: border color Grey/4, background-color white\n- Checkbox input active: border color Blue/3, background-color Blue/3, checkmark icon white\n- Checkbox label: text color Grey/4\n- Helper text: text color Grey/4\n\n### Interactive states\n\n- Disabled: container border color Grey/2, checkbox label text color Grey/2\n- Error: container border color Red/3, checkbox label text color Grey/4\n- Focus: container border color Ocher/5\n\n### Structure\n\n- Checkbox: height and width 20px, border 1px\n- Checkbox focus: border 2px, dash 5,5\n- Label: margin-bottom 8px\n- Checkbox label: padding-left 8px\n- Helper text: margin-left 16px, margin-top 4px\n\n## Accessibility\n\nScreen readers automatically report the status of the check box.\n\n- [technical accessibility requirements]\n\n### Labeling\n\n[technical requirements, such as: label and labelHidden]\n\n### External links\n\n[technical requirements]\n\n### Keyboard support\n\n- Move focus to each checkbox using the tab key (or shift + tab when tabbing backwards)\n- Activate or deactivate checkboxes with the space key\n\n## Content guidelines\n\n### Checkbox labels\n\nCheckbox labels must:\n\n- Start with a capital letter\n- Not end in punctuation if it’s a single sentence, word, or a fragment\n- In case the checkbox asks to agree to the terms and conditions, use the first person\n\n## Best practices\n\n### Do\'s\n\nCheckboxes must:\n\n- Work independently of each other: selecting a checkbox may not change the selection status of another checkbox in the list.\n- Be positively boxed: for example “Enable notifications” instead of “Disable notifications”.\n- Always have a label handy when you use it to turn a setting on or off.\n- Use label tags as click targets.\n- Be arranged in a logical order, whether alphabetical, numeric, time-based or some other clear system.\n- Link to more information or have a subtitle for more explanation. Don\'t rely on tooltips to explain a checkbox.\n- If they are too long, run over the second line. This is preferable than truncation.\n- If they are too long, they will be aligned left\n- If they are too long, let the text flow under the checkbox so that the control and label are aligned at the top.\n\n### Don\'ts\n\nCheckboxes must:\n\n- Not cut with an omit task if the label is too long and run over 2 lines.\n\n### Buttons versus links\n\nButtons are mainly used for actions such as "Add", "Close", "Cancel" or "Save". Regular buttons similar to links are used for less important or less frequently used actions, such as "View details".\n\nLinks are mainly used for navigation and usually appear in or immediately after a sentence.\n\nThe HTML displayed for the Button and Link components has meaning. Using these components intentionally and consistently results in:\n\n- a more inclusive experience for assistive technology users\n- a more coherent visual experience for sighted users\n- products that are easier to maintain to scale\n\n## References\n\nhttps://www.nngroup.com/articles/checkboxes-vs-radio-buttons/ </br>\nhttps://uxplanet.org/checkbox-and-toggle-in-forms-f0de6086ac41 </br>\n'}}]);