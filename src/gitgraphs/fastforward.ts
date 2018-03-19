import {create} from './template'

let g = create('ff1');
let m = g.branch('master');
g.commit('first').commit('second');
let f = g.branch('feature');
f.checkout();
f.commit('feature initial');
f.commit('fix');
f.commit('fix');

g = create('ff2');
m = g.branch('master');
g.commit('first').commit('second');
f = g.branch('feature');
f.checkout();
f.commit('feature initial');
f.commit('fix');
f.commit('fix');
f.merge(m, {fastForward: true});

g = create('ff3');
m = g.branch('master');
g.commit('first').commit('second');
f = g.branch('feature');
f.checkout();
f.commit('feature initial');
f.commit('fix');
f.commit('fix');
f.merge(m);

g = create('rbff1');
m = g.branch('master');
g.commit('first').commit('second');
f = g.branch('feature');
f.checkout();
f.commit('feature initial');
f.commit('fix');
f.commit('fix');
m.commit('third');

g = create('rbff2');
m = g.branch('master');
g.commit('first').commit('second').commit('third');
f = g.branch('feature');
f.checkout();
f.commit('squashed');

g = create('rbff3');
m = g.branch('master');
g.commit('first').commit('second').commit('third').commit('squashed');