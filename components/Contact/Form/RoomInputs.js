"use client";
import { useState } from "react";
import Dropdown from "@/components/Other/Dropdown";

import { UserIcon } from "@/public/vectors/getIcons";
import { Calendar as CalendarIcon } from "lucide-react";

const shortTermPeople = [1, 2, 3, 4, 5, 6, 7, 8];
const mediumTermPeople = [1, 2, 3, 4];
const longTermPeople = [1, 2, 3];
const groupPeople = ["10-19", "20-29", "30+"];

const RoomInputs = ({ stays, groups }) => {
  const [currentStay, setCurrentStay] = useState("short");

  const { shortStay, mediumStay, longStay, groupStay } = stays;
  const stayOptions = [shortStay, mediumStay, longStay, groupStay];
  const [stay, setStay] = useState(shortStay);

  const [people, setPeople] = useState(1);
  const [peopleOptions, setPeopleOptions] = useState(shortTermPeople);

  const { oneOrTwoDays, threeOrMoreDays } = groups;
  const groupOptions = [oneOrTwoDays, threeOrMoreDays];
  const [group, setGroup] = useState(oneOrTwoDays);

  const handleStayOnChange = (value) => {
    setStay(value);
    setPeople(1);

    if (value === shortStay) {
      setCurrentStay("short");
      setPeopleOptions(shortTermPeople);
    } else if (value === mediumStay) {
      setCurrentStay("medium");
      setPeopleOptions(mediumTermPeople);
    } else if (value === longStay) {
      setPeopleOptions(longTermPeople);
      setCurrentStay("long");
    } else if (value === groupStay) {
      setCurrentStay("group");
      setGroup(oneOrTwoDays);
      setPeople("10-19");
      setPeopleOptions(groupPeople);
    }
  };

  return (
    <div className="mb-4 flex flex-col sm:flex-row gap-0 sm:gap-4">
      <div className="flex flex-1 items-center gap-2 mb-2 sm:mb-0">
        {currentStay === "group" ? (
          <>
            <Dropdown
              value={group}
              options={groupOptions}
              onChange={(value) => setGroup(value)}
              divClass={"relative flex-1"}
            />
            <CalendarIcon className="w-5 h-5 text-indigo-900" />
          </>
        ) : null}
        <Dropdown
          className="flex flex-1"
          value={people}
          options={peopleOptions}
          onChange={(value) => setPeople(value)}
          divClass={"relative flex-1"}
        />
        <UserIcon className="w-5 h-5" />
      </div>

      <div className="flex flex-1 items-center gap-y-4">
        <Dropdown
          value={stay}
          options={stayOptions}
          onChange={(value) => handleStayOnChange(value)}
          divClass={"relative flex-1"}
        />
      </div>
    </div>
  );
};

export default RoomInputs;
