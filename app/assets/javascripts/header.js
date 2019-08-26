
$(document).ready(function()
{

		sidebar = new Sidebar(); 	
	// -------------------------------------- ONCLICK FUNCTION -----------------------------------
		$(".header--menuIcon").click(function()
		{
			var component_hide = $(".sublist");  		//COMPONENT THAT HIDE ON CLICK OF ICON
			header = new Header();
			sidebar.hide_component(component_hide);	 	// HIDING THE COMPONENT USING HIDE FUNCTION OF SIDEBAR


			var viewtype = sidebar.view_type();    		//CHECK THE VIEW TYPE IF IT'S NORMAL OR MINI-VIEW		

			if(viewtype === "normal")
			{
													   // IF VIEW IS NORMAL THEN THE VIEW WILL BE CHANGE DUE 
				header.sidebar_withicon();			   // TO CLICK ON THE MENU ICON AND THE SIDEBAR WITH ICON 
													   // BUT WITH NO NAMEWILL BE SHOWN 
			}
			else
			{	
								   					   // IF VIEW IS MINI THEN THE VIEW WILL BE CHANGE DUE 
				header.sidebar_with_name();			   // TO CLICK ON THE MENU ICON AND THE SIDEBAR WITH ICON 
													   // ALONG WITH NAME WILL BE SHOWN 
			}
			
		})
	// --------------------------------------------------------------------------------------------

	// ------------------------------------- ONSCROLL FUNCTION ------------------------------------
		$(".sidebar").scroll(function()
		{
			var viewtype = sidebar.view_type();    		//CHECK THE VIEW TYPE IF IT'S NORMAL OR MINI-VIEW		

			if(sidebar.comp1!=null)							  
			{
				sidebar.set_component_position(sidebar.comp1);
				// sidebar.set_component_position(sidebar.comp2);
			
			}
			
		})
	// --------------------------------------------------------------------------------------------

})
	


class Header
{

//-------- SHOW THE ITEM IN THE SIDEBAR ONLY WITH ICON AND WITHOT NAME --------- 
	sidebar_withicon()
	{
		$(".sidebar").css({width:"8vw"});                 				// REDUCE THE WIDTH OF SIDEBAR
		$(".sidebar--body").css({"width":"92vw","margin-left":"8vw"});  // INCREASE THE WIDTH OF SIDEBAR
		$(".sidebar__imageSection").css({"background-image":"none"});	// REMOVING THE BACKGROUND IMAGE FROM THE IMAHGE IN SMALL VIEW 
		$(".sidebar").attr("data-sidebarview","mini");    				// SET DATA-SIDEBARVIEW ATTR TO DEFINE THE TYPE 
		$(".list-item__name").css("display","none");	  				// HIDE THE NAME OF THE LIST	
		$(".sublist").css({"position":"absolute"});						// SET THE POSITION ABSOLUTE FOR THE SUBLIST
		$(".sidebar__userinfo").hide();									// HIDING THE USER NAME AND THE USER DESIGNATION
		$(".sidebar__imageSection").css({"height":"25vh"});				// SET THE HEIGHT OF THE IMAGE SECTION
	}
// -----------------------------------------------------------------------------


// ------- SHOW THE ITEMS IN THE SIDEBAR WITH ICON AND THE ITEM NAME -----------
	sidebar_with_name()
	{
		$(".sidebar").css({width:"18vw"});									// INCREASE THE WIDTH OF SIDEBAR
		$(".sidebar--body").css({"width":"82vw","margin-left":"18vw"}); 	// REDUCE THE SIZE OF THE BODY
		$(".sidebar__imageSection").css({"background-image":"linear-gradient(to right bottom,#7851a5,#b04db7)"});
		$(".sidebar").attr("data-sidebarview","normal");  					// SET DATA-SIDEBARVIEW ATTR TO DEFINE THE TYPE 
		$(".list-item__name").css("display","inline-block"); 				// SHOW THE NAME OF THE ITEM IN LIST
		$(".list-item__name").removeClass('list-item__name_smv');			
		$(".sublist").css({"position":"relative",top:0,left:0});
		$(".sidebar__userinfo").show();
		$(".sidebar__imageSection").css({"height":"40vh"});
	}
//-------------------------------------------------------------------------------
}






