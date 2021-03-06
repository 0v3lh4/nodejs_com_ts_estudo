const gulp = require('gulp')
const { spawn } = require('child_process')

gulp.task('lint', (cb) => {
  process.stdout.write('\u001B[2J\u001B[0;0f')
  const cmd = spawn('yarn', ['lint'], { stdio: 'inherit', shell: true })
  cmd.on('close', () => cb())
})

gulp.task('default', ['lint'], () => {
  gulp.watch('src/**/*.ts', ['lint'])
  gulp.watch('__tests__/**/*.ts', ['lint'])
})
