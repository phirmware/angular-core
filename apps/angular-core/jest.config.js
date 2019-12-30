module.exports = {
  name: 'angular-core',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/angular-core',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
