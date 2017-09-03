/// <binding BeforeBuild='clean' AfterBuild='min, copy' Clean='clean' />
"use strict";

var gulp = require("gulp"),   
    gutil = require("gulp-util"),
    rimraf = require("rimraf"),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    uglify = require("gulp-uglify");
    
var paths = {
    webroot: "./wwwroot/"
};

paths.js = "./scripts/**/*.js";
paths.css = "./styles/**/*.css";
paths.html = "./**/*.html";
paths.minJs = paths.webroot + "js/**/*.min.js";
paths.minCss = paths.webroot + "css/**/*.min.css";
paths.concatJsDest = paths.webroot + "js/app.min.js";
paths.HtmlDest = paths.webroot + "**/*.html";
paths.concatCssDest = paths.webroot + "css/app.min.css";

gulp.task("clean:html", function (cb) {
    rimraf(paths.HtmlDest, cb);
});

gulp.task("clean:js", function (cb) {
    rimraf(paths.concatJsDest, cb);
});

gulp.task("clean:css", function (cb) {
    rimraf(paths.concatCssDest, cb);
});

gulp.task("clean", ["clean:js", "clean:css", "clean:html"]);

gulp.task("min:js", function () {
    return gulp.src([paths.js], { base: "." })
        .pipe(concat(paths.concatJsDest))
        .pipe(uglify().on('error', function (err) {
            gutil.log(gutil.colors.red('[Error]'), err.toString());
            this.emit('end');
        }))
        .pipe(gulp.dest("."));
});

gulp.task("min:css", function () {
    return gulp.src([paths.css])
        .pipe(concat(paths.concatCssDest))
        .pipe(cssmin())
        .pipe(gulp.dest("."));
});

gulp.task("copy:html", function () {
    return gulp.src([paths.html])              
        .pipe(gulp.dest(paths.webroot));
});

gulp.task("min", ["min:js", "min:css"]);
gulp.task("copy", ["copy:html"]);