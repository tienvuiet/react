enum WeekDays{
    monday = "thu hai",
    tuesday = "thu ba",
    wednesday = "thu tu",
    thurday  = "thu nam",
    friday = "thu sau ",
    saturday = "thu bay",
    sunday = "chu nhat"
}
for(let day in WeekDays){
    console.log(WeekDays[day as keyof typeof WeekDays]);
}

