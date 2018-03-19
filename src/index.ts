import './index.pug'
import * as Reveal from 'reveal.js'
import 'reveal.js/css/reveal.css'
import 'reveal.js/css/theme/black.css'
import * as hljs from 'highlight.js'
import 'highlight.js/styles/gruvbox-dark.css'
import 'gitgraph.js'


Reveal.initialize({
    slideNumber: 'c/t',
    overview: true
});
hljs.initHighlightingOnLoad();

import './gitgraphs/branching'
import './gitgraphs/branching-fail'
import './gitgraphs/rebasing'
import './gitgraphs/reset'
import './gitgraphs/rebase-basics'
import './gitgraphs/fastforward'