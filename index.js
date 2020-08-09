"use strict";

module.exports = (filePath) => {
  // parent module
  if (require.cache[filePath] && require.cache[filePath].parent) {
    let i = require.cache[filePath].parent.children.length;

    while (i--) {
      if (require.cache[filePath].parent.children[i].id === filePath) {
        require.cache[filePath].parent.children.splice(i, 1);
      }
    }
  }

  // cache module
  delete require.cache[filePath];
};
