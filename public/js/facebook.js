function facebookLike() {
	var likeStr = '<iframe src="http://www.facebook.com/plugins/like.php?href='+document.location+'&amp;layout=button_count&amp;show_faces=true&amp;width=450&amp;action=recommend&amp;font&amp;colorscheme=light&amp;height=21" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:450px; height:21px;" allowTransparency="true"></iframe>';
	
	return likeStr;
}

jQuery(document).ready(function(){
	$(".facebook_like").html(facebookLike());
});