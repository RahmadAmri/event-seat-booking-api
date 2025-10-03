const { Event, Booking } = require("../models");

class Controller {
  static async reserveSeat(req, res, next) {
    try {
      const { event_id, user_id } = req.body;

      if (!event_id || !user_id) {
        return res.status(400).json({
          message: "event_id and user_id are required",
        });
      }

      const userIdStr = String(user_id);
      const eventIdNum = Number(event_id);

      if (isNaN(eventIdNum)) {
        return res.status(400).json({
          message: "event_id must be a valid number",
        });
      }

      const event = await Event.findByPk(eventIdNum);
      if (!event) {
        return res.status(404).json({
          message: "Event not found",
        });
      }

      const existingBooking = await Booking.findOne({
        where: {
          event_id: eventIdNum,
          user_id: userIdStr,
        },
      });

      if (existingBooking) {
        return res.status(400).json({
          message: "User already has a reservation for this event",
        });
      }

      const bookedSeats = await Booking.count({
        where: { event_id: eventIdNum },
      });

      if (bookedSeats >= event.total_seats) {
        return res.status(400).json({
          message: "No seats available for this event",
        });
      }

      const booking = await Booking.create({
        event_id: eventIdNum,
        user_id: userIdStr,
      });

      return res.status(201).json({
        message: "Seat reserved successfully",
        data: {
          id: booking.id,
          event_id: booking.event_id,
          user_id: booking.user_id,
          created_at: booking.created_at,
        },
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
