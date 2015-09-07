// 
module.exports = {
  say: function(str){
    console.log('say words: ' + str);
  }
};

exports.say = function(str){
  console.log('say words: ' + str);
}