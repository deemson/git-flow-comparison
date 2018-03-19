import {create} from './template'

let g = create('rb-bas1');
g.branch('master');
g.commit('m 1').commit('m 2').commit('m 3');
let e = g.branch('experiment');
e.checkout();
g.commit('e 1').commit('e 2');
let f = g.branch('feature');
f.checkout();
g.commit('f 1').commit('f 2').commit('f 3');

g = create('rb-bas2');
let m = g.branch('master');
g.commit('m 1').commit('m 2').commit('m 3');
e = g.branch('experiment');
e.checkout();
g.commit('e 1').commit('e 2');

g = create('rb-bas3');
m = g.branch('master');
g.commit('m 1').commit('m 2').commit('m 3');
e = g.branch('experiment');
e.checkout();
g.commit('e 1').commit('e 2');
m.checkout();
f = g.branch('feature');
f.checkout();
g.commit('f 1');

g = create('rb-bas4');
m = g.branch('master');
g.commit('m 1').commit('m 2').commit('m 3');
e = g.branch('experiment');
e.checkout();
g.commit('e 1').commit('e 2');
m.checkout();
f = g.branch('feature');
f.checkout();
g.commit('f 1').commit('f 2');

g = create('rb-bas5');
m = g.branch('master');
g.commit('m 1').commit('m 2').commit('m 3');
e = g.branch('experiment');
e.checkout();
g.commit('e 1').commit('e 2');
m.checkout();
f = g.branch('feature');
f.checkout();
g.commit('f 1').commit('f 2').commit('f 3');

g = create('rb-w1');
m = g.branch('master');
g.commit('m 1').commit('m 2').commit('m 3');
f = g.branch('feature');
f.checkout();
g.commit('f 1').commit('f 2').commit('f 3');
e = g.branch('experiment');
e.checkout();
g.commit('e 1').commit('e 2');

g = create('rb-w2');
m = g.branch('master');
g.commit('m 1').commit('m 2').commit('m 3');
e = g.branch('experiment');
e.checkout();
g.commit('f 1').commit('f 2').commit('f 3');
g.commit('e 1').commit('e 2');
m.checkout();
f = g.branch('feature');
f.checkout();
g.commit('f 1').commit('f 2').commit('f 3');

// CONFLICTS

g = create('rb-con1');
m = g.branch('master');
g.commit('m 1').commit('m 2');
f = g.branch('feature');
f.checkout();
g.commit('f 1').commit({message: 'conflict f2', color: '#689d6a'}).commit('f 3');
m.commit('m 3');

g = create('rb-con2');
m = g.branch('master');
g.commit('m 1').commit('m 2').commit('m 3');
f = g.branch('feature');
f.checkout();
g.commit('f 1');

g = create('rb-con3');
m = g.branch('master');
g.commit('m 1').commit('m 2').commit('m 3');
f = g.branch('feature');
f.checkout();
g.commit('f 1').commit({message: 'conflict f2', color: '#689d6a'});

g = create('rb-con4');
m = g.branch('master');
g.commit('m 1').commit('m 2').commit('m 3');
f = g.branch('feature');
f.checkout();
g.commit('f 1').commit('conflict f 2');

g = create('rb-con5');
m = g.branch('master');
g.commit('m 1').commit('m 2').commit('m 3');
f = g.branch('feature');
f.checkout();
g.commit('f 1').commit('conflict f 2').commit('f 3');