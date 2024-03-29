module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['bug', 'enhancement', 'feat', 'fix', 'refactor', 'chore'],
    ],
    'type-case': [0],
    'type-empty': [0],
    'scope-case': [0],
    'subject-case': [0],
    'subject-empty': [0],
    'subject-full-stop': [0],
    'header-max-length': [0],
  },
};
