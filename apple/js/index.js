$(document).ready(function(){
	var welcome_rules=$('.welcome_rules');
	var pop_ups=$(".pop-ups");
	var _rules_close=$("._rules_close")
	welcome_rules.click(function(){
		pop_ups.show();
	})
	_rules_close.click(function(){
		pop_ups.hide();
	})
})