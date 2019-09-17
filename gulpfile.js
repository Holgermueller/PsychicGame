const gulp = require("gulp");
const less = require("gulp-less");
const bs = require("browser-sync").create();
const cleanCSS = require("gulp-clean-css");

gulp.task("browser-sync", () => {
  bs.init({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task("less", () => {
  gulp
    .src("./assets/**/*.less")
    .pipe(less())
    .pipe(gulp.dest("./assets"));
});

gulp.task("minify-css", () => {
  gulp
    .src("./assets/**/*.css")
    .pipe(cleanCSS())
    .pipe(gulp.dest("./assets"));
});

gulp.task("watch", () => {
  gulp.watch("./assets/**/*.less", ["less"]).on("change", bs.reload);
  gulp.watch("./assets/**/*.css", ["minify-css"]).on("change");
});

gulp.task("default", ["browser-sync", "watch"]);
