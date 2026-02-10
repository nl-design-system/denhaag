import{r as d,j as o}from"./iframe-hBvvBgCZ.js";import"./preload-helper-PPVm8Dsz.js";function a(n){"@babel/helpers - typeof";return a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(n)}function f(n,e){if(a(n)!="object"||!n)return n;var i=n[Symbol.toPrimitive];if(i!==void 0){var t=i.call(n,e);if(a(t)!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function b(n){var e=f(n,"string");return a(e)=="symbol"?e:e+""}function y(n,e,i){return(e=b(e))in n?Object.defineProperty(n,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[e]=i,n}function g(n,e){if(n==null)return{};var i={};for(var t in n)if({}.hasOwnProperty.call(n,t)){if(e.indexOf(t)!==-1)continue;i[t]=n[t]}return i}function v(n,e){if(n==null)return{};var i,t,r=g(n,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(t=0;t<s.length;t++)i=s[t],e.indexOf(i)===-1&&{}.propertyIsEnumerable.call(n,i)&&(r[i]=n[i])}return r}function k(n){var e,i,t="";if(typeof n=="string"||typeof n=="number")t+=n;else if(typeof n=="object")if(Array.isArray(n)){var r=n.length;for(e=0;e<r;e++)n[e]&&(i=k(n[e]))&&(t&&(t+=" "),t+=i)}else for(i in n)n[i]&&(t&&(t+=" "),t+=i);return t}function w(){for(var n,e,i=0,t="",r=arguments.length;i<r;i++)(n=arguments[i])&&(e=k(n))&&(t&&(t+=" "),t+=e);return t}var j=["children","className"];function u(n,e){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),i.push.apply(i,t)}return i}function h(n){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?u(Object(i),!0).forEach(function(t){y(n,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):u(Object(i)).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(i,t))})}return n}var p=d.forwardRef(function(e,i){var t=e.children,r=e.className,s=v(e,j);return o.jsx("a",h(h({},s),{},{className:w("nl-skip-link","nl-skip-link--visible-on-focus",r),ref:i,children:t}))});p.displayName="SkipLink";var m=".nl-skip-link{align-items:center;background-color:var(--nl-skip-link-background-color,CanvasText);box-sizing:border-box;color:var(--nl-skip-link-color,LinkText);display:inline-flex;font-size:var(--nl-skip-link-font-size);justify-content:center;line-height:var(--nl-skip-link-line-height);max-inline-size:calc(100% - var(--_nl-skip-link-inset, 0)*2);min-block-size:var(--nl-skip-link-min-block-size,44px);min-inline-size:var(--nl-skip-link-min-inline-size,44px);padding-block:var(--nl-skip-link-padding-block);padding-inline:var(--nl-skip-link-padding-inline);text-decoration-thickness:max(var(--nl-skip-link-text-decoration-thickness,0px),initial);text-underline-offset:var(--nl-skip-link-text-underline-offset,initial)}.nl-skip-link--visible-on-focus{inset-block-start:-200%;position:fixed}.nl-skip-link--visible,.nl-skip-link--visible-on-focus:focus{--_nl-skip-link-inset:2px;inset-block-start:var(--_nl-skip-link-inset,0);inset-inline-start:var(--_nl-skip-link-inset,0);position:fixed}";if(typeof document<"u"){const n=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css",e.nonce=window.NONCE,n.appendChild(e),e.styleSheet?e.styleSheet.cssText=m:e.appendChild(document.createTextNode(m))}p.__docgenInfo={description:"",methods:[],displayName:"SkipLink"};const x=`<!-- @license CC0-1.0 -->

# Skip Link

[![npm version](https://img.shields.io/npm/v/@gemeente-denhaag/skip-link.svg)](https://www.npmjs.com/package/@gemeente-denhaag/skip-link)

Verborgen mogelijkheid om snel naar een ander deel van de pagina te navigeren zonder gebruik te maken van een muis of touchscreen.

Gebruik de Skip Link zodat gebruikers met een toetsenbord of hulpsoftware makkelijk contentblokken kunnen overslaan. Bijvoorbeeld navigatie die op meerdere pagina's herhaald wordt.

Ook bekend als: Skip to content en Springlink.

## References

[https://nldesignsystem.nl/skip-link](https://nldesignsystem.nl/skip-link)
`,E={component:p,tags:["autodocs"],args:{href:"#",children:"Skip to main content",style:{marginTop:"1rem",marginLeft:"1rem"}},parameters:{docs:{description:{component:x}}}},l={render:n=>(d.useEffect(()=>{window.parent.location.hash="",window.parent.history.replaceState(null,"",window.parent.location.pathname+window.parent.location.search)},[]),d.useEffect(()=>{const e=()=>{const i=window.parent.location.hash;if(!i)return;const t=i.substring(1);document.getElementById(t)?.scrollIntoView({behavior:"smooth"})};return e(),window.parent.addEventListener("hashchange",e),()=>window.parent.removeEventListener("hashchange",e)},[]),o.jsxs(o.Fragment,{children:[o.jsx("div",{style:{height:"150vh"},children:"Tab to show the Skip Link"}),o.jsx(p,{...n,href:`${window.parent.location.pathname+window.parent.location.search}#main-content`}),o.jsxs("main",{id:"main-content",children:[o.jsx("h1",{children:"Main Content"}),o.jsx("p",{children:"This is the main content area."})]})]}))},c={play:async({canvasElement:n})=>{const e=n.querySelector("a");e?.dispatchEvent(new KeyboardEvent("keydown",{key:"Tab",bubbles:!0})),e?.focus()}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    useEffect(() => {
      window.parent.location.hash = '';
      window.parent.history.replaceState(null, '', window.parent.location.pathname + window.parent.location.search);
    }, []);
    useEffect(() => {
      const scrollToHash = () => {
        const hash = window.parent.location.hash;
        if (!hash) return;
        const id = hash.substring(1); // "main-content"
        const el = document.getElementById(id);
        el?.scrollIntoView({
          behavior: 'smooth'
        });
      };

      // Bij eerste render (als de URL al een hash had)
      scrollToHash();

      // Luisteren naar hash-wijzigingen
      window.parent.addEventListener('hashchange', scrollToHash);
      return () => window.parent.removeEventListener('hashchange', scrollToHash);
    }, []);
    return <>
        <div style={{
        height: '150vh'
      }}>Tab to show the Skip Link</div>
        <SkipLink {...args} href={\`\${window.parent.location.pathname + window.parent.location.search}#main-content\`} />
        <main id="main-content">
          <h1>Main Content</h1>
          <p>This is the main content area.</p>
        </main>
      </>;
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const link = canvasElement.querySelector('a');

    // Simuleer keyboard interaction
    link?.dispatchEvent(new KeyboardEvent('keydown', {
      key: 'Tab',
      bubbles: true
    }));

    // Geef focus
    link?.focus();
  }
}`,...c.parameters?.docs?.source}}};const P=["Default","Focus"];export{l as Default,c as Focus,P as __namedExportsOrder,E as default};
