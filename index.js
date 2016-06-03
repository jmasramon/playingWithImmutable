/* jshint esversion:6 */

import { List, Map, Seq, fromJS, Range } from "immutable";

const list = List.of(1,2,3);
const list2 = list.push(4);

console.log('list:', list);
console.log('list2:', list2);
console.log(list2 === list);
console.log('list:', list);

const list3 = list2.unshift(0);
console.log('list3:', list3);

const list4 = list.concat(list2,list3);
console.log('list4:', list4);

const map1 = Map({a:1, b:2, c:3});
console.log('map1:', map1);

const map2 = map1.set('b', 50);
console.log('map2:', map2);
console.log(map2 === map1);
console.log('map1:', map1);

console.log('b 1:', map1.get('b'));
console.log('b 2:', map2.get('b'));

console.log('equal?', map1.equals(map2));

const map3 = map1.set('b', 50);
const map4 = map3.set('b', 2);
console.log('equal?', map1.equals(map4));
console.log('same?', map4 === map1);

console.log(map4.map((v,k) => k.toUpperCase()).join());

const seq = Seq({a:1,b:2,c:3});
console.log(seq.map(x => x*x)); 
console.log(seq.map(x => x*x).toObject()); 

const nested = fromJS({a:{b:{c:[3,4,5]}}});
console.log('nested:', JSON.stringify(nested, null, 2));

const nested2 = nested.mergeDeep({a:{b:{d: 6}}});
console.log('nested2:', nested2);
console.log('nested2:', nested2.getIn(['a','b','d']));

const nested3 = nested2.updateIn(['a','b','c'], list => list.push(22));
console.log('nested3:', nested3);

const oddSquares = Seq.of(1,2,3,4,5,6,7,8).filter(x=>x%2).map(x=>x*x);
console.log('oddSquares(1)', oddSquares.get(1));

console.log(
	Range(1, Infinity)
	.skip(1000)
    .map(x=>-x)  
    .filter(x => x % 2 === 0)
    .take(2)
    .reduce((r,x) => r*x, 1)
	);