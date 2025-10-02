// Format minutes to hours and minutes
export const formatTime = (minutes: number) => {
  if (minutes === 0) return '0 min'

  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60

  if (hours === 0) return `${mins} min`
  if (mins === 0) return `${hours}h`

  return `${hours}h ${mins}min`
}
