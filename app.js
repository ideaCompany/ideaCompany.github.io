$(document).ready(function(){
	$('#fullpage').fullpage({
				sectionsColor: ['#446cb3', '#e4f1fe', '#4183d7','#81cfe0', '4ecdc4', '#whitesmoke'],
				anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage','5thpage', 'lastPage'],
				menu: '#menu',
				scrollingSpeed: 1000,
                css3: true,
                afterLoad: function(anchorLink, index){
					if(index == 1){
						$('#section0').fadeIn('slow', function() {
                            $(this).addClass("lightOn");
                        });
					}
                    if(index == 2){
                        $('#section1').find('p').first().fadeIn(300, function(){
                        $('#section1').find('p').last().fadeIn(300);
                        });;
                        $('#section1').find('h1').first().fadeIn(500, function(){
                        $('#section1').find('h1').last().fadeIn(500);
                        });;  
                    }
                    
                  },
                  
                 onLeave: function(index, nextIndex, direction){
                    if (index == 1 && direction == 'down'){
						 $('#section0').removeClass("lightOn");
                         
                     
					}
                    
                     if (index == 2 && direction == 'down'){
						  $('#diagramL').delay(200).animate({
							left: '0%'
						}, 500, 'easeOutCubic');
                        
                        $('#diagramR').delay(1000).animate({
							top: '24%'
						}, 500, 'easeOutCubic');
					}  

                 },
                 onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
                     
                     if(slideIndex == 0 && nextSlideIndex == 1){
                           $('#diagramR').delay(1).animate({
							left: '25%'
						}, 200, 'easeOutCubic');
                     }
                     
                     if(slideIndex == 0 && nextSlideIndex == 1){
                           $('#diagramR').delay(1).animate({
							top: '-25%'
						}, 200, 'easeOutCubic');
                     }
                     
                 }
			});

});