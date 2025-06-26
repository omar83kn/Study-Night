// gulpfile.js
import gulp from "gulp";
import shell from "gulp-shell";

export const parcel = shell.task("parcel index.html");
export const test   = shell.task("mocha");
export const cypress = shell.task("cypress run");

gulp.task("default", parcel);  
gulp.task("test",    test);     
gulp.task("cypress", cypress);  
