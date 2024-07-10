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
                const eventElement = document.createElement('div');
                eventElement.classList.add('event');
             
                //Add event title
                const title = document.createElement('h2');
                title.textContent = event.title;

                //Add event description
                const description = document.createElement('p');
                description.textContent = event.description;

                //Add event address
                const address = document.createElement('p');
                address.textContent = `Address: ${event.address}`;

                //Add event date
                const date = document.createElement('p');
                date.textContent = `Date: ${event.date}`;

                //Add event time
                const time = document.createElement('p');
                time.textContent = `Time: ${event.time}`;

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
                eventElement.appendChild(title);
                eventElement.appendChild(description);
                eventElement.appendChild(address);
                eventElement.appendChild(date);
                eventElement.appendChild(time);
                eventElement.appendChild(imageContainer);

                //Append event to the page
                eventList.appendChild(eventElement);
            });
     }

     //Make sure that fetch events still runs while the page is up
     document.addEventListener('DOMContentLoaded', fetchEvents);
 