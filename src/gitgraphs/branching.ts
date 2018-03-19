import {create} from './template'

let g = create('br1');
g.branch('master');
g.commit('first').commit('second');

g = create('br2');
g.branch('master');
g.commit('first').commit('second');
let f = g.branch('feature');
f.checkout();
f.commit('feature initial');

g = create('br3');
g.branch('master');
g.commit('first').commit('second');
f = g.branch('feature');
f.checkout();
f.commit('feature initial');
f.commit('fix');
f.commit('fix');

g = create('br4');
let m = g.branch('master');
g.commit('first').commit('second');
f = g.branch('feature');
f.checkout();
f.commit('feature initial');
f.commit('fix');
f.commit('fix');
m.checkout();
m.commit('another feature');

g = create('br5');
m = g.branch('master');
g.commit('first').commit('second');
f = g.branch('feature');
f.commit('feature initial');
f.commit('fix');
f.commit('fix');
m.commit('another feature');
m.merge(f);

g = create('br6');
m = g.branch('master');
g.commit('first').commit('second');
f = g.branch('feature');
f.commit('feature initial');
f.commit('fix');
f.commit('fix');
m.commit('another feature');
m.merge(f);
f.commit('conflict fix');

g = create('br7');
m = g.branch('master');
g.commit('first').commit('second');
f = g.branch('feature');
f.commit('feature initial');
f.commit('fix');
f.commit('fix');
m.commit('another feature');
m.merge(f);
f.commit('conflict fix');
f.merge(m);