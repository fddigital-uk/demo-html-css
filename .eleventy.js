module.exports = (config) => {
  config.addPassthroughCopy({ public: './' })

  config.setBrowserSyncConfig({
    files: ['dist/**/*'],
    open: true,
  })

  config.setDataDeepMerge(true)
  config.addPassthroughCopy({ 'src/static': 'static' });

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  }
}
