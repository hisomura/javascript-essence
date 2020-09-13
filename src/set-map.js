const map = new Map();

const key1 = {};
map.set(key1, 'value1')
console.log(map.get(key1))

const key2 = () => {}
map.set(key2, 'value2')
console.log(map.get(key2))

console.log(map)
for (const m of map) {
  console.log(m)
}

// keyは列挙されない
for (const key in map) {
  console.log(key)
}

const s = new Set();
s.add(key1)
s.add(key2)

console.log(s.has(key1))
console.log(s)
console.log([...s])

for (const key of s) {
  console.log(key)
}
