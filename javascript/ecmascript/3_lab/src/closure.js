
module.exports = (function() {
    var a = [];
    var i;

    var indexer = function(n) {
        return function() {
            return n;
        };
    };

    for (i = 0; i < 5; i++) {
//        a[i] = (function(n) {
//            return function() {
//                return n;
//            };
//        })(i);
        a[i] = indexer(i);
    }

    return a;
})();
