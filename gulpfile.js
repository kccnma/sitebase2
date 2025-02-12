const gulp = require("gulp");
const { parallel, series } = require("gulp");

const htmlmin = require("gulp-htmlmin");
const sass = require('gulp-sass')(require('sass'));
const uglify = require("gulp-uglify");
const imagemin = require("gulp-imagemin");
const concat = require("gulp-concat");
const browserSync = require("browser-sync").create(); //https://browsersync.io/docs/gulp
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const rename = require("gulp-rename");
const zip = require('gulp-zip');

// /*
// TOP LEVEL FUNCTIONS
//     gulp.task = Define tasks
//     gulp.src = Point to files to use
//     gulp.dest = Points to the folder to output
//     gulp.watch = Watch files and folders for changes
// */


// HTML
function html(cb) {
  gulp.src("src/**/*.html")
    .pipe(gulp.dest("dist"))
    .pipe(
      htmlmin({
        collapseWhitespace: false
      })
    )
    .pipe(gulp.dest("dist"));
  cb();
}

// SCSS
function css(cb) {
  gulp.src("src/scss/**/*.scss")
    .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
    .pipe(autoprefixer({
      browserlist: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest("dist/css"))
    // Stream changes to all browsers
    .pipe(browserSync.stream());
  cb();
}

// JS
function js(cb) {
  gulp.src("src/js/**/*js")
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(concat("script.js"))
    // .pipe(uglify())  // TO MINIMIZE
    .pipe(gulp.dest("dist/js"));
  cb();
}

// IMAGES
function imageMin(cb) {
  gulp.src("src/img/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/img"));
  cb();
}

// WATCH
function watch_files() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("index.html", html).on("change", browserSync.reload);
  gulp.watch("src/*.html", html).on("change", browserSync.reload);
  gulp.watch("docs/*.html", html).on("change", browserSync.reload);
  gulp.watch("src/scss/**/*.scss", css);
  gulp.watch("src/js/*.js", js).on("change", browserSync.reload);
  gulp.watch("src/**/*.+(png|jpg|jpeg|gif|svg)", imageMin).on("change", browserSync.reload);
}

// Default 'gulp' command with start local server and watch files for changes.
exports.default = series(html, css, js, imageMin, watch_files);

//
//
// ******* END STANDARD SiteBase GULP CONFIG *******
//
//






// *****************************************
// *****************************************
//
// ********** BEGIN BUILD DOCS *************
//
// *****************************************
// *****************************************


// COPY HTML FROM ROOT SRC
function copyhtmlroot(cb) {
  gulp.src("src/**/*.html")
    .pipe(gulp.dest("docs/variations/sitebase2-static/"))
    .pipe(gulp.dest("docs/variations/sitebase2-scss/"));
  cb();
}

// COPY SASS FROM ROOT SRC
function copysassroot(cb) {
  gulp.src("src/**/*.scss")
    .pipe(gulp.dest("docs/"))
    .pipe(gulp.dest("docs/variations/sitebase2-scss/"));
  cb();
}

// COPY JS FROM ROOT SRC
function copyjsroot(cb) {
  gulp.src("src/**/*.js")
    .pipe(gulp.dest("docs/"))
    .pipe(gulp.dest("docs/variations/sitebase2-static/"))
    .pipe(gulp.dest("docs/variations/sitebase2-scss/"))
    .pipe(gulp.dest("docs/examples/productsite/"))
    // .pipe(gulp.dest("docs/examples/sitename-singlepagesite/"))
    .pipe(gulp.dest("docs/examples/singlepageportfolio/"));
  cb();
}

// COPY IMAGES FROM ROOT SRC
function copyimagesroot(cb) {
  gulp.src("src/**/*.+(png|jpg|jpeg|gif|svg)")
    .pipe(gulp.dest("docs/"))
    .pipe(gulp.dest("docs/variations/sitebase2-static/"))
    .pipe(gulp.dest("docs/variations/sitebase2-scss/"))
    .pipe(gulp.dest("docs/examples/productsite/"))
    .pipe(gulp.dest("docs/examples/sitename-singlepagesite/"))
    .pipe(gulp.dest("docs/examples/singlepageportfolio/"));
  cb();
}

// SASS ROOT
const sassOptions = {
  outputStyle: "expanded"
};
function sassroot(cb) {
  gulp.src("src/scss/**/*.scss")
    .pipe(sass(sassOptions))
    .pipe(gulp.dest("docs/css/"))
    .pipe(gulp.dest("docs/variations/sitebase2-static/css/"))
    .pipe(gulp.dest("docs/variations/sitebase2-scss/css/"))
    .pipe(gulp.dest("docs/examples/productsite/css/"))
    .pipe(gulp.dest("docs/examples/sitename-singlepagesite/css/"))
    .pipe(gulp.dest("docs/examples/singlepageportfolio/css/"));
  cb();
}
// SASS LESSON1
// function loremipsum(cb) {
//   gulp.src("src/lorem/**/*.scss")
//     .pipe(gulp.dest("docs/"))
//     .pipe(gulp.dest("docs/"));
//   cb();
// }

// SASS LESSON1
function sasslesson1(cb) {
  gulp.src("docs/lessons/base-boilerplate.scss")
    .pipe(sass(sassOptions))
    .pipe(rename("css/style.css"))
    .pipe(gulp.dest("docs/lessons/base-boilerplate/"));
  cb();
}

// SASS LESSON2
function sasslesson2(cb) {
  gulp.src("docs/lessons/base-globals.scss")
    .pipe(sass(sassOptions))
    .pipe(rename("css/style.css"))
    .pipe(gulp.dest("docs/lessons/base-globals/"));
  cb();
}

// SASS LESSON3
function sasslesson3(cb) {
  gulp.src("docs/lessons/base-content.scss")
    .pipe(sass(sassOptions))
    .pipe(rename("css/style.css"))
    .pipe(gulp.dest("docs/lessons/base-content/"));
  cb();
}

// SASS LESSON4
function sasslesson4(cb) {
  gulp.src("docs/lessons/base-layout.scss")
    .pipe(sass(sassOptions))
    .pipe(rename("css/style.css"))
    .pipe(gulp.dest("docs/lessons/base-layout/"));
  cb();
}

// SASS LESSON5
function sasslesson5(cb) {
  gulp.src("docs/lessons/base-site-structure.scss")
    .pipe(sass(sassOptions))
    .pipe(rename("css/style.css"))
    .pipe(gulp.dest("docs/lessons/base-site-structure/"));
  cb();
}

// SASS LESSON6
function sasslesson6(cb) {
  gulp.src("docs/lessons/base-site-togglenav.scss")
    .pipe(sass(sassOptions))
    .pipe(rename("css/style.css"))
    .pipe(gulp.dest("docs/lessons/base-site-togglenav/"));
  cb();
}

// SASS LESSON7
function sasslesson7(cb) {
  gulp.src("docs/lessons/base-site-subpages.scss")
    .pipe(sass(sassOptions))
    .pipe(rename("css/style.css"))
    .pipe(gulp.dest("docs/lessons/base-site-subpages/"));
  cb();
}


// ZIP LESSON1
function ziplesson1(cb) {
  gulp.src("docs/lessons/base-boilerplate/**/*")
    .pipe(zip("base-boilerplate.zip"))
    .pipe(gulp.dest("docs/lessons/"));
  cb();
}

// ZIP LESSON2
function ziplesson2(cb) {
  gulp.src("docs/lessons/base-globals/**/*")
    .pipe(zip("base-globals.zip"))
    .pipe(gulp.dest("docs/lessons/"));
  cb();
}

// ZIP LESSON3
function ziplesson3(cb) {
  gulp.src("docs/lessons/base-content/**/*")
    .pipe(zip("base-content.zip"))
    .pipe(gulp.dest("docs/lessons/"));
  cb();
}

// ZIP LESSON4
function ziplesson4(cb) {
  gulp.src("docs/lessons/base-layout/**/*")
    .pipe(zip("base-layout.zip"))
    .pipe(gulp.dest("docs/lessons/"));
  cb();
}

// ZIP LESSON5
function ziplesson5(cb) {
  gulp.src("docs/lessons/base-site-structure/**/*")
    .pipe(zip("base-site-structure.zip"))
    .pipe(gulp.dest("docs/lessons/"));
  cb();
}

// ZIP LESSON6
function ziplesson6(cb) {
  gulp.src("docs/lessons/base-site-togglenav/**/*")
    .pipe(zip("base-site-togglenav.zip"))
    .pipe(gulp.dest("docs/lessons/"));
  cb();
}

// ZIP LESSON7
function ziplesson7(cb) {
  gulp.src("docs/lessons/base-site-subpages/**/*")
    .pipe(zip("base-site-subpages.zip"))
    .pipe(gulp.dest("docs/lessons/"));
  cb();
}

// ZIP VERSION1
function zipvariation1(cb) {
  gulp.src("docs/variations/sitebase2-static/**/*")
    .pipe(zip("sitebase2-static.zip"))
    .pipe(gulp.dest("docs/variations/"));
  cb();
}

// ZIP VARIATION2
function zipvariation2(cb) {
  gulp.src("docs/variations/sitebase2-scss/**/*")
    .pipe(zip("sitebase2-scss.zip"))
    .pipe(gulp.dest("docs/variations/"));
  cb();
}

// ZIP EXAMPLE1
function zipexample1(cb) {
  gulp.src("docs/examples/productsite/**/*")
    .pipe(zip("productsite.zip"))
    .pipe(gulp.dest("docs/examples/"));
  cb();
}

// ZIP EXAMPLE2
function zipexample2(cb) {
  gulp.src("docs/examples/singlepageportfolio/**/*")
    .pipe(zip("singlepageportfolio.zip"))
    .pipe(gulp.dest("docs/examples/"));
  cb();
}

// ZIP EXAMPLE3
function zipexample3(cb) {
  gulp.src("docs/examples/sitename-singlepagesite/**/*")
    .pipe(zip("sitename-singlepagesite.zip"))
    .pipe(gulp.dest("docs/examples/"));
  cb();
}

// WATCH DOCS
const doc_series = [html, css, js, imageMin, copyhtmlroot, copysassroot, copyjsroot, copyimagesroot, sassroot, sasslesson1, sasslesson2, sasslesson3, sasslesson4, sasslesson5, sasslesson6, sasslesson7, ziplesson1, ziplesson2, ziplesson3, ziplesson4, ziplesson5, ziplesson6, ziplesson7, zipvariation1, zipvariation2, zipexample1, zipexample2, zipexample3];

function watch_docs() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("src/*.html", series(doc_series)).on("change", browserSync.reload);
  gulp.watch("src/scss/**/*.scss", series(doc_series));
  gulp.watch("src/js/*.js", series(doc_series)).on("change", browserSync.reload);
  gulp.watch("src/**/*.+(png|jpg|jpeg|gif|svg)", series(doc_series)).on("change", browserSync.reload);
  gulp.watch("docs/*.html", series(doc_series)).on("change", browserSync.reload);
}

// 'gulp docs' will build all assets but not run on a local server.
exports.docs = series(doc_series, watch_docs);

// 'gulp build' will build all assets but not run on a local server.
exports.build = parallel(doc_series);

//
// END BUILD DOCS
//

