import {create} from './template'

let g = create('rb1');
g.branch('master');
g.commit('first').commit('second');

g = create('rb2');
g.branch('master');
g.commit('first').commit('second');
let f = g.branch('feature');
f.checkout();
f.commit('feature initial');

g = create('rb3');
g.branch('master');
g.commit('first').commit('second');
f = g.branch('feature');
f.checkout();
f.commit('feature initial');
f.commit('fix');
f.commit('fix');

g = create('rb4');
let m = g.branch('master');
g.commit('first').commit('second');
f = g.branch('feature');
f.checkout();
f.commit('feature initial');
f.commit('fix');
f.commit('fix');
m.checkout();
m.commit('another feature');

g = create('rb5');
m = g.branch('master');
g.commit('first').commit('second');
m.commit('another feature');
f = g.branch('feature');
f.commit('feature initial');
f.commit('fix');
f.commit('fix');

g = create('rb6');
m = g.branch('master');
g.commit('first').commit('second');
m.commit('another feature');
f = g.branch('feature');
f.commit('feature mega-commit');

g = create('rb7');
m = g.branch('master');
g.commit('first').commit('second');
m.commit('another feature');
m.commit('feature mega-commit');



g = create('rb21');
g.branch('master');
g.commit('first').commit('second');

g = create('rb22');
g.branch('master');
g.commit('first').commit('second');
f = g.branch('feature');
f.checkout();
f.commit('feature initial');

g = create('rb23');
g.branch('master');
g.commit('first').commit('second');
f = g.branch('feature');
f.checkout();
f.commit('feature initial');
f.commit('fix');
f.commit('fix');

g = create('rb24');
m = g.branch('master');
g.commit('first').commit('second');
f = g.branch('feature');
f.checkout();
f.commit('feature initial');
f.commit('fix');
f.commit('fix');
m.checkout();
m.commit('another feature');

g = create('rb25');
m = g.branch('master');
g.commit('first').commit('second');
m.commit('another feature');
f = g.branch('feature');
f.commit('feature initial');
f.commit('fix');
f.commit('fix');

g = create('rb26');
m = g.branch('master');
g.commit('first').commit('second');
m.commit('another feature');
f = g.branch('feature');
f.commit('feature mega-commit');

g = create('rb27');
m = g.branch('master');
g.commit('first').commit('second');
m.commit('another feature');
m.commit('feature mega-commit');