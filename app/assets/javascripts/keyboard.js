
$(function(){
	var $write = $('#write');

	$(' .key').click(function(){
		
		var $this  = $(this),
		character = $this.html();

	
	if ($this.hasClass('key key-space')) character = ' ';
	if ($this.hasClass('tab')) character = "\t";
	if ($this.hasClass('key key-special key-wide')) character = "\n";
	
			
	if ($this.hasClass('key key-wide')) {
		var html = $write.html();
	
		$write.html(html.substr(0, html.length - 1));
		return false;
		}

	$write.html($write.html() + character);
			
			});
});
