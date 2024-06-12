const project = (() => {
  try {
    const { configureProjects } = require('react-native-test-app');
    return configureProjects({
      android: {
        sourceDir: 'android',
      },
      ios: {
        sourceDir: 'ios',
      },
      windows: {
        sourceDir: 'windows',
        solutionFile:
          'windows/# OR: npx init-test-app# ✔ What is the name of your test app? … WebviewExample# ✔ Which platforms do you need test apps for? › Android, iOS, macOS, Windows# ✔ Where should we create the new project? … example.sln',
      },
    });
  } catch (_) {
    return undefined;
  }
})();

module.exports = {
  ...(project ? { project } : undefined),
};
