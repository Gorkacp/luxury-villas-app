const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');

// Ruta de los archivos
const paths = {
  styles: {
    src: 'src/assets/styles/**/*.scss',
    dest: 'dist/css'
  },
  scripts: {
    src: 'src/js/**/*.js',
    dest: 'dist/js'
  },
  html: {
    src: 'src/index.html', // Ruta al archivo index.html
    dest: 'dist' // Carpeta destino
  },
  assets: {
    src: 'src/assets/**/*', // Ruta a todos los archivos en assets
    dest: 'dist/assets' // Carpeta destino para assets
  },
  css: {
    src: 'src/assets/styles/**/*.css', // Actualiza esta ruta si es necesario
    dest: 'dist/css'
  }
};

// Tarea para compilar Sass
function styles() {
  return gulp.src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.styles.dest));
}

// Tarea para copiar archivos CSS
function copyCss() {
  return gulp.src(paths.css.src)
    .pipe(gulp.dest(paths.css.dest));
}

// Tarea para minificar y concatenar JavaScript
function scripts() {
  return gulp.src(paths.scripts.src)
    .pipe(sourcemaps.init())
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.scripts.dest));
}

// Tarea para copiar el archivo index.html
function copyHtml() {
  return gulp.src(paths.html.src)
    .pipe(gulp.dest(paths.html.dest));
}

// Tarea para copiar los archivos de assets
function copyAssets() {
  return gulp.src(paths.assets.src)
    .pipe(gulp.dest(paths.assets.dest));
}

// Tarea para observar cambios en los archivos
function watch() {
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.css.src, copyCss);
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(paths.html.src, copyHtml);
  gulp.watch(paths.assets.src, copyAssets);
}

// Tarea por defecto
const build = gulp.series(
  gulp.parallel(styles, copyCss, scripts, copyHtml, copyAssets), // Ejecutar styles, copyCss, scripts, copyHtml y copyAssets
  watch
);

exports.styles = styles;
exports.copyCss = copyCss;
exports.scripts = scripts;
exports.copyHtml = copyHtml;
exports.copyAssets = copyAssets;
exports.watch = watch;
exports.build = build;
exports.default = build;