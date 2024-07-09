{
    function countSheeps(sheep) {
        // TODO
        return sheep.filter(qoy => qoy).length
      }
}

{
    function solution(a, b){
        // your code here
        return a.length < b.length ? a + b + a : b + a + b
      }
}

{
    function isTriangle(a,b,c){
   return a + b > c && a + c > b && c + b > a;
}
}

{
    function friend(friends){
        //your code here
        return friends.filter(a => a.length == 4);
    }
}

{
    function recommendedPressing(sideA, sideB){

        function toSeconds(track){
        track = track.split(':');
        return parseInt(track[1]) + parseInt((track[0] * 60));
        }
        
        function toMinutes(track){
        var mins = Math.floor(track/60);
        var secs = track % 60; 
        return (mins + ':' + secs).toString();
        }
        
        function gapFinder(side){
        if (side.length >= 2){return side.length - 1;}
        else {return 0;}
        }
        
        function totalSideLength(sideInSecs){
        return sideInSecs.reduce(function(sum, value){return sum + value;}, 0) + (gapFinder(sideInSecs)*5);
        }
        
        var secondsA = sideA.map(function(x){return toSeconds(x);});
        var secondsB = sideB.map(function(x){return toSeconds(x);});
        var longestTrackOfA = Math.max.apply(Math, secondsA);
        var longestTrackOfB = Math.max.apply(Math, secondsB);
        
        if (sideA == false && sideB == false) {return -1;}
        
        else if (sideA.length == 0 && sideB.length >= 2){
        var indexOfLongest = secondsB.findIndex(function(x){return x == longestTrackOfB;});
        sideB.splice(indexOfLongest, 1);
        secondsB.splice(indexOfLongest, 1);
        sideA.push(toMinutes(longestTrackOfB));
        secondsA.push(longestTrackOfB);
        }
        
        else if (sideA.length >= 2 && sideB.length == 0){
        var indexOfLongest = secondsA.findIndex(function(x){return x == longestTrackOfA;});
        sideA.splice(indexOfLongest, 1);
        secondsA.splice(indexOfLongest, 1);
        sideB.push(toMinutes(longestTrackOfA));
        secondsB.push(longestTrackOfA);
        } 
        
        else if (sideA.length == 0 && sideB.length == 1){
        sideA = sideB; 
        secondsA = secondsB;
        sideB = [];
        secondsB = [];
        }
        
        var sideALength = totalSideLength(secondsA);
        var sideBLength = totalSideLength(secondsB);
        var longestSide = 0
        sideALength >= sideBLength ? longestSide = sideALength : longestSide = sideBLength;
        var speed = 0;
        var size = 0; 
        
        if (longestSide < 180){
            size = 7;
            speed = 45;
        } else if (longestSide >= 180 && longestSide < 480){
            size = 10;
            speed = 45;
        } else if (longestSide >= 480 && longestSide < 720){
            size = 12;
            speed = 45;
        } else if (longestSide >= 720 && longestSide < 1500){
            size = 12;
            speed = 33;
        } else {
          return -1;
        }
        
        return [sideA, sideB, size, speed];
    }
}

{
    function collision(x1, y1, radius1, x2, y2, radius2) {
        return Math.hypot(x1-x2,y1-y2) <= radius1+radius2;
    }
}

{
    function isIsogram(str){
        return new Set(str.toUpperCase()).size == str.length;
    }
}

{
    function getMiddle(s){
    //Code goes here!
    var middle = s.length / 2;
    return (s.length % 2) 
    ? s.charAt(Math.floor(middle))
    : s.slice(middle - 1, middle + 1);
    }
}

{
    function divisors(integer) {
        var divs = [];
        
        for(var i = 2; i < integer; i++) {
          if(integer % i === 0) {
           divs.push(i);
          }
        }
        
        return divs.length ? divs : integer + ' is prime';
    };
}

{
    function smaller(nums) {
        //code me
          return nums.map((n, i) => {
           return nums.slice(i).filter(v => v < n).length
         });
    }        
}

{
    function makeParts(arr, chunkSize) {
        let outerIdx = 0, tracker = chunkSize, returnArr = []
        for(var i = 0; i < arr.length; i++){
          if(!returnArr[outerIdx]){
            returnArr[outerIdx]=[arr[i]]
          }else{
            returnArr[outerIdx].push(arr[i])
          }
          if(i===tracker-1){
            outerIdx++
            tracker+=chunkSize
          }
        }
        return returnArr
    }
}

{
    function explode(x){
        var score = 0;
        var result = [];
        if((typeof x[0] !== 'number') && (typeof x[1] !=='number')){
            return 'Void!'
         }else if((typeof x[0] !== 'number') && (typeof x[1] ==='number')){
            score = x[1];
          }else if ((typeof x[0] === 'number') && (typeof x[1] !=='number')){
            score = x[0];
          }else{
             score = x[0]+x[1];
          }
          for(let i=0; i<score; i++){
            result.push(x);
        }
        return result;
    }
}

{
    const arrCheck = value =>value.every( Array.isArray )
}

{
    function min(a, t) {
        if (t==='value') { return Math.min(...a) }
        if (t==='index') { return a.indexOf(Math.min(...a)) }
    }
}

{
    const scale = (str, k, n) =>
        str
          .replace(/[^\n]/g,  c => Array(k + 1).join(c))
          .replace(/[^\n]+/g, c => Array(n + 1).join("\n" + c).slice(1));      
}

{
    Number.prototype.toString = function() {return "" + this;}
    Array.prototype.toString = function() {return "[" + this.join(",") + "]";}
    Boolean.prototype.toString = function() {return "" + this;}
    Object.prototype.toString = function() {return "" + this;}
}

{
    function solve([a, ...str]){
        if (!str[0]) return true
        const b = str.pop``
        if (a == b || (a.charCodeAt`` - b.charCodeAt``)**2 == 4) return solve(str)
        return false
    }
}

{
    function convertPalindromes(numbers) {
        return numbers.map(str => Number(str.toString() == str.toString().split('').reverse().join('')))
    };
}

{
    function nextPal(val) {
        for(var i=val+1;;i++){
          var str=i+'';
          if(str.split('').reverse().join('')==str)return i;
        }
    }
}

{
    function geometricMeanI(arr){ 
        let vals = arr.filter( v => !v.big && v >= 0 );
        return vals.length>arr.length*.9 || arr.length-vals.length<2 ? gm(vals) : 0;
      }
      
      const gm = arr => Math.pow(arr.reduce((p,v)=>p*v,1), 1/arr.length)
}

{
    function getAge(inputString){
        return parseInt(inputString);
    }
}

{
    function convertCF(num, scale){
        if (scale==="f"){
          return (num*9)/5+32
        }else if (scale==="c" || scale===undefined){
          return (num-32)*(5/9)
        }else {
          throw new Error("Error");
        }
      }
}

{
    function toTime(seconds) {
        let minutes = Math.trunc(seconds / 60);
        if (minutes >= 60) {
          let hours = Math.trunc(minutes / 60);
          let m = minutes - (60 * hours);
          return hours + ' hour(s) and ' + m + ' minute(s)';
        } else {
          return '0 hour(s) and ' + minutes + ' minute(s)';
        }
      }
}

{
    function sumPPG(...players){
        return players.map(el => el.ppg).reduce((a, b) => a + b)
      }
}

{
    function findYear(month, dayOfWeek){
        for (let year=2014; year<=2050; year++) {
          let firstDay = new Date(year, month, 1);
          if (firstDay.getDay() === dayOfWeek) return year;
        }
        return 0;
      }
}