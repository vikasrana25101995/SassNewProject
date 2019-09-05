class Sidebar
{

	comp1 = null;
	// comp2 = null;

	//-------------------- HIDE THE SUBLIST -----------------------------------------
		hide_component(component)
		{	
			component.hide();
		}
	//-------------------------------------------------------------------------------

	// ------- SET THE POSITION OF THE SUBLIST ACCORDING TO THE SIDEBAR OPTION ------
		set_component_position(component)
		{
			var top = $(component).offset().top - $(window).scrollTop();
			var set_height_from_top = top;
			if(this.view_type()!="normal")
			{
				if(component.hasAttribute("data-itemnumber"))
				{
					var sidebar_width = this.calculate_width(".sidebar");
					$(".list-item__name").addClass('list-item__name_smv');
					$(".list-item__name_smv").css({"top":set_height_from_top,"left":sidebar_width});
				}
				else
				{
					var sidebar_width = this.calculate_width(".sidebar")+this.calculate_width(".list-item__name");
					$(".sublist").css({"top":set_height_from_top,"left":sidebar_width});
				}
			}
		}
	//-------------------------------------------------------------------------------

	//-------------------- CALCULATE THE SIDEBA WIDTH -------------------------------
		calculate_width(class_name)
		{
			var width = $(class_name).outerWidth();
			return width;
		}
	//-------------------------------------------------------------------------------

	//-------------------- SHOW THE SUBLIST -----------------------------------------
		show_component(component)
		{	
			component.show();
		}
	//-------------------------------------------------------------------------------

	// ----- GIVES THE TYPE OF THE VIEW OF SIDEBAR WHETHER IT IS NORMAL OR MINI -----
		view_type()
		{
			return $(".sidebar").attr("data-sidebarview");
		}
	// ------------------------------------------------------------------------------

}	


$(document).ready(function()
{	

	// $(document).on("click",".sidebar-list__list-item",function()
	$(".sidebar-list__list-item").hover(function()
		{	
			sidebar = new Sidebar(); 	
			sidebar.comp1= this;
			sidebar.comp2= $('.sublist');
			if (sidebar.view_type()!="normal")
			{
				var list_name_show = $(this).find("span");
				var list_name_hide = $(".list-item__name");
				var sublist_hide = $(".sublist");

				$(".sidebar-list__list-item").removeClass("sidebar-list__list-item--border-left-color");
				$(this).addClass("sidebar-list__list-item--border-left-color");
				
				// ----------------SIDEBAR FUNCTION CALLING --------------------------
					
					sidebar.hide_component(sublist_hide);  		//HIDING THE SUBLIST	
					sidebar.hide_component(list_name_hide);  	//HIDING THE SUBLIST		
					sidebar.set_component_position(this);     	// SETTING THE SUBLIST POSITION
					sidebar.show_component(list_name_show);  	// SHOW THE SUBLIST 
				// --------------------------------------------------------------------
			}
			else
			{
					$(".list-item__name").removeClass('list-item__name_smv');
					var sublist_name_show = $(this).find("ul");
					var sublist_name_hide = $(".sublist");
			
				// ----------------SIDEBAR FUNCTION CALLING --------------------------
					sidebar.hide_component(sublist_name_hide);  		//HIDING THE SUBLIST	
					sidebar.show_component(sublist_name_show);  	// SHOW THE SUBLIST  
			}
		});

	$(document).on("click",".list-item__name",function()
		{	
			sidebar = new Sidebar();
			if (sidebar.view_type()!="normal")
			{
				var sublist_name_show = $(this).next();
			
				// ----------------SIDEBAR FUNCTION CALLING --------------------------
						
					sidebar.set_component_position(this);     	// SETTING THE SUBLIST POSITION
					sidebar.show_component(sublist_name_show);  	// SHOW THE SUBLIST  
					
				// --------------------------------------------------------------------
			}
		});
	
});
