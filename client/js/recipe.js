function generateStar(score){
    let result = ''
    let counter = 0
    if(score>80){
      counter= 5
    }else if (score>60 && score<=80) {
      counter= 4
    }else if (score>40 && score<=60) {
      counter= 3
    }else if (score>20 && score<=40) {
      counter= 2
    }else{
      counter= 1
    }
    for(let i=0; i<counter;i++){
      result+='<i class="fa fa-star" aria-hidden="true"></i>'
    }
    for(let i=0; i<5-counter;i++){
      result+='<i class="fa fa-star-o" aria-hidden="true"></i>'
    }
    return result
  }
  (function( $ ) {
      $.fn.recipeList = function(recipes) {
          let content = ''
          console.log(recipes);
          let elments=this;
          for (element of elments) {
            //console.log(asd);
            for (var index in recipes) {
              content= null;
              content='<div class="col-lg-4 mb-2"><div class="card-deck"><div class="card pt-4 pb-2">';
              content+=`<a href="${recipes[index].source_url}"><img class="card-img-top" src="${recipes[index].image_url}" alt="${recipes[index].title}">`;
              content+=`<h4 class="card-title pl-2 pt-2 pr-2">${recipes[index].title}</h4>`;
              content+=`<p class="pl-4 text-white card-text bg-success "><small>Rating : ${generateStar(recipes[index].social_rank)}</small></p></a>`;
              // console.log(element);
              // console.log(content);
            element.innerHTML+=content;
            }
          }
          // this.each(function(element){
          //
          //
          //
          // })
          this.filter( "a" ).append(function() {
              return " (" + this.href + ")";
          });
          return this;
      };
  }( jQuery ));
