
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    s = s + t;
    let cache = {};
    let i = 0, j = 0;
    s.split('').forEach(function (char){
        if ((cache[char] && i >= t.length)) {
            cache[char]--;
        }else if(i >= t.length){
            return false;
        }else{
            cache[char] = (cache[char] || 0) + 1;
        }
        i++;
    });
    return true;
};

console.log(isAnagram('rat','tar'));
console.log(isAnagram('casa','tar'));
console.log(isAnagram('cocodrilo','lodricoco'));
console.log(isAnagram('coloridosnjh','ksahuhasdñuhds'));

    