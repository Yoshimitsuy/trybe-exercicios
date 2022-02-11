let r = false;
let s = true;
function compareTrue(r, s) {
    if (r && s === true) {
        return true;
    } else {
        return false;
    }

}
compareTrue(true, false);
console.log(compareTrue(r, s));
