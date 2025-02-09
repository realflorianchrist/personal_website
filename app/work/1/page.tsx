"use client";
import { useLanguageContext } from "../../providers/language-provider";

export default function TourBooking() {
  const tourBooking = useLanguageContext("TourBooking");

  return (
    <main>
      {tourBooking.title}
    </main>
  );

}