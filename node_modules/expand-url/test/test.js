var urlExpander= require("../module.js");

describe('expand-url', function(){
  describe('#expand()', function(){
    it('Expand http://nyti.ms/1jhZLJz', function(done){
      urlExpander.expand("http://nyti.ms/1jhZLJz", function(err, longUrl){
			longUrl.should.equal("http://timesmachine.nytimes.com/browser");
			done();
      })
    });

    it('Expand http://goo.gl/siv9G7', function(done){
      urlExpander.expand("http://goo.gl/siv9G7", function(err, longUrl){
			longUrl.should.equal("http://timesmachine.nytimes.com/timesmachine/1970/03/03/78101709.html");
			done();
      });
    });

    // test custom options
    it('Expand http://goo.gl/siv9G7', function(done){
      urlExpander.expand("http://google.com", {
            url: "http://goo.gl/siv9G7"
      }, function(err, longUrl){
			longUrl.should.equal("http://timesmachine.nytimes.com/timesmachine/1970/03/03/78101709.html");
			done();
      });
    });
  });
});
