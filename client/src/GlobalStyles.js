import { createGlobalStyle } from "styled-components/macro";

export default createGlobalStyle`
    
    :root {
        --white: #FFFFFF;
        --font-sm: 16px;
        --font-med: 28px;
        --font-lg: 32px;
        --body-font-family: ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono','Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro','Fira Mono', 'Droid Sans Mono', 'Courier New', monospace;
        --gap-sm: 10px;
        --gap-md: 16px;
        --gap-lg: 24px;
        --gap-xl: 36px;
        --green: #64ffda;
        --grey: #8892b0;
        --blue: #03001C;
        --green-tint: rgba(100,255,218,0.1);
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
        box-sizing: border-box;
        background-color: var(--blue);
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    h1, h2, h3 {
        color: var(--white);
        font-family: var(--body-font-family);
        font-size: clamp(40px, 8vw, 80px)
    }
    p, a, li {
        color: var(--grey);
        font-family: var(--body-font-family);
        font-size: var(--font-sm);
        line-height: 1.5;
    }
    button {
        width: 15em;
        height: 4em;
        background-color: var(--blue);
        border: 1px solid var(--green);
        font-family: var(--body-font-family);
        font-size: 16px;
        color: var(--green);
        transition: .3s;
        &:hover {
            background-color: var(--green-tint);
            cursor: pointer;
        }
    }
`;
