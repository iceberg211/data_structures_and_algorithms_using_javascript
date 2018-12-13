function Node(element) {
   this.element = element;
   this.next = null;
   this.previous = null;
}

function LList() {
   this.head = new Node("head");
   this.find = find;
   this.insert = insert;
   this.display = display;
   this.remove = remove;
   this.findLast = findLast;
   this.dispReverse = dispReverse;
   //当前节点就是头节点
   this.currentNode = this.head;
   //从链表开头向前移动n个节点
   this.advance = advance;
   //从链表某个节点向后回退n个节点
   this.back = back;
   //显示当前节点
   this.show = show;
}

// 从最后一个节点向前遍历递归
function dispReverse() {
   var currNode = this.head;
   currNode = this.findLast();
   while (!(currNode.previous == null)) {
      console.log(currNode.element);
      currNode = currNode.previous;
   }
}

function findLast() {
   var currNode = this.head;
   while (!(currNode.next == null)) {
      currNode = currNode.next;
   }
   return currNode;
}

function remove(item) {
   var currNode = this.find(item);
   if (!(currNode.next == null)) {
      currNode.previous.next = currNode.next;
      currNode.next.previous = currNode.previous;
      currNode.next = null;
      currNode.previous = null;
   }
}

function display() {
   var currNode = this.head;
   while (!(currNode.next == null)) {
      console.log(currNode.next.element);
      currNode = currNode.next;
   }
}

function find(item) {
   var currNode = this.head;
   while (currNode.element != item) {
      currNode = currNode.next;
   }
   return currNode;
}


/**
 * 向双向列表中增加一个元素
 * @param {*} 新元素
 * @param {*} item 插入未知
 */
function insert(newElement, item) {
   var newNode = new Node(newElement);
   var current = find(item);
   newNode.next = current.next;
   newNode.previous = current;
   current.next = newNode;
}

//在链表中向前移动n个节点
function advance(n) {
   while ((n > 0) && !(this.currentNode.next == null)) {
      this.currentNode = this.currentNode.next;
      n--
   }
}

//在链表中向后移动n个节点
function back(n) {
   while (n > 0 && !(this.currentNode.element == 'head')) {
      this.currentNode = this.currentNode.previous;
      n--;
   }
}

function show() {
   document.write(this.currentNode.element);
}


var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.display();
console.log();
cities.remove("Carlisle");
cities.display();
console.log();
cities.dispReverse();
