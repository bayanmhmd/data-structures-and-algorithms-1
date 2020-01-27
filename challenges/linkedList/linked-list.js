'use strict';
const Node = require('./node.js');
class LinkedList {
    constructor(){
        this.head=null;
    }
    insert (value){
        let node =new Node(value);
        if(!this.head){
            this.head= node;
        }
        let currentNode =this.head;
        while(currentNode.next){
            currentNode=currentNode.next
        }
        currentNode.next=node;
        return this;
    }
    includes(value){
        let node =new Node (value);
        if(!this.head){
            this.head= node;
        }
        let currentNode =this.head;
        while(currentNode){
            if(currentNode.value === value){
                currentNode = currentNode.next;
                return true;
            }
            return false;
        }


    }
}
module.exports=LinkedList