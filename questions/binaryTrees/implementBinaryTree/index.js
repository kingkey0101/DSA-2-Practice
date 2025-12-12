class Node{
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}

const a = new Node('A')
const b = new Node('B')
const c = new Node('C')
const d = new Node('D')
const e = new Node('E')
const f = new Node('F')

// a and b connected
a.left = b
// a and c connected
a.right = c
// b adn d connected
b.left = d
// b adn e connected
b.right = e
// c and f connected
c.left = f

// to access just the values and not the entire node add .val;
console.log(a.val)