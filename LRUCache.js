
var Node = function(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
}

/**
 * @constructor
 */
var LRUCache = function(capacity) {
    this.data = {};
    this.capacity = capacity;
    this.begin = null;
    this.end = null;
    this.size = 0;
};

/**
 * @param {number} key
 * @returns {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.data[key]) {
        return -1;
    }

    var node = this.data[key];
    
    // if node is most recent (begin), then just return value
    if (node === this.begin) {
        return node.value;
    }
    // if node is the least recent, then make node.prev the end (least recent)
    if (node === this.end) {
        this.end = node.prev;
    } else {
        // if node is somewhere in between, take it out
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    // then set the rest of the stuff, node becomes new begin
    node.prev = null;
    node.next = this.begin;
    this.begin.prev = node;
    this.begin = node;

    return node.value;
};

/**
 * @param {number} key
 * @param {number} value
 * @returns {void}
 */
LRUCache.prototype.set = function(key, value) {
    // if key exists, overwrite, and move to beginning
    if (this.data[key]) {
        this.data[key].value = value;
        this.get(key);
    } else {
        var node = new Node(key, value);
        this.size++;

        if (!this.begin) {
            this.begin = node;
            this.end = node;
        } else {
            // add node to beginning
            node.next = this.begin;
            this.begin.prev = node;
            this.begin = node;
        }

        if (this.size > this.capacity) {
            // delete ending (least recent) node
            var newEnd = this.end.prev;
            delete this.data[this.end.key];
            this.end = newEnd;
            this.size--;
        }
        this.data[key] = node;
    }
};