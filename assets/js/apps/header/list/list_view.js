define(["app",
        "tpl!apps/header/list/templates/list.tpl",
        "tpl!apps/header/list/templates/list_item.tpl",
        "tpl!apps/header/list/templates/dropdown_menu.tpl",
        'bootstrap/bootstrap-dropdown'],
        function(ContactManager, listTpl, listItemTpl, dropdownMnTpl){
  ContactManager.module("HeaderApp.List.View", function(View, ContactManager, Backbone, Marionette, $, _){
    View.Header = Marionette.ItemView.extend({
      template: listItemTpl,
      tagName: "li",

      events: {
        "click a": "navigate"
      },
      
      setTemplate: function(){
    	  if(this.model.get('name') == 'Frameworks') {
    		  this.template = dropdownMnTpl;
    	  }
      },
      navigate: function(e){
        e.preventDefault();
        this.trigger("navigate", this.model);
      },
      
      render: function(){
    	    this.setTemplate();
    	    var args = Array.prototype.slice.apply(arguments);
    	    var result = Marionette.ItemView.prototype.render.apply(this, args);

    	    return result;
      },
      
      onRender: function(){
        if(this.model.selected){
          // add class so Bootstrap will highlight the active entry in the navbar
          this.$el.addClass("active");
        };
      }
    });

    View.Headers = Marionette.CompositeView.extend({
      template: listTpl,
      className: "navbar navbar-inverse navbar-fixed-top",
      itemView: View.Header,
      itemViewContainer: "ul",

      events: {
        "click a.brand": "brandClicked"
      },

      brandClicked: function(e){
        e.preventDefault();
        this.trigger("brand:clicked");
      }
    });
  });

  return ContactManager.HeaderApp.List.View;
});
