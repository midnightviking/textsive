// Textsive
(function($){
  //Text + Responsive. Its not that clever huh?
  $.fn.textsive = function(options){
    //Accept Options
    var settings = $.extend({
      minFontSize:10,
      maxFontSize:1000,
      lineHeight:0.95,
      scale:1.25
    },options);
    
    //Return all instances
    return this.each(function(){
      var $this = $(this);
      //Regex finding all the <BR> <br> <br/> \r \n to determine line-breaks
      var newLines = $this.html().trim().split(/[\r\n]|<br\s*[\/]?>/gi);
      var nLines = [];
      //Clear out the original bit of text. I might need to make a less destructive method
      $this.text("");
      
      //Now that the text has been broken into its lines we need to wrap it in a block object to later detect the width. 
      for(var i = 0; i < newLines.length; i++){
        nLines[i] = ("<div>"+newLines[i]+"</div>");        
      }
      //Throw it back in now that "new lines" have been broken into full blocks
      $this.append(nLines);
      
      //So heres the function that gets called whenever the window is resized.
      //Already setup the "line-breaks" so we don't have to reconstruct those
      var resizeMe = function(){        
        /*So the thought here is to take the width of the container divided
        by the number of characters. Instead of the text being uniformly the
        the same size  I can get that nice scale variance where the characters
        form a block. Clamping function for some control, but I like it without.
        */
        $this.find("div").each(function(i){
          var c = $(this).width() / $(this).text().trim().length * settings.scale;
          $(this).css({
              fontSize:  Math.min(Math.max(c, settings.minFontSize), settings.maxFontSize),
              lineHeight: settings.lineHeight +"em"
          });
        });
      };
      
      resizeMe();
      $(window).on("resize",resizeMe);
    });
  };  
}(jQuery));
