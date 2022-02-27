var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    s = s + t;
    let cache = {};
    for (let i = 0; i <= s.length-1; i++){ 

        if(i > t.length-1){
    
            if (cache[s[i]]) {
                cache[s[i]]--;
    
            }else{
                return false;
            }
        }else{
            cache[s[i]] = (cache[s[i]] || 0) + 1;
            console.log('--INTO-else--');
        }
        console.log(cache);
    }

    return true;
        
};

console.log(isAnagram('rat','car')); //false
console.log(isAnagram('casa','tara')); //false
console.log(isAnagram('cocodrilo','lodricoco')); //true
console.log(isAnagram('coloridosnjh','ksahuhasdñuhds')); //false