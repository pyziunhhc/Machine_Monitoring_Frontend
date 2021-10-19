import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  text-decoration: none;
}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
  height: 100%;
  min-height: 100vh;
  font-size: 1em;
  font-family: "Roboto", sans-serif !important;
  font-weight: 100;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

/*# sourceMappingURL=reset.css.map */

#root {
  position: relative;
  min-height: 100vh;
  background: linear-gradient(270deg, #117ec9, #04c1bc, #00b0ff);
  background-size: 600% 600%;
  overflow: hidden;
}

/*COLORS SETTINGS*/
.eroding,
.working,
.erodowanie,
.praca {
  background-color: #005214;
  color: white;
}

.grinding,
.szlifowanie {
  background-color: #00d12c;
  color: white;
}

.measuring,
.pomiar {
  background-color: #ffb133;
  color: white;
}

.robotLoading {
  background-color: #c800c8;
  color: white;
}

.manualLoading {
  background-color: #51b6d7;
  color: white;
}

.stop {
  background-color: #ffe928;
  color: black;
}

.alarm {
  background-color: red;
  color: white;
}

.disconnect {
  background-color: #919191;
  color: white;
}

.wheelReplacement {
  background-color: black;
  color: white;
}

.toolChange {
  background-color: #ceb777;
  color: white;
}

.transition {
  background-color: #ff70b7;
  color: white;
}

.warmup {
  background-color: #a85050;
  color: white;
}

.suspend {
  background-color: #911313;
  color: white;
}

.eroding,
.working,
.erodowanie {
  background-color: #005214;
  color: white;
}

.grinding,
.szlifowanie {
  background-color: #00d12c;
  color: white;
}

.measuring,
.pomiar {
  background-color: #ffb133;
  color: white;
}

.robot-loading {
  background-color: #c800c8;
  color: white;
}

.manual-loading {
  background-color: #51b6d7;
  color: white;
}

.stop {
  background-color: #ffe928;
  color: black;
}

.alarm {
  background-color: red;
  color: white;
}

.disconnect {
  background-color: #919191;
  color: white;
}

.wheelReplacement {
  background-color: black;
  color: white;
}

.toolChange {
  background-color: #ceb777;
  color: white;
}

.transition {
  background-color: #ff70b7;
  color: white;
}

.warmup {
  background-color: #a85050;
  color: white;
}

.suspend {

  background-color: #911313;
  color: white;
}
span.error{
    position: absolute;
    bottom: -20px;
  color: ${({ theme }) => theme.colors.error};
  font-weight: bold;
}
@keyframes show {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
`;
