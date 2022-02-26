
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

/*
console.log('BEGIN i; ', i, ' t: ', t.length);
        
        if(i > t.length-1){
            
            console.log('--INTO-if-- cache:', cache[char], ' char: ', char);
            if (cache[char]) {
                cache[char]--;
                console.log('--INTO--');
            }else{
                console.log('--INTO-false--');
                return false;
            }
        }else{
            console.log('--INTO-else--');
            cache[char] = (cache[char] || 0) + 1;
        }
        i++;
        console.log(cache);
    
*/