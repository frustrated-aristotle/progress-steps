const nodes = document.querySelectorAll(".nodes");
const nodeArrays = Array.prototype.slice.call(nodes);
const objectLibrary = [];

const button = document.querySelector("#test-button");
const nextBttn = document.querySelector("#next-button");
const prevBttn = document.querySelector("#prev-button");

let nodeIndex = 0;
function makeNodeObject(order, isReached, node)
{
    this.order = order;
    this.isReached = isReached;
    this.node = node;
}

nodeArrays.forEach(nodeObj =>{
    let index = nodeArrays.indexOf(nodeObj);
    let newObj = new makeNodeObject(index, false, nodeObj);
    objectLibrary.push(newObj);
})

button.addEventListener('click', () => {  
    objectLibrary.forEach(obj => {
        console.log(obj.order + " " + obj.isReached + "" + obj.node);
    });
})

nextBttn.addEventListener('click', () => {
    console.log(nodeIndex);
    nodeIndex++;
    objectLibrary[nodeIndex].isReached = true;
    objectLibrary[nodeIndex].node.classList.remove("node-unreached");
    objectLibrary[nodeIndex].node.classList.add("node-reached");

    // how to change class of an element?   

    //We need to change
})

