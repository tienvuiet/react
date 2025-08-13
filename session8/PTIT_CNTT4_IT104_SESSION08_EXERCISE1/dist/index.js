var WeekDays;
(function (WeekDays) {
    WeekDays["monday"] = "thu hai";
    WeekDays["tuesday"] = "thu ba";
    WeekDays["wednesday"] = "thu tu";
    WeekDays["thurday"] = "thu nam";
    WeekDays["friday"] = "thu sau ";
    WeekDays["saturday"] = "thu bay";
    WeekDays["sunday"] = "chu nhat";
})(WeekDays || (WeekDays = {}));
for (let day in WeekDays) {
    console.log(WeekDays[day]);
}
