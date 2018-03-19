import {create} from './template'

let g = create('reset1');
g.branch('master');
g.commit('file1').commit('file2').commit('file3');

g = create('reset2');
g.branch('master');
g.commit('file1');

g = create('reset3');
g.branch('master');
g.commit('m 1').commit('m 2').commit('m 3');
let f = g.branch('feature');
f.commit('f 1');
f.commit('f 2');

g = create('reset4');
g.branch('master');
g.commit('m 1').commit('m 2').commit('m 3');

g = create('reset5');
g.branch('master');
g.commit('m 1').commit('m 2').commit('m 3');
let f1 = g.branch('feature1');
f1.commit('f1 1');
f1.commit('f1 2');
let f2 = g.branch('feature2');
f2.commit('f2 1');
f2.commit('f2 2');

g = create('reset6');
let m = g.branch('master');
g.commit('m 1').commit('m 2').commit('m 3');
f1 = g.branch('feature1');
m.checkout();
f2 = g.branch('feature2');
f2.commit('f1 1');
f2.commit('f1 2');
f2.commit('f2 1');
f2.commit('f2 2');