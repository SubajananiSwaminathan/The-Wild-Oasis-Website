"use client";

import "react-day-picker/dist/style.css";

import { DayPicker } from "react-day-picker";

import { isWithinInterval } from "date-fns";

import { useReservation } from "./ReservationContext";

function isAlreadyBooked(range, datesArray) {
  return (
    range.from &&
    range.to &&
    datesArray.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to })
    )
  );
}

function DateSelector({ settings, cabin, bookedDates }) {
  const { range, setRange, resetRange } = useReservation();

  // CHANGE
  const regular_price = 23;
  const discount = 23;
  const no_of_nights = 23;
  const cabin_price = 23;

  // SETTINGS
  const { min_booking_length, max_booking_length } = settings;

  return (
    <div className="flex flex-col justify-between">
      <DayPicker
        className="pt-12 place-self-center"
        mode="range"
        onSelect={setRange}
        selected={range}
        min={min_booking_length + 1}
        max={max_booking_length}
        captionLayout="dropdown"
        numberOfMonths={2}
        disabled={{
          before: new Date(),
          after: new Date(new Date().setFullYear(new Date().getFullYear() + 5)),
        }}
      />

      <div className="flex items-center justify-between px-8 bg-accent-500 text-primary-800 h-[72px]">
        <div className="flex items-baseline gap-6">
          <p className="flex gap-2 items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-2xl">${regular_price - discount}</span>
                <span className="line-through font-semibold text-primary-700">
                  ${regular_price}
                </span>
              </>
            ) : (
              <span className="text-2xl">${regular_price}</span>
            )}
            <span className="">/night</span>
          </p>
          {no_of_nights ? (
            <>
              <p className="bg-accent-600 px-3 py-2 text-2xl">
                <span>&times;</span> <span>{no_of_nights}</span>
              </p>
              <p>
                <span className="text-lg font-bold uppercase">Total</span>{" "}
                <span className="text-2xl font-semibold">${cabin_price}</span>
              </p>
            </>
          ) : null}
        </div>

        {range.from || range.to ? (
          <button
            className="border border-primary-800 py-2 px-4 text-sm font-semibold"
            onClick={resetRange}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
