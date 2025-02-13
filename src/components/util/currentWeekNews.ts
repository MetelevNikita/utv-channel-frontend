export const getWeekArray = (currentDate: string | number | Date) => {

  const date = new Date(currentDate)
  const weekStart = new Date(date)
  weekStart.setDate(date.getDate() - date.getDay())


  const weekArray = []

  for (let i = 0; i < 7; i++) {
    const weekDay = new Date(weekStart);
    weekDay.setDate(weekStart.getDate() + i);

    weekArray.push(weekDay.toISOString().split('T')[0]);

  }
  return  weekArray

}



