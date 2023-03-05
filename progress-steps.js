const nodes = document.querySelectorAll(".node");
const nodeArrays = Array.prototype.slice.call(nodes);

const progressBars = document.querySelectorAll(".progress-bar");
const progressBarsArrays = Array.prototype.slice.call(progressBars);

const objectLibrary = [];

//const button = document.querySelector("#test-button");
const nextBttn = document.querySelector("#next-button");
const prevBttn = document.querySelector("#prev-button");

let nodeIndex = 0;
let barIndex = 0;
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


objectLibrary[0].node.classList.remove("node");
objectLibrary[0].node.classList.add("node-reached");
objectLibrary[0].node.id="a";

nextBttn.addEventListener('click', () => {

    NodeProgression();
    BarProgression();
})

function NodeProgression()
{
    if (nodeIndex < 3) {
        nodeIndex++;
        if (nodeIndex > 0) {
            prevBttn.disabled = false;
        }
    }
    else if (nodeIndex === 3)
    {
        nextBttn.disabled = true;
        prevBttn.disabled = false;
    }
    else if (nodeIndex > 0)
    {
        prevBttn.disabled = false;
    }
    objectLibrary[nodeIndex].node.classList.add("node-reached");
    objectLibrary[nodeIndex].node.classList.remove("node");
    objectLibrary[nodeIndex].node.id="now";
}

function BarProgression()
{
    progressBarsArrays[barIndex].classList.remove("progress-bar");
    progressBarsArrays[barIndex].classList.add("progress-bar-reached");
    if(barIndex < 3)
    {
        barIndex++;
    }
    console.log("Index: " + barIndex);
}

//*******************************************************************
prevBttn.addEventListener('click', () => {
    NodePrevProgression();
    BarPrevProgression();
})

function NodePrevProgression()
{
    objectLibrary[nodeIndex].node.classList.remove("node-reached");
    objectLibrary[nodeIndex].node.classList.add("node");

    if (nodeIndex > 0)
        nodeIndex--;

    if (nodeIndex === 0)
        prevBttn.disabled = true;
    else if (nodeIndex < 4)
        nextBttn.disabled = false;
}

function BarPrevProgression()
{

    progressBarsArrays[nodeIndex].classList.remove("progress-bar-reached");
    progressBarsArrays[nodeIndex].classList.add("progress-bar");
    if(barIndex > 0)
    {
        barIndex--;
    }
    console.log("Index: " + barIndex );

}
