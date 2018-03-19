import {create} from './template'

let g = create('br-fail');
let m = g.branch('master');
g.commit('first').commit('second');

let f1 = g.branch('feature 1');
m.checkout();
let f2 = g.branch('feature 2');
m.checkout();
let f3 = g.branch('feature 3');

f1.commit('feature 1');
f2.commit('feature 2');
f3.commit('feature 3');
f1.commit('fix');
f2.commit('fix');
f3.commit('fix');

f2.merge(m);
m.merge(f1);
m.merge(f3);

f3.commit('conflict fix');
f1.commit('conflict fix');

f3.merge(m);
m.merge(f1);
f1.commit('conflict fix');

f1.merge(m);