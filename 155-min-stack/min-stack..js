// Time: 106 ms (beats: 50.73%) | Memory: 49.3 MB (beats: 78.98%) | 155. Min Stack

class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val) {
        this.stack.push(val);

        const min = this.minStack.at(-1) ?? Number.MAX_VALUE;
        if(val < min) {
            this.minStack.push(val);
        } else {
            this.minStack.push(min);
        }
    }

    pop() {
        this.minStack.pop();
        return this.stack.pop();
    }

    top() {
        return this.stack.at(-1);
    }

    getMin() {
        return this.minStack.at(-1);
    }
}

// /** 
//  * Your MinStack object will be instantiated and called as such:
//  * var obj = new MinStack()
//  * obj.push(val)
//  * obj.pop()
//  * var param_3 = obj.top()
//  * var param_4 = obj.getMin()
//  */