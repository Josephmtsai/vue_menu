module.exports = {
  'vue-package-checker': {
    meta: {
      fixable: 'code',
      docs: {
        description: 'Should not using TestButton in this component',
        category: 'Possible Errors',
        recommended: false,
      },
      schema: [],
    },
    create(context) {
      return {
        ImportDeclaration(node) {
          const comments = context.getAllComments();
          context.report({
            node,
            message: node.source.value,
          });
          if (comments.findIndex((comment) => comment.value.includes('eslint-disable-package: testbutton')) !== -1) {
            if (node.source.value.includes('TestButton')) {
              context.report({
                node,
                message: 'Should not using pinia in this component',
              });
            }
          }
        },
      };
    },
  },
};
