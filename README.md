**Movie Ticket Booking**
In this website, ticket can be created by the admin for the show and then the user whoever wants to book and watch the show can visit the tickets page where all tickets are available. User is able to book the ticket of any show and can view the booked ticket in room page. Room page contains all the booked tickets of the user. User can also can cel the show.

Packages to install to run the website.
**For Frontend:**
**Axios**: npm install axios
**Routing**: npm i react-router-dom
**Redux**: npm i redux react-redux

**For Backend**:
**Mongoose**: npm install mongoose
**Express**: npm install express
**CORS**: npm install cors



![create ticket](https://github.com/Rashmi18092001/Movie-Ticket-Booking/assets/117255309/bd0abd12-8382-42f6-ab1a-a45ab40c65a8)
Through this form admin can create the tickets of the shows that are available and after filling the details in this form it will generate a ticket with all details mentioned in it in ticket section.

![tickets](https://github.com/Rashmi18092001/Movie-Ticket-Booking/assets/117255309/65dce405-6b53-46c2-86ca-02f7942111da)
This section will contain tickets of all the shows that are available and user can book the show. Booked tickets will be saved in Room section. This adding ticket to room page is done by react-redux concept.

![empty cart](https://github.com/Rashmi18092001/Movie-Ticket-Booking/assets/117255309/30b99dae-365d-47cc-942f-5c96c8edbc81)
When no show is booked by the user it will show this page which also contain link which navigates to the ticket section to book the show.

![Booked show](https://github.com/Rashmi18092001/Movie-Ticket-Booking/assets/117255309/ec8b0519-ef28-4025-93fd-c7937953faed)
If user books the show the ticket is saved in Room section. User is able to cancel the ticket if they want.
