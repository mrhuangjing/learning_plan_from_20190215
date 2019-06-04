const treeData = {
    root: ['foo', 'bar', 'baz'],
    bar: ['bar1', 'bar2', 'bar3'],
    baz: ['baz0', 'baz1', 'baz2'],
    foo: ['foo0', 'foo1', 'foo2'],
    baz1: ['baz10', 'baz11'],
  }
  
  function traverse(data, nodeName) {
    // Implement this function to traverse a tree
    // Design the arguments yourself
    data[nodeName].forEach(function(el) {
        console.log(el);
        if (data[el]) {
            traverse(data, el);
        }
    });
  }
  
  function printTree(data) {
    // Implement this function to print a tree
    // Use traverse()
    // For example
    // traverse(() => {  
    //   console.log();
    // }, data);
    console.log('root');
    traverse(data, 'root');
  }
  
  /**
   * should print
   *
   * root
   *   foo
   *     foo0
   *     foo1
   *     foo2
   *   bar
   *     bar1
   *     bar2
   *     bar3
   *   baz
   *     baz0
   *     baz1
   *       baz10
   *       baz11
   *     baz2
   */
  printTree(treeData);