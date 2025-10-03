Seat Reservation System.

Implement an API for reserving a seat for an event. A single user cannot make a reservation for the same event twice.

POST /api/bookings/reserve

{
"event_id": 1,
"user_id": "user123"
}

Events table:

- id (SERIAL PRIMARY KEY)
- name (VARCHAR)
- total_seats (INT)

Bookings table:

- id (SERIAL PRIMARY KEY)
- event_id (INT, event link)
- user_id (VARCHAR)
- created_at (TIMESTAMP)

Your task is to demonstrate your skills.
It usually takes up to three business days to complete a test assignment.

After completing the test assignment, please fill out this form, and I'll get back to you with feedback shortly: https://docs.google.com/forms/d/e/1FAIpQLSfrr0SQXCBLuca5Puk6CyAaLfRSez6W5Erm8FN2DeljXeVTPA/viewform?usp=dialog

Thank you and good luck!
