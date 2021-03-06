(function (window, document, undefined) {

  'use strict';

  // Templates
  var allPets =
    '<article class="{{classes}} one_third profile pet-profile" id="pet-{{id}}">'
    + '<figure class="entry-thumbnail">'
      + '<img src="{{photo.1.medium}}" class="attachment-blog-masonry-thumb">'
    + '</figure>'
    + '<div class="pl_content">'
      + '<h2 class="entry-title"><a href="{{url.pet}}">{{name}}</a></h2>'
      + '<div class="pl_subtitle">'
        + '<strong>{{animal}}</strong> - {{age}}, {{gender}}, {{size}}'
      + '</div>'
      + ( typeof description !== 'undefined' ? '<div class="entry-content">{{description}}</div>' : '' )
      + '<div class="actions"><a href="{{url.pet}}" class="button btn-secondary">View Full List</a></div>'
    + '</div>'
  + '</article>';

  var onePet =
    '<div class="pet-profile">'
      + '<div class="actions"><a href="{{url.all}}" class="button btn btn-primary">&larr; Back to List</a></div>'
      + '<article class="{{classes}}" id="pet-{{id}}">'
        + '<div class="gallery">'
          + '<a target="_blank" href="{{photo.1.large}}"><img src="{{photo.1.thumbnail.large}}"></a>&nbsp;'
          + '<a target="_blank" href="{{photo.1.large}}"><img src="{{photo.2.thumbnail.large}}"></a>&nbsp;'
          + '<a target="_blank" href="{{photo.1.large}}"><img src="{{photo.3.thumbnail.large}}"></a>'
        + '</div>'
        + '<div class="entry-content">'
          + '<h2 class="pet-title">{{name}}</h2>'
          + '<div class="pl_subtitle">'
            + '<strong>{{animal}}</strong> - {{age}}, {{gender}}, {{size}}'
          + '</div>'
          + '<div>{{options.multi}}</div>'
          + ( typeof description !== 'undefined' ? '<div class="entry-content">{{description}}</div>' : '' )
        + '<div class="actions"><a href="/adoption-application/" class="button btn btn-primary">Adoption Application</a></div>'
        + '<div class="actions"><a href="{{url.petfinder}}" class="button btn btn-secondary" target="_blank">View Full List</a></div>'
      + '</article>'
    + '</div>'

  var asideAllPets =
  '<h4 class="widget-title">Filter By Type</h4>' +
  '{{checkbox.animals.toggle}}';

  petfinderAPI.init({
    key: petfinder_vars.key, // Learn more: https://www.petfinder.com/developers/api-key
    shelter: petfinder_vars.shelter,
    templates: {
      allPets: allPets,
      onePet: onePet,
      asideAllPets: asideAllPets,
    },
    callback: function () {
      petfinderSort.init(); // If you want to use the filtering plugin
    }
  });

})(window, document);
