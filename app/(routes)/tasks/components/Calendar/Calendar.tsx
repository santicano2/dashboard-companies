"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import multiMonthPlugin from "@fullcalendar/multimonth";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { DateSelectArg, EventContentArg } from "@fullcalendar/core/index.js";

import { formatDate } from "@/lib/formatDate";

import { CalendarProps } from "./Calendar.types";

export function Calendar(props: CalendarProps) {
  const { companies, events } = props;
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [onSaveNewEvent, setOnSaveNewEvent] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DateSelectArg>();
  const [newEvent, setNewEvent] = useState({
    eventName: "",
    companySelected: {
      name: "",
      id: "",
    },
  });

  const handleDateClick = async (selected: DateSelectArg) => {
    setOpen(true);
    setSelectedItem(selected);
  };

  const handleEventClick = () => {
    console.log("event");
  };

  return (
    <div>
      <div className="md:flex gap-x-3">
        <div className="w-[200px] relative">
          <div className="overflow-auto absolute left-0 top-0 h-full w-full">
            {events.map((currentEvent) => (
              <div
                key={currentEvent.id}
                className="p-4 rounded-lg shadow-md mb-2 bg-slate-200 dark:bg-background"
              >
                <p className="font-bold">{currentEvent.title}</p>
                <p>{formatDate(currentEvent.start)}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 calendar-container">
          <FullCalendar
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
              multiMonthPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right:
                "timeGridDay,timeGridWeek,dayGridMonth,multiMonthYear,listMonth",
            }}
            height="80vh"
            initialView="dayGridMonth"
            weekends={false}
            events={events}
            eventContent={renderEventContent}
            editable={true}
            selectable={true}
            selectMirror={true}
            select={handleDateClick}
            eventClick={handleEventClick}
          />
        </div>
      </div>
    </div>
  );
}

function renderEventContent(eventInfo: EventContentArg) {
  return (
    <div className="bg-slate-200 dark:bg-background w-full p-1">
      <i>{eventInfo.event.title}</i>
    </div>
  );
}
