jQuery.githubUser = function(username, callback) {
  jQuery.getJSON("http://github.com/api/v1/json/" + username + "?callback=?", callback);
}
 
jQuery.fn.loadRepositories = function(username) {
  var target = this; 
  $.githubUser(username, function(data) {
    var repos = data.user.repositories;
    //sortByNumberOfWatchers(repos);
    sortByLastPushedDateDesc(repos);
		
    var list = $('<dl/>');
    $(repos).each(function() {     
	    if (!this.private) {

				var lastPush = new Date(this.pushed_at).format("dd/mm/yyyy hh:nn")
	      list.append('<dt><a target="blank" href="'+ this.url +'">' + this.name + '</a></dt>');

				var description = this.description;
				if (description == undefined || description == 0) {
					description = "<em>Sem descrição</em>";
				}

	      list.append('<dd><small><em title="último commit">'+lastPush+'</em><br/>' + description + '</small></dd>');
			
			}
    });
		$("#loader").hide();
    target.empty().append(list);
  });
 
  function sortByNumberOfWatchers(repos) {
    repos.sort(function(a,b) {
      return b.watchers - a.watchers;
    });
  }

	function sortByLastPushedDateDesc(repos) {
		repos.sort(function(a, b) {
			if (a.pushed_at > b.pushed_at) return -1;
			if (a.pushed_at < b.pushed_at) return 1;
			return 0;
		});
	}
};

jQuery(document).ready(function(){
	$("#github_projects").loadRepositories("tulios");
});