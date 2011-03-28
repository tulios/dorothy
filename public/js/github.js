var github = {
	
	getUrl: function() {
		return "http://github.com/tulios.atom";
	},
	
	getFeedXml: function() {
		$.ajax({
			type: "GET",
			url: github.getUrl(),
			beforeSend: function() {
				$("#loader").show();
			},
			success: function(data) {
				var array = github.getFeedArray(data);
				$("#loader").hide();
				var ul = $("<ul></ul>");
				$(array).each(function(){
					$("<li>" + this[0] + "<br/>" + this[1] + "</li>").appendTo(ul);
				});
				$("#github_feed").html(ul);
			}
		});
	},
	
	getFeedArray: function(xml) {
		var array = new Array();
		$(xml).find("entry").each(function(){
			array.push(
				new Array(
					this.find("title").text(),
					this.find("content").text()
				)
			);
		});
		return array;
	}
	
}

jQuery(document).ready(function(){
	 
	github.getFeedXml();
	
});