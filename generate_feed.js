     //Get access to the API
     const apiBaseUrl = 'https://9z3ygyqb5i.execute-api.us-east-1.amazonaws.com/prod'; 
  
     //Function to get the created events
     async function fetchEvents() {
            //Talk to the api and make a GET request
            try {
                const response = await fetch(`${apiBaseUrl}/list-events`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                //Display the event if the GET request worked
                if (response.ok) {
                    const events = await response.json();
                    displayEvents(events);
                } 
                //Log error it GET request didn't work
                else {
                    console.error('Failed to fetch events');
                }
            } catch (error) {
                console.error('Error:', error);
            }
     }

     //Function to display the events
     function displayEvents(events) {
            const eventList = document.getElementById('event-list');
            eventList.innerHTML = '';

            events.forEach(event => {
                 
                //Create a blank event
               const postContainer = document.createElement('div');
                if(postContainer){
                     postContainer.class="post";
                     postContainer.tabIndex=1;
                }

               //Create post body
               const postBody = document.createElement('div');
               if(postBody){
                    postBody.class="post_body";
               }
                 
               //Add event image
               const postImage = document.createElement('img')
               if(postImage){
                    postImage.src = "https://t3.ftcdn.net/jpg/02/68/55/60/360_F_268556012_c1WBaKFN5rjRxR2eyV33znK4qnYeKZjm.jpg";
               }
                 
                //Add event title
                const postTitle = document.createElement('div');
                postTitle.textContent = event.title;
                if(postTitle){
                     postTitle.class="post_title";
                }
                
                //Add event date
                const postDate = document.createElement('p');
                postDate.textContent = `Date: ${event.date} at ${event.time}`;
                
                //Add event description
                const postDescription = document.createElement('div');
                description.textContent = event.description;
                 
                //Add event address
                const postAddress = document.createElement('div');
                postAddress.textContent = `Address: ${event.address}`;
                if(postAddress){
                    postAddress.class="post_address";
                }

                //Add event tag container
                const postTagContainer = document.createElement('div');
                if(postTagContainer){
                    postTagContainer.class="post_tag_display";
                }
                 
                //Add event image
                const imageContainer = document.createElement('div');
                imageContainer.classList.add('image-container');
                event.imageUrls.forEach(url => {
                    const img = document.createElement('img');
                    img.src = url;
                    img.alt = event.title;
                    imageContainer.appendChild(img);
                });
                 

                //Append event info to the blank event
                eventElement.appendChild(postImage);
                eventElement.appendChild(postBody);
                postBody.appendChild(postTitle);
                postBody.appendChild(postDate);
                postBody.appendChild(postDescription);
                postBody.appendChild(postAddress);
                postBody.appendChild(postTagContainer);

                //Append event to the page
                eventList.appendChild(eventElement);
            });
     }

     //Make sure that fetch events still runs while the page is up
     document.addEventListener('DOMContentLoaded', fetchEvents);
 
