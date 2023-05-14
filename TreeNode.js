class TreeNode{
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function checkTheSum(root){
    if(!root) return false;

    let sum=0;
    if(root.left){
        sum += root.left.val;
    }
    if(root.right){
        sum += root.right.val;
    }

    return root.val === sum;
}

let root = new TreeNode(10);
root.left = new TreeNode(-5);
root.right = new TreeNode(15);

let res = checkTheSum(root);
console.log(res);   

// console.log(root)